// This file is not transpiled so it must use CommonJS and ES5

// Register babel to transpile before the tests run
require('babel-register')();

// Disable webpack features that Mocha does not understand
// require.extensions(['.css']) = function() {};