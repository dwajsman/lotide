
const letterPositions = function(string) {
  const result = {};

  // Get string and remove spaces and convert to lowercase
  string = string.toLowerCase();

  for (let index = 0; index < string.length; index++) {
    const element = string[index];



    if (element !== " ") {


      if (result[element]) {
        result[element].push(index);
      } else {
        result[element] = [];
        result[element].push(index);
      }


    }
  }

  console.log(result);
};

// test

letterPositions('LHL');
letterPositions('because that');
letterPositions('we can skip');