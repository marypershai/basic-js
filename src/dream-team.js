const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam(dreamTeam) {
    if (Array.isArray(dreamTeam)) {
      let dreamTeamHelper = [];
      for (let i = 0; i < dreamTeam.length; i++) {
        console.log(typeof dreamTeam[i]);
        if ((typeof dreamTeam[i]) == "string") {
          let nameWithoutSpaces = dreamTeam[i].trim();
          dreamTeamHelper.push(nameWithoutSpaces[0].toUpperCase());
        }
      }
      return dreamTeamHelper.sort().join('');
    } else {
      return false;
    }
  }
};
