const eqArrays = require('./eqArrays.js');

const eqObjects = function(object1, object2) {
  let result;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (key in object2) {
        if (Array.isArray(object1[key])) {
          if (Array.isArray(object1[key])) {
            result = eqArrays(object1[key], object2[key]);
          }
        } else if (typeof object1[key] === "object") {
          if (typeof object2[key] === "object") {
            result = eqObjects(object1[key], object2[key]);
            if (result === 'false') {
              return false;
            }
          } else {
            return false;
          }
        } else {
          if (object1[key] === object2[key]) {
            if (result !== false) {
              result = true;
            }
          }
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      }
    }
  } else {
    return false;
  }
  return result;
};

module.exports = eqObjects;