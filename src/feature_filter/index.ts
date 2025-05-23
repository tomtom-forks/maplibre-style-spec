import {createExpression, findGlobalStateRefs} from '../expression';
import type {GlobalProperties, Feature} from '../expression';
import {ICanonicalTileID} from '../tiles_and_coordinates';
import {StylePropertySpecification} from '..';
import {ExpressionFilterSpecification} from '../types.g';

type FilterExpression = (
    globalProperties: GlobalProperties,
    feature: Feature,
    canonical?: ICanonicalTileID
) => boolean;

export type FeatureFilter = {
    filter: FilterExpression;
    needGeometry: boolean;
    getGlobalStateRefs: () => Set<string>;
};

export function isExpressionFilter(filter: any): filter is ExpressionFilterSpecification {
    if (filter === true || filter === false) {
        return true;
    }

    if (!Array.isArray(filter) || filter.length === 0) {
        return false;
    }
    switch (filter[0]) {
        case 'has':
            return filter.length >= 2 && filter[1] !== '$id' && filter[1] !== '$type';

        case 'in':
            return filter.length >= 3 && (typeof filter[1] !== 'string' || Array.isArray(filter[2]));

        case '!in':
        case '!has':
        case 'none':
            return false;

        case '==':
        case '!=':
        case '>':
        case '>=':
        case '<':
        case '<=':
            return filter.length !== 3 || (Array.isArray(filter[1]) || Array.isArray(filter[2]));

        case 'any':
        case 'all':
            for (const f of filter.slice(1)) {
                if (!isExpressionFilter(f) && typeof f !== 'boolean') {
                    return false;
                }
            }
            return true;

        default:
            return true;
    }
}

const filterSpec = {
    'type': 'boolean',
    'default': false,
    'transition': false,
    'property-type': 'data-driven',
    'expression': {
        'interpolated': false,
        'parameters': ['zoom', 'feature']
    }
};

/**
 * Given a filter expressed as nested arrays, return a new function
 * that evaluates whether a given feature (with a .properties or .tags property)
 * passes its test.
 *
 * @private
 * @param {Array} filter MapLibre filter
 * @returns {Function} filter-evaluating function
 */
export function featureFilter(filter: any): FeatureFilter {
    if (filter === null || filter === undefined) {
        return {filter: () => true, needGeometry: false, getGlobalStateRefs: () => new Set()};
    }

    if (!isExpressionFilter(filter)) {
        filter = convertFilter(filter);
    }

    const compiled = createExpression(filter, filterSpec as StylePropertySpecification);
    if (compiled.result === 'error') {
        throw new Error(compiled.value.map(err => `${err.key}: ${err.message}`).join(', '));
    } else {
        const needGeometry = geometryNeeded(filter);
        return {
            filter: (globalProperties: GlobalProperties, feature: Feature, canonical?: ICanonicalTileID) => compiled.value.evaluate(globalProperties, feature, {}, canonical),
            needGeometry,
            getGlobalStateRefs: () => findGlobalStateRefs(compiled.value.expression)
        };
    }
}

// Comparison function to sort numbers and strings
function compare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

function geometryNeeded(filter) {
    if (!Array.isArray(filter)) return false;
    if (filter[0] === 'within' || filter[0] === 'distance') return true;
    for (let index = 1; index < filter.length; index++) {
        if (geometryNeeded(filter[index])) return true;
    }
    return false;
}

function convertFilter(filter?: Array<any> | null): unknown {
    if (!filter) return true;
    const op = filter[0];
    if (filter.length <= 1) return (op !== 'any');
    const converted =
        op === '==' ? convertComparisonOp(filter[1], filter[2], '==') :
            op === '!=' ? convertNegation(convertComparisonOp(filter[1], filter[2], '==')) :
                op === '<' ||
        op === '>' ||
        op === '<=' ||
        op === '>=' ? convertComparisonOp(filter[1], filter[2], op) :
                    op === 'any' ? convertDisjunctionOp(filter.slice(1)) :
                        op === 'all' ? ['all' as unknown].concat(filter.slice(1).map(convertFilter)) :
                            op === 'none' ? ['all' as unknown].concat(filter.slice(1).map(convertFilter).map(convertNegation)) :
                                op === 'in' ? convertInOp(filter[1], filter.slice(2)) :
                                    op === '!in' ? convertNegation(convertInOp(filter[1], filter.slice(2))) :
                                        op === 'has' ? convertHasOp(filter[1]) :
                                            op === '!has' ? convertNegation(convertHasOp(filter[1])) :
                                                true;
    return converted;
}

function convertComparisonOp(property: string, value: any, op: string) {
    switch (property) {
        case '$type':
            return [`filter-type-${op}`, value];
        case '$id':
            return [`filter-id-${op}`, value];
        default:
            return [`filter-${op}`, property, value];
    }
}

function convertDisjunctionOp(filters: Array<Array<any>>) {
    return ['any' as unknown].concat(filters.map(convertFilter));
}

function convertInOp(property: string, values: Array<any>) {
    if (values.length === 0) { return false; }
    switch (property) {
        case '$type':
            return ['filter-type-in', ['literal', values]];
        case '$id':
            return ['filter-id-in', ['literal', values]];
        default:
            if (values.length > 200 && !values.some(v => typeof v !== typeof values[0])) {
                return ['filter-in-large', property, ['literal', values.sort(compare)]];
            } else {
                return ['filter-in-small', property, ['literal', values]];
            }
    }
}

function convertHasOp(property: string) {
    switch (property) {
        case '$type':
            return true;
        case '$id':
            return ['filter-has-id'];
        default:
            return ['filter-has', property];
    }
}

function convertNegation(filter: unknown) {
    return ['!', filter];
}
