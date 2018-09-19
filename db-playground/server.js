let express = require('express');
let db = require('./models');
let exphbs = require('express-handlebars');

let PORT = process.env.PORT || 3000;

let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(express.static('computed'));
app.use(express.static('store'));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//require routes
require('./routes/service-api-routes')(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log('listening on port %s', PORT);
    })
})