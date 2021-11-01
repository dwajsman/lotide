const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];

      if (value === element) {
        return key;

      }
    }
  }

};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
