const expect = require('chai').expect;
//const chai = require('chai');
const it = require('mocha').it;
const assert = require('chai').assert;


//const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
//const assertObjectsEqual = require('../assertObjectsEqual');
// const countLetters = require('../countLetters');
//const eqArrays = require('../eqArrays');
//const eqObjects = require('../eqObjects');
// const findKey = require('../findKey');
// const findKeyByValue = require('../findKeyByValue');
const head = require('../head');
// const letterPositions = require('../letterPositions');
// const map = require('../map');
// const middle = require('../middle');
// const tail = require('../tail');
// const takeUntil = require('../takeUntil');
// const without = require('../without');

// TEST CODE

describe('head TESTS', function() {


  // assertEqual(eqObjects(ab1, ba1), true);



  it("head([1,2,3]), 1", () => {

    const input = assertEqual(head([1, 2, 3]), 1);
    expect(input).to.be.true;
  });


  
});

