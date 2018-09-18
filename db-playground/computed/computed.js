let moment = require('moment');

let computed = {
    week: function() {
        let today = moment().format('MM-DD-YYYY');
        let start = moment().add(1, 'd');
        let aWeekFromStart = moment().add(8, 'd');
        let week = [];
        while (start.isBefore(aWeekFromStart)) {
            let formattedDay = start.format('MM-DD-YYYY')
            week.push(formattedDay);
            start.add(1, 'd');
        }
        console.log(week);
        return week;
    }, 
}

computed.week();
module.exports = computed;