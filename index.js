'use strict';

var template = require('babel-template');

var __get__ = require('rewire/lib/__get__').toString();
var __set__ = require('rewire/lib/__set__').toString();

var exportGet = "Object.defineProperty(module.exports, '__get__', { value: " + __get__ + ', writable: true });\n';
var exportSet = "Object.defineProperty(module.exports, '__set__', { value: " + __set__ + ', writable: true });\n';

var embed = "\nif (typeof(module.exports) === 'object' || typeof(module.exports) === 'function') {\n" +
  exportGet +
  exportSet +
'}';

var rewireFinalEmbed = template(embed);

module.exports = function() {
  return {
    visitor: {
      Program: function(path) {
        path.pushContainer('body', rewireFinalEmbed());
      }
    }
  };
};
