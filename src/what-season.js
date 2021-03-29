const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  throw new CustomError('Not implemented');
  if (date === null) {
    return 'Unable to determine the time of year';
  }

  let mounth = date.getMonth();
  if (mounth === 11 || mounth <= 1) {
    return 'winter';
  }
  if (mounth <= 10) {
    return 'autumn'
  }
  if (mounth <= 4) {
    return 'spring'
  }
  if (mounth <= 7) {
    return 'summer'
  }
};
