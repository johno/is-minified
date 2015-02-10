'use strict'

module.exports = function isMinified(cssOrJsString, options) {
  if (typeof cssOrJsString !== 'string') {
    throw new TypeError('is-minified expects a string')
  }

  options = options || {}

  if (!options.includeSpecialComments) {
    var formattedString = cssOrJsString.replace(/(\/\*\!([\s\S]*?)\*\/)/, '')
  } else {
    var formattedString = cssOrJsString
  }

  return !/(\s){2}|\n/.test(formattedString)
}
