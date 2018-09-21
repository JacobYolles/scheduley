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

    app.get("/confirmation/:id", function(req, res) {
        db.Customer.findOne({ where: {id: req.params.id} }).then(function(dbCustomer) {
            res.render("confirmation", {
              customer: db.Customer
            });
          });
    })


    app.get("/api/customer", function(req, res) {
        db.Customer.findAll({}).then(function(dbCustomer) {
          res.json(dbCustomer);
        });
      });

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
            console.log('getting hours')
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
        }).then(services => {
            services.forEach(service => {
                if(service.Events.length !== 0) {
                    service.Events.forEach((event, index) => {
                        if (moment().isBefore(event.start)) 
                        event.start = moment.tz(event.start, 'utc').format('ddd, MMM DD YYYY, hh:mm a')
                        else service.Events.splice(index, 1);
                        
                    })
                }
            })
            res.render('servicesoffered', { services })
        })
    })
}
