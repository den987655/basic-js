const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  if (Array.isArray(members)) {
    let arrayOfNames = [];
    for (let names of members) {
      if (typeof names === 'string') {
        const arrName = names.trim().split('');
        arrayOfNames.push(arrName[0])
      }
    }
    return arrayOfNames.sort().join('').toUpperCase()
  } else {
    return false
  }
};
