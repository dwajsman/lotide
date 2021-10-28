// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};


const eqArrays = function(arr1, arr2) {
  let resultArr = true;
  //console.log(arr1, arr2);
  for (let index = 0; index < arr1.length; index++) {
    //console.log(arr1[index], arr2[index], assertEqual(arr1[index], arr2[index]));
    resultArr = assertEqual(arr1[index], arr2[index]);
  }
  return resultArr;
};



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key1 in object1) {
    if (Object.hasOwnProperty.call(object1, key1)) {
      if (typeof(object1[key1]) === 'object') {
        let arrResult = eqArrays(object1[key1], object2[key1]);
        if (arrResult === false) { return false };
      } else {
        if (object1[key1] !== object2[key1]) {
          return false;
        }
      }

    }
  }

  return true;

};


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