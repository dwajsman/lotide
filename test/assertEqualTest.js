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
// const tail = require('../tail');
// const takeUntil = require('../takeUntil');
// const without = require('../without');

// TEST CODE


describe('assertEqual TESTS', function () {


  // assertEqual("Lighthouse Labs", "Bootcamp");
  // assertEqual("yes", "yes");
  // assertEqual("yes", "no");
  // assertEqual(1, 1);
  // assertEqual(1, -1);

  it("assertEqual Lighthouse Labs // Bootcamp)", () => {

    const input = assertEqual("Lighthouse Labs", "Bootcamp");
    expect(input).to.be.false;
  });

  it("assertEqual yes // yes )", () => {

    const input = assertEqual("yes", "yes");
    expect(input).to.be.true;
  });

  it("assertEqual yes // no )", () => {

    const input = assertEqual("yes", "no");
    expect(input).to.be.false;
  });

  it("assertEqual 1 // 1 )", () => {

    const input = assertEqual(1, 1);
    expect(input).to.be.true;
  });

  it("assertEqual 1 // -1 )", () => {

    const input = assertEqual(1, -1);
    expect(input).to.be.false;
  });


});



// describe('assertObjectsEqual TESTS', function() {


//   // assertEqual(eqObjects(ab1, ba1), true);



//   it("assertObjectsEqual(ab1, ba1)", () => {

//     const ab1 = { a: "1", b: ["2", "3"] };
//     const ba1 = { b: ["2", "3"], a: "1" };
//     const input = assertObjectsEqual(ab1, ba1);
//     expect(input).to.be.true;
//   });



//   // assertEqual(assertObjectsEqual(ab2, ba2), false);

//   // it("assertObjectsEqual(ab2, ba2)", () => {

//   //   const ab2 = { a: "1", b: ["2", "3"] };
//   //   const ba2 = { b: ["2", "4"], a: "1" };
//   //   const input = assertObjectsEqual(ab2, ba2);
//   //   expect(input).to.be.false;
//   // });


//   // assertEqual(assertObjectsEqual(ab, abc), false);

//   // it("assertObjectsEqual(ab, abc)", () => {

//   //   const ab = { a: "1", b: "2" };
//   //   const abc = { a: "1", b: "2", c: "3" };
//   //   const input = assertObjectsEqual(ab, abc);
//   //   expect(input).to.be.true;
//   // });

// });

//assertEqual(head([1,2,3]), 1);




// const ab1 = { a: "1", b: ["2", "3"] };
// const ba1 = { b: ["2", "3"], a: "1" };
// assertEqual(eqObjects(ab1, ba1), true);

// const ab2 = { a: "1", b: ["2", "3"] };
// const ba2 = { b: ["2", "4"], a: "1" };
// assertEqual(eqObjects(ab2, ba2), false);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
