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

const without = function(sourceArray, itemsToRemoveArr) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let addLetter = true;
    let currLetter = '';
    for (let a = 0; a < itemsToRemoveArr.length; a++) {
      currLetter = sourceArray[i];
      if (sourceArray[i] === itemsToRemoveArr[a]) {
        addLetter = false;
      }
    }
    if (addLetter === true) {
      newArr.push(currLetter);
    }
  }
  return newArr;
};