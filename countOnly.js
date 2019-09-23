const countOnly = function(allItems, itemsToCount) {
  //return a count of the strings that are true
  let itemCount = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (itemCount[item]) {
        itemCount[item] += 1;
      } else {
        itemCount[item] = 1;
      }
    }
  } return itemCount;
};

module.exports = countOnly;
