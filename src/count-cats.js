const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let catCount = 0;

  if (matrix === undefined || !matrix.length) {
    return 0;
  }

  let flatMatrix = matrix.reduce(function (resultArr, currentArr) {
    return resultArr.concat(currentArr);
  })

  flatMatrix.forEach(function (currentElement) {
    if (currentElement == "^^") {
      catCount++;
    }
  });
  return catCount;
};