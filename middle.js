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

const middle = function(array) {
  let middleOutput = [];
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      let midPoint = Math.floor(array.length / 2);
      middleOutput.push(array[midPoint]);
    } else {
      let midPoint1 = array.length / 2 - 1;
      let midpoint2 = array.length / 2;
      middleOutput.push(array[midPoint1], array[midpoint2]);
    }
  }
  return middleOutput;
};

let arr1 = [1,2,3,4];
let arr2 = [0,1,2,3,4];
assertArraysEqual(middle(arr1), middle(arr2));