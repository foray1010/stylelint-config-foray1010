'use strict'

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules'
  ],
  rules: {
    // disable this rule because it is not compatible with SCSS
    'at-rule-no-unknown': null
  }
}
