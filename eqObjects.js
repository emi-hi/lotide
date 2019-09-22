


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let result;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (key in object2) {
        if (Array.isArray(object1[key])) {
          if (Array.isArray(object1[key])) {
            result = eqArrays(object1[key], object2[key]);
          }
        } else if (typeof object1[key] === "object") {
          if (typeof object2[key] === "object") {
            result = eqObjects(object1[key], object2[key]);
            if (result === 'false') {
              return false;
            }
          } else {
            return false;
          }
        } else {
          if (object1[key] === object2[key]) {
            if (result !== false) {
              result = true;
            }
          }
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      }
    }
  } else {
    return false;
  }
  return result;
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

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));// => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false