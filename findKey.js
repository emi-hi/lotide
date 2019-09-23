const findKey = function(givenobj, callback) {
  for (const each in givenobj) {
    if (callback(givenobj[each])) {
      return each;
    }
  }
};

module.exports = findKey;