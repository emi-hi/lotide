const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  } else {
    return false;
  } return true;
};

const assertArraysEqual = function(array1, array2) {
  const trueOrFalse = eqArrays(array1, array2);
  if (trueOrFalse === true) {
    console.log(`✅ ${array1} and ${array2} are the same!`);
  } else {
    console.log(`❌ ${array1} and ${array2} are not the same!`);
  }
};
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
