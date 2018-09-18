let moment = require('moment-timezone');
moment.tz('Z');

let computed = {
    week: function () {
        let today = moment().format('MM-DD-YYYY');
        let start = moment().add(1, 'd');
        let aWeekFromStart = moment().add(8, 'd');
        let week = [];
        while (start.isBefore(aWeekFromStart)) {
            let formattedDay = start.format('YYYY-MM-DD')
            week.push(formattedDay);
            start.add(1, 'd');
        }
        return week;
    },
    getHours: function (datesObject) {
        let week = this.week();
        let timesHours = [];
        week.forEach(weekday => {
            datesObject.forEach(day => {
                if (weekday === day.day) {
                    day.Events.forEach(event => {
                        if (event.event === 'open') {
                            let day = event.DayDay;
                            let openTime = event.start;
                            let closeTime = event.end;
                            timesHours.push({
                                day: day,
                                open: openTime, 
                                close: closeTime
                            })
                        }
                    })
                }
            })
        })
        this.getAvailable(timesHours)
    },
    getAvailable: function(hours) {
        let dayOne = hours[0];
        let open = dayOne.open;
        let close = dayOne.close;
        console.log("OPEN", moment.tz(open));
    }
}

computed.week();
module.exports = computed;