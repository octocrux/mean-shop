'use strict';
var assert = require('assert');
var greetings = require('../src/index').greetings;

describe('The program', function () {
  it('greets you', function (){
    assert.equal(greetings(), 'Greetings!');
  });
});
