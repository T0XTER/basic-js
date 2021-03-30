const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) { throw Error }

  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {

    switch (arr[i]) {
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        (resultArr.length && arr[i - 2] != '--discard-next') ? resultArr.pop() : resultArr;
        break;
      case '--double-next':
        (i < arr.length - 1) ? resultArr.push(arr[i + 1]) : resultArr;
        break;
      case '--double-prev':
        (i > 0 && arr[i - 2] != '--discard-next') ? resultArr.push(arr[i - 1]) : resultArr;
        break;
      default:
        resultArr.push(arr[i]);
    }

  }

  return resultArr;
};