const findKeyByValue = function(givenObject, expectedValue) {
  let firstKeyWithValue = {};
  for (const keys in givenObject) {
    if ((givenObject[keys]) === expectedValue) {
      firstKeyWithValue = keys;
    }
  }
  return firstKeyWithValue;
};

module.exports = findKeyByValue;

