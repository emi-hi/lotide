const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (const letterIdx in sentence) {
    let letter = sentence[letterIdx];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(Number(letterIdx));
      } else {
        results[letter] = [Number(letterIdx)];
      }
    }
  } return results;
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



assertArraysEqual(letterPositions("hello").e, [1]);