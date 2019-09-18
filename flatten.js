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