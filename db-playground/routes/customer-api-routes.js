let db = require('../models');
let moment = require('moment-timezone');

module.exports = function(app) {
    app.post('/appointment', (req, res) => {
        let service = req.body.service;
        let time = req.body.time;

        db.Service.findOne({
            where: {
                name: service
            }
        }).then(data => {
            let duration = data.duration;
            let endTime = moment.tz(time, 'utc').add(duration, 'm');
            let dateOnly = moment.tz(time, 'utc').format('YYYY-MM-DD')
            let startTime = moment.tz(time, 'utc');
            db.Event.create({
                DayDay: dateOnly, 
                event: service, 
                start: startTime,
                end: endTime
            }).then(data => {
                console.log('post data', data);
                res.json(data);
                // res.render('confirmation', data);
            })
        })
    })


    

    app.post('/customer', (req, res) => {
        let name = req.body.name;
        let phone = req.body.phone; 
        let comment = req.body.comment;

        db.Customer.create({
            name, 
            phone, 
            comment
        })
    })
}