const moment = require('moment');

class DateUtils {
  formatToRequest(date) {
    return moment(date, 'YYYY-MM-DD').utc().format('DD/MM/YYYY');
  }

  formatToDatabase(date) {
    return moment(date, 'DD/MM/YYYY').utc().format('YYYY-MM-DD');
  }
}

module.exports = new DateUtils();
