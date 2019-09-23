const takeUntil = function(array, callback) {
  const output = [];
  for (let x of array) {
    if (callback(x)) {
      return output;
    } else {
      output.push(x);
    }
  }
  return output;
};

module.exports = takeUntil;
