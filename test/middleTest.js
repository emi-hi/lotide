// const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js')
const assert = require('chai').assert;


let arr1 = [1,2,3,4];
let arr2 = [0,1,2,3,4,5];
let arr3 = [0,1,2]
describe("#middle", () => {
  it("should return equal for [2,3] and [2,3]", () => {
    assert.deepEqual(middle(arr1), middle(arr2));
  });
  it("should NOT return equal for [1] and [2,3]", () => {
    assert.notDeepEqual(middle(arr3), middle(arr2));
  });
});

