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
  '.foo {} /*!\n\n\n*/',
  '/*!\n\n \t\t \n\n*/function() {}'
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

  describe('ignoreSpecialComments: true', function() {
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

    it('should ignore special comments', function() {
      specialCommentStrings.forEach(function(cssOrJsString) {
        assert.ok(isMinified(cssOrJsString, { ignoreSpecialComments: true }))
      })
    })
  })
})
