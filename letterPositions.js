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



module.exports = letterPositions

//assertArraysEqual(letterPositions("hello").e, [1]);