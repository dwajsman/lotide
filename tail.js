// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  // console.log(arr);
  // console.log(arr.slice(1, arr.length))
  return arr.slice(1, arr.length);
};


const assertTail = function(arr1, arr2) {
  for (let index = 0; index < arr2.length; index++) {
    assertEqual(arr1[index], arr2[index]);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertTail(result, ["Lighthouse", "Labs"]);

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!