const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  } return true;
};

const assertArraysEqual = function(array1, array2) {
  const trueOrFalse = eqArrays(array1, array2);
  if (trueOrFalse === true) {
    console.log(`✅ ${array1} and ${array2} are the same!`);
  } else {
    console.log(`❌ ${array1} and ${array2} are not the same!`);
  }
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