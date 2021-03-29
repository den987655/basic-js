const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  throw new CustomError('Not implemented');
  let weight = _weight;

  Object.defineProperty(this, "weight", {
    get: function () {
      return weight;
    },

    set: function (value) {
      data.generalWeight -= weight;
      weight = value;
      data.generalWeight += weight;
    },
  });
};
