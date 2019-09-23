const middle = function(array) {
  let middleOutput = [];
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      let midPoint = Math.floor(array.length / 2);
      middleOutput.push(array[midPoint]);
    } else {
      let midPoint1 = array.length / 2 - 1;
      let midpoint2 = array.length / 2;
      middleOutput.push(array[midPoint1], array[midpoint2]);
    }
  }
  return middleOutput;
};


module.exports = middle;

