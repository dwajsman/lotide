const expect = require('chai').expect;
//const chai = require('chai');
const it = require('mocha').it;
const assert = require('chai').assert;


const assertArraysEqual = require('../assertArraysEqual');
const assertEqual = require('../assertEqual');
//const assertObjectsEqual = require('../assertObjectsEqual');
// const countLetters = require('../countLetters');
//const eqArrays = require('../eqArrays');
//const eqObjects = require('../eqObjects');
// const findKey = require('../findKey');
// const findKeyByValue = require('../findKeyByValue');
//const head = require('../head');
// const letterPositions = require('../letterPositions');
// const map = require('../map');
// const middle = require('../middle');
const tail = require('../tail');
// const takeUntil = require('../takeUntil');
// const without = require('../without');

// TEST CODE

describe('tail TESTS', function () {


  // const result = tail(["Hello", "Lighthouse", "Labs"]);
  // assertArraysEqual(result, ["Lighthouse", "Labs"]);

  it(`tail(["Hello", "Lighthouse", "Labs"])`, () => {

    const input = tail(["Hello", "Lighthouse", "Labs"]);
    expect(assertArraysEqual(input, ["Lighthouse", "Labs"])).to.be.true;
  });


  // const words = ["Yo Yo", "Lighthouse", "Labs"];
  // tail(words); // no need to capture the return value since we are not checking it
  // assertEqual(words.length, 3); // original array should still have 3 elements!

  // How do you test that the original Arr was not changed? Should I add a function to the tail.js file?


});
