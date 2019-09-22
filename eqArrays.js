const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const eqArrays = function(actual, expected) {
  let result;
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length === expected.length) {
      for (let i = 0; i < actual.length; i ++) { //for each item in array
        if (Array.isArray(actual[i]) && Array.isArray(expected[i])) { //both items arrs
          result = eqArrays(actual[i], expected[i]); //recursive
        } else if (Array.isArray(actual[i]) || Array.isArray(expected[i])) { //one array
          result = false;
        } else if (actual[i] !== expected[i]) {
          result = false;
        } else {
          result = true;
        }
      }
    } else {
      result = false;
    }
  } else if (Array.isArray(actual) || Array.isArray(expected)) {
    result = false;
  } else if (!Array.isArray(actual) && !Array.isArray(expected)) {
    if (actual === expected) {
      return true;
    }
  }
  return result;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);// => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false