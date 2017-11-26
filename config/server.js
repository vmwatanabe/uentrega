var express = require('express');
var consign = require('consign');

var app = express();

// var con = require('./connection.js');
// var userDAO = require('./../handle/userDAO.js');
app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('config/connection.js')
    .then('app/models')
    .into(app);
module.exports = app;