var express = require('express');
var path = require('path');
var logger = require('morgan')
var app = express();
var EventHandler = require('./controllers/events');
var bodyParser = require('body-parser'); // allows us to parse req.body in js files
app.use(bodyParser.json()); // to support JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
dotenv.load();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static('.'));

app.get('/', function(req, res) { res.render('index'); });
app.post('/', EventHandler.onSubmit);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express server listening on port ', this.address().PORT);
});

module.exports = app;