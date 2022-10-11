const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason(date){
      if(date){
        try {
            let month = date.getUTCMonth();
            console.log(month);
            let season;
            if(month < 2 || month == 11){
              season = 'winter'
            } else if(month > 1 && month < 5) {
                season = 'spring';
            } else if(month > 4 && month <8){
              season = 'summer';
            } else{
              season = 'autumn';
            }
            return season;
        } catch { 
          throw new Error('Invalid date!')
        }
      } else {
        return "Unable to determine the time of year!";
      }
  }
};
