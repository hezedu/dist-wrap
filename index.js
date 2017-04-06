var fs = require('fs');
var path = require('path');
var tpl = fs.readFileSync(path.join(__dirname, './tpl'), 'utf-8');
tpl = tpl.split('SOURCE');
var top = tpl[0], bottom = tpl[1];
var _findModuleReg = /(module\.exports+)([\s\S]*)(\n|$)/;

function _getNote(source){
  return /^\/\*([\s\S]*)\*\/(\n*)/.exec(source)[0] || '';
}

function _findModule(source){
  var result = _findModuleReg.exec(source);
  return result[0]
}

function _addBlank(source){
  source = source.split('\n');
  for(var i = 0, len = source.length; i < len; i++){
    source[i] = '  ' + source[i];
  }
  return source.join('\n');
}

function wrap(source, name){
  var result = _findModule(source);
  source = source.replace(result, '//' + result);
  var mName = result.split('=')[1];
  mName = /\w+/.exec(mName)[0];
  name = name || mName;
  var _bottom = bottom.replace(/MODULE_REF/g, mName);
  _bottom = _bottom.replace('OUT_NAME', name);
  var headNote = _getNote(source);
  source = source.replace(headNote, '');
  source = _addBlank(source);
  return headNote  + top  + source +  _bottom;
}

module.exports = wrap;
