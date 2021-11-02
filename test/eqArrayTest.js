const expect = require('chai').expect;
//const chai = require('chai');
const it = require('mocha').it;
const assert = require('chai').assert;


// const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
// const assertObjectsEqual = require('../assertObjectsEqual');
// const countLetters = require('../countLetters');
const eqArrays = require('../eqArrays');
//const eqObjects = require('../eqObjects');
// const findKey = require('../findKey');
// const findKeyByValue = require('../findKeyByValue');
// const head = require('../head');
// const letterPositions = require('../letterPositions');
// const map = require('../map');
// const middle = require('../middle');
// const tail = require('../tail');
// const takeUntil = require('../takeUntil');
// const without = require('../without');

// TEST CODE


describe('eqArrays TEST', function() {


  // eqArrays([1, 2, 3], [1, 2, 3]) // => true
  // assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

  it(`eqArrays([1, 2, 3], [1, 2, 3])`, () => {

    const input = eqArrays([1, 2, 3], [1, 2, 3]);
    expect(input).to.be.true;
  });

  // eqArrays([1, 2, 3], [3, 2, 1]) // => false
  // assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  it(`eqArrays([1, 2, 3], [3, 2, 1])`, () => {

    const input = eqArrays([1, 2, 3], [3, 2, 1]);
    expect(input).to.be.false;
  });


  // eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
  // assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
 
  it(`eqArrays(["1", "2", "3"], ["1", "2", "3"])`, () => {

    const input = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    expect(input).to.be.true;
  });
  // eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
  // assertEqual(eqArrays(["1", "2", "3"], ["1", 2, "3"]), false);

  it(`eqArrays(["1", "2", "3"], ["1", "2", 3])`, () => {

    const input = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    expect(input).to.be.false;
  });



});