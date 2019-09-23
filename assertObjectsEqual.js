const eqObjects = require('./eqObjects');

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  let outputString;
  const inspect = require('util').inspect;
  const actualObject = inspect(actual);
  const expectedObject = inspect(expected);
  if (eqObjects(actual, expected)) {
    outputString = `✅ ${actualObject} === ${expectedObject}!`;
  } else {
    outputString = `❌ ${actualObject} !== ${expectedObject}!`;
  }
  console.log(outputString);
};

module.exports = assertObjectsEqual;