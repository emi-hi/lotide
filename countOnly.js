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
// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });


// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);

