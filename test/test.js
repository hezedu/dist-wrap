var fs = require('fs');
var wrap = require('../index');

var source = fs.readFileSync(__dirname + '/source.js', 'utf-8');
var noop = function(){}
let content = wrap(source);
fs.writeFile(__dirname + '/source-wrap.js', content.headNote + content.code, noop);
content = wrap(source, 'Hello');
fs.writeFile( __dirname + '/source-name-wrap.js', content.headNote + content.code, noop);