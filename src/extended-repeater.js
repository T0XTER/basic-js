const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (options.addition === undefined) options.addition = '';

  let result = '';

  for (let i = 0; i < +options.repeatTimes; i++) {
    result += str;
    for (let j = 0; j < +options.additionRepeatTimes; j++) {
      result += options.addition;
      if (j < +options.additionRepeatTimes - 1) {
        result += options.additionSeparator;
      }
    }
    if (i < +options.repeatTimes - 1) {
      result += options.separator;
    }
  }

  return result;
};