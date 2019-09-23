const flatten = function(inputArr) {
  let newArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (Array.isArray(inputArr[i])) {
      let subArray = inputArr[i];
      for (let a = 0; a < subArray.length; a++) {
        newArr.push(subArray[a]);
      }
    } else {
      newArr.push(inputArr[i]);
    }
  }
  return newArr;
};

module.exports = flatten;
// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]