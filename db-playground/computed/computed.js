let moment = require('moment-timezone');
let store = require('../store/store');


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
        let hours = [];
        week.forEach(weekday => {
            datesObject.forEach(day => {
                if (weekday === day.day) {
                    day.Events.forEach(event => {
                        if (event.event === 'open') {
                            let day = event.DayDay;
                            let openTime = event.start;
                            let closeTime = event.end;
                            hours.push({
                                day: day,
                                open: openTime,
                                close: closeTime
                            })
                        }
                    })
                }
            })
        })
        let timeslots = this.getAvailable(hours)
        store.mutations.setTimeslots(timeslots);
    },
    getAvailable: function (hours) {
        let timeslots = [];
        hours.forEach(day => {
            let timeslot = moment.tz(day.open, 'utc');
            let close = moment.tz(day.close, 'utc');
            while (timeslot.isBefore(close)) {
                timeslots.push(timeslot);
                timeslot = moment(timeslot);
                timeslot.add(30, 'm');
            }
        })
        return timeslots;
    },
    compareSchedules(timeslots, service) {
        let serviceDuration = service.duration;
        let slots = store.getters.getTimeslots();
        // console.log('slots before', slots)
        let availableTimes = [];


        timeslots.forEach((time, index) => {
            let timeStart = time.clone();
            let timeEnd = time.clone();
            moment.tz(timeEnd.add(serviceDuration, 'm'), 'utc');
            service.Events.forEach(event => {
                let eventStart = moment.tz(event.start, 'utc');
                let eventEnd = moment.tz(event.end, 'utc');
                if (timeStart.isBetween(eventStart, eventEnd) ||
                    timeEnd.isBetween(eventStart, eventEnd) ||
                    timeStart.isSame(eventStart)) {
                    console.log('conflict!', timeStart, index)
                }
                else availableTimes.push(moment(timeStart).format('dddd, MMMM Do, h:mm a'));
            })
        })
        return availableTimes;
    }
}

module.exports = computed;