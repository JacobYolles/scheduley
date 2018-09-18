let db = require('../models');
let moment = require('moment');
let computed = require('../computed/computed');

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
        db.Day.findAll({}).then((dbDates => {
            res.json(dbDates);
        }))
    })

    app.get('/services', (req, res) => {
        db.Service.findAll({})
        .then((services => {
            res.render('index', {services})
        }))
    })

    app.get('/available', (req, res) => {
        db.Days.findAll({}).then(data => {
            computed.hours(data);

        })
    })

    app.get('/services/:service', (req, res) => {
        let serviceSelected = req.params.service;
        db.Day.findAll({
            where: {
                event: serviceSelected
            }
        }).then(service => {
            db.Service.findOne({
                where: {
                    name: service.event
                }
            })
            res.json(service)
        })
    })
}

              //  date: '2018-09-18T00:00:00.000Z'