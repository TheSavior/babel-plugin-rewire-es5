'use strict';

function privateFunction() {
  return 1;
}

var privateState = 1; // eslint-disable-line no-unused-vars

var PublicObj = {
  num: 1,
  privateCall: function() {
    return privateFunction();
  }
};

module.exports = PublicObj;
