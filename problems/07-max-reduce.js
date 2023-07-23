/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:


*/

let maxWithReduce = function (nums) {
  let largest = 0
  nums.reduce((acc, num) => {
    if (acc > num) {
      largest = acc
      return largest
    }
    else if (num > acc) {
      largest = num
      return largest
    }
  }, 0)

  return largest


};
console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
