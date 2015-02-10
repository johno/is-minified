'use strict'

module.exports = function isMinified(cssOrJsString) {
  if (typeof cssOrJsString !== 'string') {
    throw new TypeError('is-minified expects a string')
  }

  return true
}
