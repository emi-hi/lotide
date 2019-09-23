const eqArrays = require('./eqArrays.js');

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

module.exports = assertArraysEqual;

