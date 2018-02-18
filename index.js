'use strict'

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  rules: {
    // not compatible with SCSS
    'at-rule-no-unknown': null,
    // doesn't work with cssnext mixins
    'no-descending-specificity': null,
    // if used with styled-component, we can expect there are some js files without any style
    'no-empty-source': null
  }
}
