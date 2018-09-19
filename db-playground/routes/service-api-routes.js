let db = require('../models');
let moment = require('moment');
let computed = require('../computed/computed');
let store = require('../store/store');


module.exports = function (app) {
    app.get('/api/:date', (req, res) => {
        let date = req.params.date;

        db.Day.findAll({
            where: {
                date
            }
        }).then((dbDates => {
            res.json(dbDates);
        }))
    })

    app.get('/all', (req, res) => {
        db.Day.findAll({
            include: [db.Event]
        }).then((dbDates => {
            computed.getHours(dbDates);
            res.json(dbDates);
            let timeslots = store.getters.getTimeslots();
            console.log('get', timeslots)
        }))
    })

    app.get('/', (req, res) => {
        db.Service.findAll({})
            .then((services => {
                res.render('index', { services })
            }))
        db.Day.findAll({
            include: [db.Event]
        }).then((dbDates => {
            computed.getHours(dbDates);
        }))

    })

    app.get('/available', (req, res) => {
        db.Day.findAll({}).then(data => {

        })
    })

    app.get('/services/:service', (req, res) => {
        let serviceSelected = req.params.service;
        console.log('servicesel', serviceSelected)
        db.Service.findOne({
            where: {
                name: serviceSelected
            }, 
            include: [db.Event]
        }).then(service => {
            let timeslots = store.getters.getTimeslots();
            let availableTimes = computed.compareSchedules(timeslots, service)
            console.log('availabletimes', availableTimes);
            res.send(availableTimes);
        })
    })
    app.get('/services', (req, res) => {
        db.Service.findAll({
            include: [db.Event]
        }).then(data => {
            res.json(data);
        })
    })
}

              //  date: '2018-09-18T00:00:00.000Z'