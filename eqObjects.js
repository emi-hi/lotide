


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

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
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

