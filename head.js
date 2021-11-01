const assertEqual = require("./assertEqual");

const head = function(arr) {
  return arr[0];
};



// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("yes", "yes");
// assertEqual("yes", "no");
// assertEqual(1, 1);
// assertEqual(1, -1);

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), "Hello");

module.exports = head;
