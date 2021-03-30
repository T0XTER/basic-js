const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array) {
    let count = 1
    if (!Array.isArray(array)) {
      return 0
    }

    let nestedCount = array.reduce((count, next) => {
      if (Array.isArray(next)) {
        let newCount = this.calculateDepth(next);
        return count > newCount ? count : newCount;
      }
      return count;
    }, 0)

    return count + nestedCount
  }
};