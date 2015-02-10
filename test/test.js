var assert = require('assert')
var isMinified = require('..')

var minifiedStrings = [
  '.foobar{color:blue}',
  'function(){return false}',
  '.foobar{ color:blue}'
]

var nonMinifiedStrings = [
  '.foobar\n{color:blue}',
  '.foobar{color:blue  }',
  '.foobar{  color:blue  }',
  '.foobar{\t\tcolor:blue     }',
  'function(){return false  }',
  'function()  {return false}',
  '/*!\n\n\   */   .foo{}',
  '/*\n*/'
]

var specialCommentStrings = [
  '/*!\n\n \t\t \n\n*/function() {}',
  '.foo {} /*!\n\n\n*/'
]

describe('is-minified', function() {

  it('should return true for minified strings', function() {
    minifiedStrings.forEach(function(cssOrJsString) {
      assert.ok(isMinified(cssOrJsString))
    })
  })

  it('should return false for non minified strings', function() {
    nonMinifiedStrings.forEach(function(cssOrJsString) {
      assert.ok(!isMinified(cssOrJsString))
    })
  })

  it('should return true for special comment strings', function() {
    specialCommentStrings.forEach(function(cssOrJsString) {
      assert.ok(isMinified(cssOrJsString))
    })
  })
})
