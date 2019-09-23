// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😀Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🤬Assertion Failed: ${actual} !=== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

let tail = function(array) {
  let newarray = array.slice(1);
  return newarray;
};




module.exports = tail;


