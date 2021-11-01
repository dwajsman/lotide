const assertEqual = require("./assertEqual");
//compare elements from firstArr to elements from secondArr

function without(firstArr, secondArr) {
  // create newArr with same items as firstArr
  const newArr = [];

  firstArr.forEach(element => {
    newArr.push(element);
  });

  //console.log("before: " + firstArr);

  //Remove items from newArr that exist on secondArr
  for (let i = 0; i < newArr.length; i++) {
    const firstElement = newArr[i];
    for (let j = 0; j < secondArr.length; j++) {
      const secondElement = secondArr[j];

      if (assertEqual(firstElement, secondElement)) {
        //console.log ("removed item: " + firstElement);
        newArr.splice(i, 1)
      }

    }

  }
  //console.log("Before: " + firstArr);
  //console.log("new Arr: " + newArr);

  return newArr;
  

}


//without([1, 2, 3], [1]) 
// => [2, 3]

//without(["1", "2", "3"], [1, 2, "3"]) 
// => ["1", "2"]

//console.log(without([1, 2, 3], [1]))
//console.log(without(["1", "2", "3"], [1, 2, "3"]))


module.exports = without;