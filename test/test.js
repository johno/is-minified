var assert = require('assert')
var isMinified = require('..')

var minifiedStrings = [
  '.foobar{color:blue}',
  'function(){return false}'
]

var nonMinifiedStrings = [
  '.foobar\n{color:blue}',
  '.foobar{color:blue  }',
  '.foobar{  color:blue  }',
  '.foobar{\t\tcolor:blue  }',
  'function(){return false  }',
  'function()  {return false}'
]

describe('is-minified', function() {

  it('should return true for minified strings', function() {
    minifiedStrings.forEach(function(cssOrJsString) {
      assert.ok(isMinified(cssOrJsString))
    })
  })

  it('should return fase for non minified strings', function() {
    nonMinifiedStrings.forEach(function(cssOrJsString) {
      assert.ok(!isMinified(cssOrJsString))
    })
  })
})
