var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var app = express();
var PORT = process.env.PORT || 8080;

var db = process.env.DATABASE_URL || 'localhost'

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgerController.js');
app.use('/', routes);


app.listen(PORT);