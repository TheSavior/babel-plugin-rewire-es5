/* eslint-env mocha */

'use strict';

process.env.NODE_ENV = 'test';

var chai = require('chai');

var sinon = require('sinon');
sinon.assert.expose(chai.assert, {
  prefix: ''
});

before(function() {
  require('babel-core/register');
});
