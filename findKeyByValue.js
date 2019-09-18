const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !=== ${expected}`);
  }
};

const findKeyByValue = function(givenObject, expectedValue) {
  let firstKeyWithValue = {};
  for (const keys in givenObject) {
    if ((givenObject[keys]) === expectedValue) {
      firstKeyWithValue = keys;
    }
  }
  return firstKeyWithValue;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

