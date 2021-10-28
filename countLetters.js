// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return true;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  return false;
};



function countLetters(string) {
  const result = {};
  
  // Get string and remove spaces and convert to lowercase 
  string = string.toLowerCase().replace(/\s+/g, '').trim()
  
  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    if (result[element]){
      result[element] += 1;
    } else {
      result[element] = 1;
    }
    
  }

console.log(result);

}


// test

countLetters('LHL')
countLetters('because that')
countLetters('we can skip')
