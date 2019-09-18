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

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
