const assertEqual = require("./assertEqual");

let result;

const assertArraysEqual = function(arr1, arr2) {
  result = true;

  for (let index = 0; index < arr2.length; index++) {
    assertEqual(arr1[index], arr2[index]);
  }
  
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed - Arrays are equal`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed - Arrays are different`);
  }
};




// assertArraysEqual([1, 2, 3], [1, 2, 3]) // => true 

// assertArraysEqual([1, 2, 3], [3, 2, 1]) // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]) // => true

// assertArraysEqual(["1", "2", "3"], ["1", 2, "3"]) // => false

module.exports = assertArraysEqual;