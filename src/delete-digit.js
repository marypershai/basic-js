const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let numberArr = n.toString(10).split('').map(int => parseInt(int, 10));
  for (let i = 0; i < numberArr.length; i++) {
    let arr1 = numberArr.slice(0, i);
    let arrHelper = arr1.concat(numberArr.slice(i + 1, numberArr.length));
    let newNumber = arrHelper.join('');
    if (newNumber > maxNumber) {
      maxNumber = newNumber;
    }
  }
  return +maxNumber;
}

module.exports = {
  deleteDigit
};
deleteDigit(1001);