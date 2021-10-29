// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return;
  }
  return result = false;
};

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








// TAKE UNTIL 


const takeUntil = function(array, callback) {
  
  let newArr = [];

for (const key in array) {
  if (Object.hasOwnProperty.call(array, key)) {
    const stop = array.length - 1; 
    const element = array[key];
    
    if (callback(element)) return newArr;
    
    newArr.push(element);
    
    if ( key*1 === stop ) return newArr;
    
  }
}


}



// The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2])
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"])
console.log(results2);

console.log('---');

const data3 = [1, 2, 5, 7, 2, 2, 4, 5];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, [1, 2, 5, 7, 2, 2, 4, 5])
console.log(results3);








