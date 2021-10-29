const words = ["ground", "control", "to", "major", "tom"];



const map = function(arr, callback) {
  console.log('array: ', arr);
  console.log('callback: ', callback);
    let newArr = [];

    arr.forEach(element => {
      newArr.push(callback(element))
    });
  
    return newArr;

}


const results1 = map(words, word => word[0]);
console.log(results1);