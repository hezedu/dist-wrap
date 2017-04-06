var fs = require('fs');
var wrap = require('../index');

var source = fs.readFileSync(__dirname + '/source.js', 'utf-8');
var noop = function(){}
fs.writeFile(__dirname + '/source-wrap.js', wrap(source), noop);
fs.writeFile( __dirname + '/source-name-wrap.js', wrap(source, 'Hello'), noop);