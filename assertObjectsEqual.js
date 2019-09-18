const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (key in object2) {
        if (Array.isArray(object1[key])) {
          if (Array.isArray(object1[key])) {
            result = eqArrays(object1[key], object2[key]);
          }
        } else {
          if (object1[key] === object2[key]) {
            result = true;
          }
          if (object1[key] !== object2[key]) {
            result = false;
            return result;
          }
        }
      }
    }
  } return result;
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);