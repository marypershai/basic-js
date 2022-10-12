const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let newStr = '';
  let separatorAddition = '';
  let separator = options.separator ? options.separator : '+';
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let addition = String(options.addition) != 'undefined' ? options.addition : "";
  let additionSeparator = options.additionSeparator ? options.additionSeparator : "|";
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;


  for (let i = 0; i < additionRepeatTimes; i++) {
    separatorAddition = separatorAddition + addition + additionSeparator;
    if (i == additionRepeatTimes - 1) {
      separatorAddition = separatorAddition.substring(0, separatorAddition.length - additionSeparator.length);
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    newStr = newStr + str + separatorAddition + separator;
    if (i == repeatTimes - 1) {
      newStr = newStr.substring(0, newStr.length - separator.length);
    }
  }
  return newStr;
}

module.exports = {
  repeater
};



// repeater(true, { repeatTimes: 3, separator: '??? ', addition: false, additionRepeatTimes: 2, additionSeparator: '!!!' });
repeater('la', { repeatTimes: 3, separator: 's' });
