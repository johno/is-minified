# is-minified [![Build Status](https://secure.travis-ci.org/johnotander/is-minified.png?branch=master)](https://travis-ci.org/johnotander/is-minified)

Check whether a CSS or JS string is minified.

## Installation

```bash
npm install --save is-minified
```

## Usage

```javascript
var isMinified = require('is-minified');

isMinified('.foo{color: blue}');  // => true
isMinified('function(){return true}');  // => true

isMinified('.foo\n{\n\tcolor:blue\n}');  // => false
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
