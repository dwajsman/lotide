// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  }

  const keysObject1 = Object.keys(object1);

  for (const key in object2) {
    if (Object.hasOwnProperty.call(object2, key)) {
      const element2 = object2[key];
      const obj2Keys = Object.keys(object2)

      for (let index = 0; index < Object.keys(object1).length; index++) {
        const obj1Keys = Object.keys(object1);
        const key1 = obj1Keys[index];
        
        obj2Keys.forEach(key2 => {
          if (key1 === key2) {
            console.log("o1", object1, object1[key1], "o2", object2, object2[key2])
            if (object1[key1] !== object2[key2]) {console.log("Boom!");}
          }
        });
        
      }
     
    }
  }

     



};

const eqArrays = function(arr1, arr2) {
  let result;
  for (let index = 0; index < arr2.length; index++) {
    assertEqual(arr1[index], arr2[index]);
  }
  return result;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
