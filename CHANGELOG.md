## main

### ✨ Features and improvements
- _...Add new stuff here..._

### 🐞 Bug fixes
- _...Add new stuff here..._

## 23.2.3

### ✨ Features and improvements

- Restructure expression syntax documentation ([#1112](https://github.com/maplibre/maplibre-style-spec/pull/1112))
- Add global state ref support ([#1120](https://github.com/maplibre/maplibre-style-spec/pull/1120))

## 23.2.2

### 🐞 Bug fixes

- Fix state validation - no error case ([#1109](https://github.com/maplibre/maplibre-style-spec/pull/1109))

## 23.2.1

### 🐞 Bug fixes

- Validate that `numberArray` and `colorArray` values are non-empty ([#1094](https://github.com/maplibre/maplibre-style-spec/pull/1094))

## 23.2.0

### ✨ Features and improvements

- `glyphs` is now optional even if a symbol layer specifies `text-field`; if it is unset, `text-font` is interpreted as a fallback font list ([#1068](https://github.com/maplibre/maplibre-style-spec/pull/1068))
- `hillshade` layer now supports multiple methods, and the `multidirectional` method supports array values for illumination properties ([#1088](https://github.com/maplibre/maplibre-style-spec/pull/1088))
- Add `global-state` expression and `state` root property ([#1044](https://github.com/maplibre/maplibre-style-spec/pull/1044)).

### 🐞 Bug fixes

- Fix RuntimeError class, make it inherited from Error ([#983](https://github.com/maplibre/maplibre-style-spec/issues/983))
- Validate that `layers` array items are objects instead of throwing an error if not ([#1026](https://github.com/maplibre/maplibre-style-spec/pull/1026))
- Multiple fixes related to validating and parsing of strings containing object prototype keys
   - Fix `validate_object` crashing when object prototype keys used in style's objects ([#1028](https://github.com/maplibre/maplibre-style-spec/pull/1028))
   - Fix `validate_color` crashing when object prototype keys used as color strings ([#1036](https://github.com/maplibre/maplibre-style-spec/pull/1036))
   - Fix color coercion in expressions (e.g. `to_color`) producing invalid colors when object prototype keys used as color strings ([#1036](https://github.com/maplibre/maplibre-style-spec/pull/1036))

## 23.1.0

### ✨ Features and improvements

- Add `vertical-align` option to `format` expression ([#832](https://github.com/maplibre/maplibre-style-spec/issues/832))

## 23.0.0

### ✨ Features and improvements

- Adjust `geometry-type` expression specification and MapLibre GL JS implementation to the historic behavior of only returning `Point`, `LineString` or `Polygon`, not the `Multi...` variants of these. This reverts a recent change to the implementation, which was causing issues in a [large number of styles](https://github.com/maplibre/maplibre-style-spec/issues/965).

## 22.0.1

### 🐞 Bug fixes

- ~~Fix issue with `geomtry-type` filter ([#924](https://github.com/maplibre/maplibre-style-spec/pull/924))~~ This was reverted in 23.0.0 due to causing issues in [a large number of styles](https://github.com/maplibre/maplibre-style-spec/issues/965).

## 22.0.0

### ✨ Features and improvements

- Use named imports internally - no package entrypoints changed ([#904](https://github.com/maplibre/maplibre-style-spec/pull/904))
- Add projection type expression syntax ([#888](https://github.com/maplibre/maplibre-style-spec/pull/888))

## 21.2.0

### ✨ Features and improvements

- Add `vertical-perspective` projection ([#890](https://github.com/maplibre/maplibre-style-spec/pull/890))

## 21.1.0

### ✨ Features and improvements

- Added `centerAltitude` property to stylesheet ([#851](https://github.com/maplibre/maplibre-style-spec/issues/851))

## 21.0.0

### ✨ Features and improvements

- ~~Aligned the implementation of `["geometry-type"]` with [its spec](https://maplibre.org/maplibre-style-spec/expressions/#geometry-type). Now, when applicable, `["geometry-type"]` returns values not available while using `"$type"`: `"MultiPoint"`, `"MultiLineString"`, and `"MultiPolygon"`. The behaviour of `"$type"` has not changed. ([#519](https://github.com/maplibre/maplibre-style-spec/pull/519))~~ This was reverted in 23.0.0 due to causing issues in [a large number of styles](https://github.com/maplibre/maplibre-style-spec/issues/965).

## 20.4.0

### ✨ Features and improvements

* Added `roll` property to stylesheet ([#850](https://github.com/maplibre/maplibre-style-spec/issues/850))

## 20.3.1

### 🐞 Bug fixes

- The `index-of`, `length`, and `slice` expression operators count a UTF-16 surrogate pair as a single character. ([#779](https://github.com/maplibre/maplibre-style-spec/pull/779))

## 20.3.0

### ✨ Features and improvements

- Added `Projection` specifications [#687](https://github.com/maplibre/maplibre-style-spec/pull/687)
- Updated `Sky` specifications to support atmosphere and other required features [#686](https://github.com/maplibre/maplibre-style-spec/pull/686)

### 🐞 Bug fixes

- Change `assert` to `with` in JSON modules. Requires Node.js 18.20.0 or later, and supports Node.js 22.0.0 or later - [#675](https://github.com/maplibre/maplibre-style-spec/pull/675)

## 20.2.0

### ✨ Features and improvements

- Support `distance` expression in web style spec - [#642](https://github.com/maplibre/maplibre-style-spec/pull/642)

## 20.1.1

### 🐞 Bug fixes

- Add missing sky in diff results [#518](https://github.com/maplibre/maplibre-style-spec/pull/518)

## 20.1.0

### ✨ Features and improvements

- Add `latest.json` to dist folder to allow using the full version of the spec [#490](https://github.com/maplibre/maplibre-style-spec/pull/490)

## 20.0.0

### ✨ Features and improvements

* Add back `migrate`, `validate` and `format` to the exported methods of this package [#464](https://github.com/maplibre/maplibre-style-spec/pull/464)
* Add terrain to diff method and improve type. This also removes the `operations` from the API [#460](https://github.com/maplibre/maplibre-style-spec/pull/460)
* Improve the type of `data` in the `GeoJSONSourceSpecification` for TypeScript [#463](https://github.com/maplibre/maplibre-style-spec/pull/463).
* Add expression tests to this repo [#476](https://github.com/maplibre/maplibre-style-spec/pull/476)
* Add Sky spec, this is only the definition, no implementation at this point, only validation [#478](https://github.com/maplibre/maplibre-style-spec/pull/478)

### 🐞 Bug fixes

- Fix queryRenderedFeatures Within a FeatureCollection of polygons [#477](https://github.com/maplibre/maplibre-style-spec/pull/477)

## 19.3.3

### ✨ Features and improvements

* Improve types for feature to include `unknown` [#365](https://github.com/maplibre/maplibre-style-spec/pull/365)
* Improve sprite documentation and supported versions [#390](https://github.com/maplibre/maplibre-style-spec/pull/390)


## 19.3.2

### ✨ Features and improvements

* Add raster dem source `redFactor`, `greenFactor`, `blueFactor`, `baseShift` properties [#326](https://github.com/maplibre/maplibre-style-spec/issues/326)
* Improve error messages around `hillshade` layers not using `raster-dem` sources [#353](https://github.com/maplibre/maplibre-style-spec/pull/353)

## 19.3.1

### ✨ Features and improvements

* Document `raster-fade-duration` property's effect on rendering a video. [#297](https://github.com/maplibre/maplibre-style-spec/pull/297)
* Add and expose `isZoomExpression`. [#267](https://github.com/maplibre/maplibre-style-spec/issues/267)

## 19.3.0

### ✨ Features and improvements

* Add style property definition and validation for symbol layer `text-variable-anchor-offset` layout property. [#112](https://github.com/maplibre/maplibre-style-spec/issues/112)

## 19.2.2

### ✨ Features and improvements

* Trim css color before parsing [#255](https://github.com/maplibre/maplibre-style-spec/pull/255)

## 19.2.1
### ✨ Features and improvements

* Skip running color match regex for hex color or rgb, if not required [#186](https://github.com/maplibre/maplibre-style-spec/pull/186)

## 19.2.0

### ✨ Features and improvements

* Remove mapbox reference from docs and test cases [#111](https://github.com/maplibre/maplibre-style-spec/issues/111)
* Custom CSS Color 4 compliant css color parser [#175](https://github.com/maplibre/maplibre-style-spec/issues/175)

## 19.1.0

### ✨ Features and improvements

* Use D50 white point instead of D65 in HCL/LAB color spaces [#146](https://github.com/maplibre/maplibre-style-spec/pull/146)
* Automated migration of not-CSS-Color-specification-compliant hsl color values [#135](https://github.com/maplibre/maplibre-style-spec/pull/135)

## 19.0.1

### 🐛 Bug fixes

* Restore support for `Color` instances in `Color.parse` [#128](https://github.com/maplibre/maplibre-style-spec/pull/128)


## 19.0.0

### ✨ Features and improvements

* Add support for defining colors using CSS Color 4 syntax [#94](https://github.com/maplibre/maplibre-style-spec/pull/94)

### 🐛 Bug fixes

* Fix color interpolation in HCL and LAB color spaces to use d50 white point instead of d65, in conformance with CSS spec [#146](https://github.com/maplibre/maplibre-style-spec/pull/146)

* Fix incorrect color interpolation in HCL and LAB color spaces when interpolation results are outside the sRGB gamut. [#94](https://github.com/maplibre/maplibre-style-spec/pull/94)

### Breaking changes

Interpretation of interpolation of colors with alpha channel equal to 0 has changed. When interpolating colors with alpha channel equal to 0, the values of the other color channels in the specified color space are included in the calculation. Previously they were ignored and only the alpha value of the other, not fully transparent, color was interpolated. [#94](https://github.com/maplibre/maplibre-style-spec/pull/94)


## 18.0.0
* The maplibre style specification and utilities now has it's own repository. The major bump is mainly a precautionary measure, in case the restructuring causes friction.

## 17.1.0
* Add support for multiple sprites in one style [#1805](https://github.com/maplibre/maplibre-style-spec/pull/1805)

## 17.0.2

* Fix errors when running style-spec bin scripts and added missing help. Removed unnecessary script 'gl-style-composite'. [#1971](https://github.com/maplibre/maplibre-gl-js/pull/1971)

## 17.0.1

* Generated typings file as not created in the build process and was added in this version [#1470](https://github.com/maplibre/maplibre-gl-js/pull/1470)

## 17.0.0

### Breaking changes

* Renamed `ParsingError` to `ExpressionParsingError` as there were two with the same name and added typescript typings [#1468](https://github.com/maplibre/maplibre-gl-js/pull/1468)

## 16.1.0

### ✨ Features and improvements
* Update `icon-padding` symbol layout property to support asymmetric padding [#1289](https://github.com/maplibre/maplibre-gl-js/pull/1289)

## 16.0.0

### Breaking changes

* index.js has been renamed to index.cjs to fix the 'is treated as an ES module file' error in node 12+ [#1223](https://github.com/maplibre/maplibre-gl-js/pull/1223)

## 15.1.0

### ✨ Features and improvements
* Add `icon-overlap` and `text-overlap` symbol layout properties [#347](https://github.com/maplibre/maplibre-gl-js/pull/347)
* Deprecate `icon-allow-overlap` and `text-allow-overlap` symbol layout properties. `icon-overlap` and `text-overlap` are their replacements.

## 15.0.0

### Breaking changes

* The migration to TypeScript [#209](https://github.com/maplibre/maplibre-gl-js/pull/209) removed support for the `mapbox://` protocol.

## 14.0.2

### ✨ Features and improvements
* Fix node entry points [#400](https://github.com/maplibre/maplibre-gl-js/issues/400)

## 14.0.1

### ✨ Features and improvements
* Migrate MapLibre GL JS and the style specification to TypeScript [#209](https://github.com/maplibre/maplibre-gl-js/pull/209)

## 14.0.0

### Breaking changes

* Remove the `--mapbox-api-supported` option of the `gl-style-validate` utility.

## 13.17.0

### ✨ Features and improvements
* Add a `filter` option for GeoJSON sources to filter out features prior to processing (e.g. before clustering). [#9864](https://github.com/mapbox/mapbox-gl-js/pull/9864)

## 13.16.0

### ✨ Features and improvements
* Added `volatile` source property to control storing the tiles in local storage. ([#9702](https://github.com/mapbox/mapbox-gl-js/pull/9702))

* Added `clusterMinPoints` option for clustered GeoJSON sources that defines the minimum number of points to form a cluster. ([#9748](https://github.com/mapbox/mapbox-gl-js/pull/9748))

## 13.15.0

### ✨ Features and improvements
* Add `distance` expression to `style-spec`. This expression returns the shortest distance between a feature and an input geometry ([#9655](https://github.com/mapbox/mapbox-gl-js/pull/9655))

## 13.14.0

### ✨ Features and improvements
* Add `index-of` and `slice` expressions to search arrays and strings for the first occurrence of a specified value and return a section of the original array or string ([#9450](https://github.com/mapbox/mapbox-gl-js/pull/9450)) (h/t [lbutler](https://github.com/lbutler))

## 13.13.1

### ✨ Features and improvements
* Expose `expression.isExpressionFilter(..)` from the bundle. ([#9530](https://github.com/mapbox/mapbox-gl-js/pull/9530))

### 🐛 Bug fixes
* Fix a broken module import where the `style-spec` package was importing files from `mapbox-gl-js`, it's parent repo, causing downstream build systems to break. ([#9522](https://github.com/mapbox/mapbox-gl-js/pull/9522))

## 13.13.0

### ✨ Features and improvements
* Add `within` expression for testing whether an evaluated feature lies within a given GeoJSON object ([#9352](https://github.com/mapbox/mapbox-gl-js/pull/9352)). For example:<br>
`"icon-opacity": ["case", ["==", ["within", "some-polygon"], true], 1,
["==", ["within", "some-polygon"], false], 0]`
* Improve scaling of patterns used in `line-pattern` on all device resolutions and pixel ratios ([#9266](https://github.com/mapbox/mapbox-gl-js/pull/9266))

### 🐛 Bug fixes
* Allow needle argument to `in` expression to be false ([#9295](https://github.com/mapbox/mapbox-gl-js/pull/9295))
* Fix a bug where `icon-image` expression that evaluates to an empty string (`''`) produced a warning ([#9380](https://github.com/mapbox/mapbox-gl-js/pull/9380))
* Prevent exception resulting from `line-dash-array` of empty length ([#9385](https://github.com/mapbox/mapbox-gl-js/pull/9385))

## 13.12.0

* Update `image` expression SDK support table ([#9228](https://github.com/mapbox/mapbox-gl-js/pull/9228))
* Fix `promoteId` for line layers ([#9210](https://github.com/mapbox/mapbox-gl-js/pull/9210), [#9212](https://github.com/mapbox/mapbox-gl-js/pull/9212))

## 13.11.0

### ✨ Features and improvements
* Add `promoteId` option to use a feature property as ID for feature state ([#8987](https://github.com/mapbox/mapbox-gl-js/pull/8987))
* Update `symbol-avoid-edges` documentation regarding global collision detection ([#9157](https://github.com/mapbox/mapbox-gl-js/pull/9157))
* Remove reference to `in` function which has been replaced by the `in` expression ([#9102](https://github.com/mapbox/mapbox-gl-js/pull/9102))

### 🐛 Bug fixes
* Fix bug where `symbol-sort-key` was not used for collisions that crossed tile boundaries ([#9054](https://github.com/mapbox/mapbox-gl-js/pull/9054))

## 13.10.2

### 🐛 Bug fixes
* Fix style validation error messages not being displayed ([#9073](https://github.com/mapbox/mapbox-gl-js/pull/9073))

## 13.10.0

### ✨ Features and improvements
* Add ability to insert images into text labels using an `image` expression within a `format` expression: `"text-field": ["format", "Some text", ["image", "my-image"], "some more text"]` ([#8904](https://github.com/mapbox/mapbox-gl-js/pull/8904))
* Add `in` expression. It can check if a value is in an array (`["in", value, array]`) or a substring is in a string (`["in", substring, string]`) ([#8876](https://github.com/mapbox/mapbox-gl-js/pull/8876))
* Add support for stretchable images (aka nine-part or nine-patch images). Stretchable images can be used with `icon-text-fit` to draw resized images with unstretched corners and borders. ([#8997](https://github.com/mapbox/mapbox-gl-js/pull/8997))
* Add an es modules build of for mapbox-gl-style-spec in dist/ ([#8247](https://github.com/mapbox/mapbox-gl-js/pull/8247)) (h/t [ahocevar](https://github.com/ahocevar))

## 13.9.1

### ✨ Improvement
* Rename `Image` type to `ResolvedImage`, to better represent the result of an `image` expression evaluation. ([#8901](https://github.com/mapbox/mapbox-gl-js/pull/8901))

## 13.9.0

* Add `image` expression operator to determine image availability ([#8684](https://github.com/mapbox/mapbox-gl-js/pull/8684))
* Add a style-spec function to validate that styles are compatible with the Mapbox API ([#8663](https://github.com/mapbox/mapbox-gl-js/pull/8663))

## 13.8.0

- Introduce `text-writing-mode` symbol layer property to allow placing point labels vertically. [#8399](https://github.com/mapbox/mapbox-gl-js/pull/8399)
- Allow `text-color` to be used in formatted expressions to be able to draw different parts of a label in different colors. [#8068](https://github.com/mapbox/mapbox-gl-js/pull/8068)
- Improve conversion of legacy filters with duplicate values. [#8542](https://github.com/mapbox/mapbox-gl-js/pull/8542)

## 13.7.2

### 🐛 Bug fixes
* Fix SDK support spec section for variable label placement ([#8384](https://github.com/mapbox/mapbox-gl-js/pull/8384)) (h/t [@pozdnyakov](https://github.com/pozdnyakov))

### ✨ Features and improvements
* Add SDK support spec section for text-radial-offset  ([#8401](https://github.com/mapbox/mapbox-gl-js/pull/8401))
* Add `*-sort-key` layout property for circle, fill, line ([#8467](https://github.com/mapbox/mapbox-gl-js/pull/8467))
* Expose convertFilter API in the style specification ([#8493](https://github.com/mapbox/mapbox-gl-js/pull/8493))

## 13.7.1

### 🐛 Bug fixes
* Fix format expression options validation ([#8339](https://github.com/mapbox/mapbox-gl-js/pull/8339))
* Fix SDK support information for style properties added in v13.7.0: ([#8384](https://github.com/mapbox/mapbox-gl-js/pull/8384))
    * Add missing SDK support section for `text-radial-offset` property
    * Assign SDK versions for `text-variable-anchor` and `text-justify: auto`

## 13.7.0

### ✨ Features and improvements
* Add `text-radial-offset` style property ([#7596](https://github.com/mapbox/mapbox-gl-js/pull/7596))
* Add `text-variable-anchor` style property ([#7596](https://github.com/mapbox/mapbox-gl-js/pull/7596))
* Add `auto` value to `text-justify` style property ([#7596](https://github.com/mapbox/mapbox-gl-js/pull/7596))

## 13.6.0

### ✨ Features and improvements
* Add `clusterProperties` option for aggregated cluster properties ([#2412](https://github.com/mapbox/mapbox-gl-js/issues/2412), fixed by [#7584](https://github.com/mapbox/mapbox-gl-js/pull/7584))
* Add `number-format` expression ([#7626](https://github.com/mapbox/mapbox-gl-js/pull/7626))
* Add `symbol-sort-key` style property ([#7678](https://github.com/mapbox/mapbox-gl-js/pull/7678))

## 13.5.0

### Features and improvements
* Flattens `all` expressions in converted filters ([#7679](https://github.com/mapbox/mapbox-gl-js/pull/7679))
* Compatibility tables are updated ([#7574](https://github.com/mapbox/mapbox-gl-js/pull/7574))

## 13.4.0

### ✨ Features and improvements
* **Tighten style validation**
    * Disallow expressions as stop values ([#7396](https://github.com/mapbox/mapbox-gl-js/pull/7396))
    * Disallow `feature-state` expressions in filters ([#7366](https://github.com/mapbox/mapbox-gl-js/pull/7366))

## 13.3.0

### 🐛 Bug fixes
* **Expressions**
    * Fix `let` expression stripping expected type during parsing ([#7300](https://github.com/mapbox/mapbox-gl-js/issues/7300), fixed by [#7301](https://github.com/mapbox/mapbox-gl-js/pull/7301))
    * Fix superfluous wrapping of literals in `literal` expression ([#7336](https://github.com/mapbox/mapbox-gl-js/issues/7336), fixed by [#7337](https://github.com/mapbox/mapbox-gl-js/pull/7337))
    * Allow calling `to-color` on values that are already of type `Color` ([#7260](https://github.com/mapbox/mapbox-gl-js/pull/7260))
    * Fix `to-array` for empty arrays (([#7261](https://github.com/mapbox/mapbox-gl-js/pull/7261)))
    * Fix identity functions for `text-field` when using formatted text ([#7351](https://github.com/mapbox/mapbox-gl-js/pull/7351))
    * Fix coercion of `null` to `0` in `to-number` expression ([#7083](https://github.com/mapbox/mapbox-gl-js/issues/7083), fixed by [#7274](https://github.com/mapbox/mapbox-gl-js/pull/7274))

### ✨ Features and improvements
*  Add `fill-extrusion-vertical-gradient` property for controlling shading of fill extrusions ([#5768](https://github.com/mapbox/mapbox-gl-js/issues/5768), fixed by [#6841](https://github.com/mapbox/mapbox-gl-js/pull/6841))

## 13.2.0

### 🐛 Bug fixes
* Update the style-spec's old `gl-style-migrate` script to include conversion of legacy functions and filters to their expression equivalents ([#6927](https://github.com/mapbox/mapbox-gl-js/issues/6927), fixed by [#7095](https://github.com/mapbox/mapbox-gl-js/pull/7095))

### ✨ Features and improvements
* Add `symbol-z-order` symbol layout property to style spec ([#7219](https://github.com/mapbox/mapbox-gl-js/pull/7219))
* Implement data-driven styling support for `*-pattern properties` ([#6289](https://github.com/mapbox/mapbox-gl-js/pull/6289))

## 13.1.1

### 🐛 Bug fixes
* Fix broken module import in mapboxgl-style-spec (v13.0.1) ([#6984](https://github.com/mapbox/mapbox-gl-js/issues/6984), fixed by [#6997](https://api.github.com/repos/mapbox/mapbox-gl-js/pulls/6997))

### ✨ Features and improvements
* Improve formatting for style output ([#7029](https://github.com/mapbox/mapbox-gl-js/pull/7029))

## 13.1.0

### ✨ Features and improvements
* Add `raster-resampling` raster paint property ([#6411](https://github.com/mapbox/mapbox-gl-js/pull/6411)) (h/t [andrewharvey](https://github.com/andrewharvey))
* Add `symbol-placement: line-center` ([#6821](https://github.com/mapbox/mapbox-gl-js/pull/6821))

## 13.0.1

### ⚠️ Breaking changes
* Align implicit type behavior of `match` expressions with with `case/==` ([#6684](https://github.com/mapbox/mapbox-gl-js/pull/6684))
* Update spec so that documentation can automatically capture which functions and expressions can be used with which properties ([#6521](https://github.com/mapbox/mapbox-gl-js/pull/6521))

### ✨ Features and improvements
* Add `feature-state` [#6263](https://github.com/mapbox/mapbox-gl-js/pull/6263)
* Add support for GeoJSON attribution ([#6364](https://github.com/mapbox/mapbox-gl-js/pull/6364)) (h/t [andrewharvey](https://github.com/andrewharvey))
* Upgrade to Flow 0.69 ([#6594](https://github.com/mapbox/mapbox-gl-js/pull/6594))

### 🐛 Bug fixes
* Use named exports for style-spec entrypoint module ([#6601](https://github.com/mapbox/mapbox-gl-js/issues/6601)

## 13.0.0
Malformed package published to NPM.

## 12.0.0

### ⚠️ Breaking changes
* The `"to-string"` expression operator now converts null to an empty string rather than to `"null"`. [#6534](https://github.com/mapbox/mapbox-gl-js/pull/6534)

### ✨ Features and improvements
* 🌈 Add line-gradient property [#6303](https://github.com/mapbox/mapbox-gl-js/pull/6303)
* Add collator expression for controlling case and diacritic sensitivity in string comparisons [#6270](https://github.com/mapbox/mapbox-gl-js/pull/6270)
* Add `is-supported-script` expression for determining if a script is supported. [#6260](https://github.com/mapbox/mapbox-gl-js/pull/6260)
* Add `collator` expression for controlling case and diacritic sensitivity in string comparisons [#6270](https://github.com/mapbox/mapbox-gl-js/pull/6270)
* Add `abs`, `round`, `floor`, and `ceil` expression operators [#6496](https://github.com/mapbox/mapbox-gl-js/pull/6496)
* Add support for Mapzen Terrarium tiles in raster-dem sources [#6110](https://github.com/mapbox/mapbox-gl-js/pull/6110)

### 🐛 Bug fixes
- Fix Rollup build [6575](https://github.com/mapbox/mapbox-gl-js/pull/6575)

## 11.1.1

### 🐛 Bug fixes

* Update SDK support information for `text-font`, and `heatmap-color`, and `hillshade` layer properties.

## 11.1.0

### ✨ Features and improvements

* Avoid use of `new Function` for filters by converting old-style filters to expressions [#5665](https://github.com/mapbox/mapbox-gl-js/pull/5665).

## 11.0.0

### ⚠️ Breaking changes

* Remove constants validating code [#5885](https://github.com/mapbox/mapbox-gl-js/pull/5885)
* `"colorSpace": "hcl"` now uses shortest-path interpolation for hue [#5811](https://github.com/mapbox/mapbox-gl-js/issues/5811)

### ✨ Features and improvements

* Introduce client-side hillshading with `raster-dem` source type and `hillshade` layer type [#5286](https://github.com/mapbox/mapbox-gl-js/pull/5286)
* Add Color#toString and expose Color publicly [#5866](https://github.com/mapbox/mapbox-gl-js/pull/5866)
* Improve typing for `==` and `!=` expressions [#5840](https://github.com/mapbox/mapbox-gl-js/pull/5840)
* Made `coalesce` expressions more useful [#5755](https://github.com/mapbox/mapbox-gl-js/issues/5755)
* Enable implicit type assertions for array types [#5738](https://github.com/mapbox/mapbox-gl-js/pull/5738)

### 🐛 Bug fixes

* Fix standalone browser build [#5736](https://github.com/mapbox/mapbox-gl-js/pull/5736), [#5906](https://github.com/mapbox/mapbox-gl-js/pull/5906)
* Handle NaN as input to step and interpolate expressions [#5757](https://github.com/mapbox/mapbox-gl-js/pull/5757)
* Fix style diffing for changes to GeoJSON sources [#5745](https://github.com/mapbox/mapbox-gl-js/pull/5745)
* Mark layer "type" property as required [#5849](https://github.com/mapbox/mapbox-gl-js/pull/5849)

## 10.1.0

* Remove support for validating and migrating v6 styles [#5604](https://github.com/mapbox/mapbox-gl-js/pull/5604)
* Remove support for validating v7 styles [#5604](https://github.com/mapbox/mapbox-gl-js/pull/5604)
* Remove spaces after commas in `to-string` representation of colors [#5480](https://github.com/mapbox/mapbox-gl-js/pull/5480)
* Fix bugs preventing `mapbox-gl-style-spec` package on NPM from being used externally [#5502](https://github.com/mapbox/mapbox-gl-js/pull/5502)
* Fix flow-typed interface generator [#5478](https://github.com/mapbox/mapbox-gl-js/pull/5478)
* Export `function` [#5584](https://github.com/mapbox/mapbox-gl-js/pull/5584)
* Export `StylePropertySpecification` type [#5593](https://github.com/mapbox/mapbox-gl-js/pull/5593)
* Split the `source_tile` entry in the JSON schema into `source_vector` and `source_raster` [#5604](https://github.com/mapbox/mapbox-gl-js/pull/5604)

### Validation Changes

* Require that `heatmap-color` use expressions instead of stop functions [#5624](https://github.com/mapbox/mapbox-gl-js/issues/5624)
* Remove support for including `{tokens}` in expressions for `text-field` and `icon-image` [#5599](https://github.com/mapbox/mapbox-gl-js/issues/5599)
* Disallow interpolation in expressions for `line-dasharray` [#5519](https://github.com/mapbox/mapbox-gl-js/pull/5519)
* Validate that zoom expressions only appear at the top level of an expression [#5609](https://github.com/mapbox/mapbox-gl-js/issues/5609)
* Validate that `step` and `interpolate` expressions don't have any duplicate stops [#5605](https://github.com/mapbox/mapbox-gl-js/issues/5605)
* Split `curve` expression into `step` and `interpolate` expressions [#5542](https://github.com/mapbox/mapbox-gl-js/pull/5542)
* Validate expression values for enum-typed properties [#5589](https://github.com/mapbox/mapbox-gl-js/pull/5589)
* Improve validation to catch uses of deprecated function syntax [#5667](https://github.com/mapbox/mapbox-gl-js/pull/5667)

## 10.0.1

* Fix bug preventing @mapbox/mapbox-gl-style-spec package from being usable outside of mapbox-gl-js (#5502)

## 10.0.0

* Add expression and heatmap layer support. See Mapbox GL JS v0.40.1 changelog entry for details.

## 9.0.1

* Remove `fast-stable-stringify` dependency (#5152)

## 9.0.0

* Fix validation error on categorical zoom-and-property functions (#4220)
* Relax requirement that styles using "icon-image" must have a "sprite"
* Prevent infinite loop in binarySearchForIndex when duplicate stops are present. (#4503)
* Ensure generated composite function stops are in the correct order (#4509)
* Update SDK support matrices to be current as of GL JS v0.35.1, iOS SDK v3.5.0, Android SDK 5.0.0
* Remove support for implicitly-categorical functions
* BREAKING CHANGE: the API for the `function` module has changed. The `interpolated` and `piecewise-constant` exports
were replaced with a single unnamed export, a function which accepts an object conforming to the style spec "function"
definition, and an object defining a style spec property. It handles color parsing and validation of feature values
internally.
* Functions now support a "default" property.
* `parseColor` was promoted from gl-js.

## 8.11.0

* Merge `feature-filter` repository into this repository #639

## 8.10.0

v8.0.0 styles are fully compatible with v8.10.0.

### Style Specification Changes

* Added `colorSpace` option to functions
* Added `fill-extrusion` layer type
* Add top-level `light` property
* Remove increase maximum `maxzoom` to 24
* Deprecate paint classes :warning:
* Increase strictness of function validation

### Reference JSON & API Changes

* Added `deref` utility
* Added `group_by_layout` utility
* Merge `mapbox-gl-function` repository into this repository

## 8.9.0

v8.0.0 styles are fully compatible with v8.9.0.

* Added identity functions
* Added `auto` value which represents the calculated default value

## 8.8.1

v8.0.0 styles are fully compatible with v8.8.1.

* Fixed style validation for layers with invalid types

## 8.8.0

v8.0.0 styles are fully compatible with v8.8.0.

* Clarified documentation around fill-opacity.
* Update function documentation and validation for property functions.
* Add text-pitch-alignment property.
* Add icon-text-fit, icon-text-fit-padding properties.

## 8.7.0

v8.0.0 styles are fully compatible with v8.7.0.

* Add support for has / !has operators.

## 8.6.0

v8.0.0 styles are fully compatible with v8.6.0.

* Added support for zoom and feature driven functions.

## 8.4.2

v8.0.0 styles are fully compatible with v8.4.2.

* Refactored style validator to expose more granular validation methods

## 8.4.1

v8.0.0 styles are fully compatible with v8.4.1.

* Revert ramp validation checks that broke some styles.

## 8.4.0

v8.0.0 styles are fully compatible with v8.4.0.

* Added `cluster`, `clusterRadius`, `clusterMaxZoom` GeoJSON source properties.

## 8.3.0

v8.0.0 styles are fully compatible with v8.3.0.

* Added `line-offset` style property

## 8.2.1

v8.0.0 styles are fully compatible with v8.2.1.

* Enforce that all layers that use a vector source specify a "source-layer"

## 8.2.0

v8.0.0 styles are fully compatible with v8.2.0.

* Add inline `example` property.
* Enforce that all style properties must have documentation in `doc` property.
* Create minified style specs with `doc` and `example` properties removed.
* `validate` now validates against minified style spec.
* `format` now accepts `space` option to use with `JSON.stringify`.
* Remove `gl-style-spritify`. Mapbox GL sprites are now created automatically by
  the Mapbox style APIs, or for hand-crafted styles, by [spritezero-cli](https://github.com/mapbox/spritezero-cli).

## 8.1.0

v8.0.0 styles are fully compatible with v8.1.0.

* [BREAKING] Simplified layout/paint layer property types to more closely align
  with v7 types.
* Fixed migration script compatibility with newer versions of Node.js and io.js
* Removed `constants` from schema, they were deprecated in v8
* Added style diff utility to generate semantic deltas between two stylesheets
* Added `visibility` property to `circle` layer type
* Added `pitch` property to stylesheet

## 8.0.0

Introduction of Mapbox GL style specification v8. To migrate a v7 style to v8,
use the `gl-style-migrate` script as described in the README.

* [BREAKING] The value of the `text-font` property is now an array of
  strings, rather than a single comma separated string.
* [BREAKING] Renamed `symbol-min-distance` to `symbol-spacing`.
* [BREAKING] Renamed `background-image` to `background-pattern`.
* [BREAKING] Renamed `line-image` to `line-pattern`.
* [BREAKING] Renamed `fill-image` to `fill-pattern`.
* [BREAKING] Renamed the `url` property of the video source type to `urls`.
* [BREAKING] Coordinates in video sources are now specified in [lon, lat] order.
* [BREAKING] Removed `text-max-size` and `icon-max-size` properties; these
  are now calculated automatically.
* [BREAKING] `text-size` and `icon-size` are now layout properties instead of paint properties.
* [BREAKING] Constants are no longer supported. If you are editing styles by
  hand and want to use constants, you can use a preprocessing step with a tool
  like [ScreeSS](https://github.com/screee/screess).
* [BREAKING] The format for `mapbox://` glyphs URLs has changed; you should
  now use `mapbox://fonts/mapbox/{fontstack}/{range}.pbf`.
* [BREAKING] Reversed the priority of layers for calculating label placement:
  labels for layers that appear later in the style now have priority over earlier
  layers.
* Added a new `image` source type.
* Added a new `circle` layer type.
* Default map center location can now be set in the style.
* Added `mapbox://` sprite URLs `mapbox://sprite/{user | "mapbox"}/{id}`

## 7.5.0

* Added gl-style-composite script, for auto-compositing sources in a style.

## 7.4.1

* Use JSON.stringify for formatting instead of js-beautify

## 7.0.0

Introduction of Mapbox GL style specification v7.

* [BREAKING] Improve dashed lines (#234)
* [BREAKING] Remove prerendered layers (#232)
* Explicit visibility property (#212)
* Functions for all properties (#237)

## 6.0.0 (Style spec v6)

Introduction of Mapbox GL style specification v6.

* [BREAKING] New filter syntax (#178)
* [BREAKING] Line gap property (#131)
* [BREAKING] Remove dashes from min/max-zoom (#175)
* [BREAKING] New layout/paint terminology (#166)
* [BREAKING] Single text positioning property (#197)
* Added requirements (#200)
* Added minimum, maximum, and period values (#198)

## 0.0.5 (in progress)

* [BREAKING] Switch to suffix for transition properties (`transition-*` -> `*-transition`).
* Added support for remote, non-Mapbox TileJSON sources.
* [BREAKING] Source `minZoom` and `maxZoom` renamed to `minzoom` and `maxzoom to match TileJSON.
* Added support for `mapbox://` glyph URLs.
* [BREAKING] Renamed `raster-fade` to `raster-fade-duration`.
* Added background-opacity property.
* Added "tokens" property to string values that can autocomplete fields from layers
* Added "units" property to describe value types

## 0.0.4 (Aug 8 2014)

* Initial public release
