const assertEqual = require("./assertEqual");
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("yes", "yes");
// assertEqual("yes", "no");
// assertEqual(1, 1);
// assertEqual(1, -1);

let result;


const eqArrays = function(arr1, arr2) {
  result = true;
  for (let index = 0; index < arr2.length; index++) {
    assertEqual(arr1[index], arr2[index]);
  }
  return result;
};




// eqArrays([1, 2, 3], [1, 2, 3]) // => true 

// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true

// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", 2, "3"]), false);



module.exports = eqArrays;