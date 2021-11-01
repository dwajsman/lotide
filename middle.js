const assertEqual = require("./assertEqual");


let result;

const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


// ACTUAL FUNCTION
const middle = function(array) {
  //resultArr to store return data
  let resultArr = [];
  //IF SMALLER THAN 2 ITEMS RETUN EMPTY ARR
  if (array.length <= 2) {
    return resultArr;
  }
  //IF ODD ITEMS RETURN 1 ITEM ARR
  if (array.length % 2 !== 0) {
    let index = (array.length - 1) / 2;
    resultArr.push(array[index]);
    return resultArr;
  }
  //IF EVEN RETURN 2 ITEMS ARR
  if (array.length % 2 === 0) {
    let index = (array.length) / 2 - 1;
    resultArr.push(array[index]);
    resultArr.push(array[index + 1]);
    return resultArr;
  }

};

// TEST CODE
// ...

// let testA = middle([1]) // => []
// let testB = middle([1, 2]) // => []
// let testC = middle([1, 2, 3]) // => [2]
// let testD = middle([1, 2, 3, 4, 5]) // => [3]
// let testE = middle([1, 2, 3, 4]) // => [2, 3]
// let testF = middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

// console.log(testA);
// console.log(testB);
// console.log(testC);
// console.log(testD);
// console.log(testE);

// console.log(testF);

// assertArraysEqual(testA, []);
// assertArraysEqual(testB, []);
// assertArraysEqual(testC, [2]);
// assertArraysEqual(testD, [3]);
// assertArraysEqual(testE, [2, 3]);
// assertArraysEqual(testF, [3, 4]);

// FUNCTION IMPLEMENTATION

module.exports = middle;
