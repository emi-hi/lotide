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


module.exports = eqArrays;

