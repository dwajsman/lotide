const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

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


// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const ab1 = { a: "1", b: ["2", "3"] };
// const ba1 = { b: ["2", "3"], a: "1" };
// assertEqual(eqObjects(ab1, ba1), true);

// const ab2 = { a: "1", b: ["2", "3"] };
// const ba2 = { b: ["2", "4"], a: "1" };
// assertEqual(eqObjects(ab2, ba2), false);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

module.exports = eqObjects;
