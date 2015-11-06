'use strict';

var __get__ = require('rewire/lib/__get__').toString();
var __set__ = require('rewire/lib/__set__').toString();

var exportGet = "Object.defineProperty(module.exports, '__get__', { value: " + __get__ + ', writable: true });\n';
var exportSet = "Object.defineProperty(module.exports, '__set__', { value: " + __set__ + ', writable: true });\n';

var embed = "\nif (typeof(module.exports) === 'object' || typeof(module.exports) === 'function') {\n" +
  exportGet +
  exportSet +
'}';

module.exports = function(babel) {
  var Plugin = babel.Plugin;
  var t = babel.types;

  return new Plugin('rewire-es5', {
    visitor: {
      Program: function(path) {
        path.body.push(t.literal(embed));
      }
    }
  });
};
