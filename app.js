var express = require('express');
var path = require('path');
var logger = require('morgan')
var app = express();
var EventHandler = require('./controllers/events')

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.static('.'));

app.get('/', function(req, res) { res.render('index'); });
app.post('/', EventHandler.onSubmit);

app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;