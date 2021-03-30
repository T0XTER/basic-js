const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let turnsCount;
  let secondsCount;
  // Perform calculations (rounded down)
  turnsCount = Math.floor(2 ** [disksNumber] - 1);
  secondsCount = Math.floor(turnsCount / turnsSpeed * 3600);
  // Return an object with appropriate properties
  return {
    turns: turnsCount,
    seconds: secondsCount
  }

};