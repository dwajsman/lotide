// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return result = true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return result = false;
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("yes", "yes");
// assertEqual("yes", "no");
// assertEqual(1, 1);
// assertEqual(1, -1);

let result;


// const tail = function(arr) {
//   // console.log(arr);
//   // console.log(arr.slice(1, arr.length))
//   return arr.slice(1, arr.length);
// };


const eqArrays = function(arr1, arr2) {
  for (let index = 0; index < arr2.length; index++) {
    assertEqual(arr1[index], arr2[index]);
  }
  return result;
};




// eqArrays([1, 2, 3], [1, 2, 3]) // => true 

// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true

// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);