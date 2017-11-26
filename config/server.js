var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());
app.use(expressSession({
    secret:'ayylmao',
    resave: false,
    saveUninitialized: false
}));
consign()
    .include('app/routes')
    .then('config/connection.js')
    .then('app/models')
    .into(app);
module.exports = app;