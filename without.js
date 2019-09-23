const without = function(sourceArray, itemsToRemoveArr) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    let addLetter = true;
    let currLetter = '';
    for (let a = 0; a < itemsToRemoveArr.length; a++) {
      currLetter = sourceArray[i];
      if (sourceArray[i] === itemsToRemoveArr[a]) {
        addLetter = false;
      }
    }
    if (addLetter === true) {
      newArr.push(currLetter);
    }
  }
  return newArr;
};

module.exports = without;