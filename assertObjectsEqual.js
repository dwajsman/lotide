
const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line

  const result = eqObjects(actual, expected);


  if(result === true){
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

  return result;
  
};

function objectGenerator() {
  return { a: "1", b: "2" };
}

// const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(assertObjectsEqual(objectGenerator(), ba), true);

// const ab1 = { a: "1", b: ["2", "3"] };
// const ba1 = { b: ["2", "3"], a: "1" };
// assertEqual(eqObjects(ab1, ba1), true);

// const ab2 = { a: "1", b: ["2", "3"] };
// const ba2 = { b: ["2", "4"], a: "1" };
// assertEqual(eqObjects(ab2, ba2), false);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

module.exports = assertObjectsEqual;
