const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let resultArr = [];
    let prev = arr[0];
    let transfRuleArr = ['--double-next', '--double-prev', '--discard-next', '--discard-prev'];
    for (let i = 0; i < arr.length; i++) {
      if (!transfRuleArr.includes(arr[i])) {
        resultArr.push(arr[i]);
        prev = arr[i];
      }
      if (arr[i] == '--double-next'&& i != arr.length-1) {
        resultArr.push(arr[i + 1]);
      } else if (arr[i] == '--double-prev' && i != 0 && prev != '') {
        resultArr.push(prev);
      } else if (arr[i] == '--discard-next' && i != arr.length-1) {
        console.log("discard i++");
        prev = '';
        ++i;
      } else if (arr[i] == '--discard-prev' && i != 0 && prev != '') {
        resultArr.pop()
      }
    }
    return resultArr;
  } else throw new Error("'arr' parameter must be an instance of the Array!");;

}

module.exports = {
  transform
};