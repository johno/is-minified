'use strict'

module.exports = function isMinified(cssOrJsString, options) {
  if (typeof cssOrJsString !== 'string') {
    throw new TypeError('is-minified expects a string')
  }

  options = options || {}

  var regex = options.ignoreSpecialComments ?
    /(\s){2}|\n/ :
    /(\/\*\!([\s\S]*?)\*\/)((\s){2}|\n)/

  return !regex.test(cssOrJsString)
}
