const countLetters = function(inputLetters) {
  let letterCount = {};
  for (const letter of inputLetters) {
    if (letter !== ' ') {
      if (letterCount[letter]) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }
  }
  return letterCount;
};

//console.log(countLetters("lighthouse in the house"))

module.exports = countLetters;