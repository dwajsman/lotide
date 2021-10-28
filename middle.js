// TEST/ASSERTION FUNCTIONS
const assertEqual = function (actual, expected) {

  if (actual === expected) {
    return;
  }
  return result = false;
};

let result;

const eqArrays = function (arr1, arr2) {
  result = true;
  for (let index = 0; index < arr2.length; index++) {
    assertEqual(arr1[index], arr2[index]);
  }
  return result;
};

const assertArraysEqual = function (arr1, arr2) {
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

// ACTUAL FUNCTION
const middle = function (array) {
  //resultArr to store return data
  let resultArr = [];
  //IF SMALLER THAN 2 ITEMS RETUN EMPTY ARR
  if (array.length <= 2) {
    return resultArr;
  }
  //IF ODD ITEMS RETURN 1 ITEM ARR
  if (array.length % 2 !== 0) {
    let index = (array.length - 1) / 2
    resultArr.push(array[index]);
    return resultArr;
  }
  //IF EVEN RETURN 2 ITEMS ARR
  if (array.length % 2 === 0) {
    let index = (array.length) / 2 - 1
    resultArr.push(array[index]);
    resultArr.push(array[index + 1]);
    return resultArr;
  }

}

// TEST CODE
// ...

let testA = middle([1]) // => []
let testB = middle([1, 2]) // => []
let testC = middle([1, 2, 3]) // => [2]
let testD = middle([1, 2, 3, 4, 5]) // => [3]
let testE = middle([1, 2, 3, 4]) // => [2, 3]
let testF = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// console.log(testA);
// console.log(testB);
// console.log(testC);
// console.log(testD);
// console.log(testE);

// console.log(testF);

assertArraysEqual(testA, []);
assertArraysEqual(testB, []);
assertArraysEqual(testC, [2]);
assertArraysEqual(testD, [3]);
assertArraysEqual(testE, [2, 3]);
assertArraysEqual(testF, [3, 4]);

// FUNCTION IMPLEMENTATION

