let express = require('express');
let db = require('./models');
let exphbs = require('express-handlebars');

let PORT = process.env.PORT || 3000;

let bodyParser = require('body-parser');
let app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(bodyParser.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//require routes
require('./routes/service-api-routes')(app);

//Hair Routes
require("./routes/auto-api-routes")(app);
require("./routes/hair-api-routes")(app);
require("./routes/htmlRoutes")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log('listening on port %s', PORT);
    })
})