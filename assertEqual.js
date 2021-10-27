// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("yes", "yes");
assertEqual("yes", "no");
assertEqual(1, 1);
assertEqual(1, -1);


