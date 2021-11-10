const moment = require('moment');

class DateUtils {
    formatToRequest(date) {
        return date = moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
    };
    
    formatToDatabase(date) {
        return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
    };
}

module.exports = new DateUtils()



