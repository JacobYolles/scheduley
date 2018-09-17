let express = require('express');
let db = require('./models');

let PORT = process.env.PORT || 3000;

let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(express.static('public'));

//require routes

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log('listening on port %s', PORT);
    })
})