const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i ++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  } else {
    return false;
  } return true;
};
const assertArraysEqual = function(actual, expected) {
  const trueOrFalse = eqArrays(actual, expected);
  let outputString;
  if (trueOrFalse) {
    outputString = `✅ ${actual} and ${expected} are the same!`;
  } else {
    outputString = `❌ ${actual} and ${expected} are not the same!`;
  }
  console.log(outputString);
};

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
  console.log(newArr);
};
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]