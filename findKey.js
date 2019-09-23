const findKey = function(givenobj, callback) {
  for (const each in givenobj) {
    if (callback(givenobj[each])) {
      return each;
    }
  }
};

// let testobj = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma")


// const socialData = {
//   f01: {
//     name: "Alice",
//     age: 15,
//     follows: ["f02", "f03", "f04"]
//   },
//   f02: {
//     name: "Bob",
//     age: 20,
//     follows: ["f05", "f06"]
//   },
//   f03: {
//     name: "Charlie",
//     age: 35,
//     follows: ["f01", "f04", "f06"]
//   },
//   f04: {
//     name: "Debbie",
//     age: 40,
//     follows: ["f01", "f02", "f03", "f05", "f06"]
//   },
//   f05: {
//     name: "Elizabeth",
//     age: 45,
//     follows: ["f04"]
//   },
//   f06: {
//     name: "Finn",
//     age: 25,
//     follows: ["f05"]
//   }
// };

// let overThirty = (findKey(socialData, x => x.age > 30));

// console.log(overThirty)

module.exports = findKey;