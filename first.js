/* console.log("ae");
var http = require('http');
var server = http.createServer( function(req, res){
    var args = req.url;
    if (args == '/home')
        res.end("<div>home</div>");
    if (args == '/login')
        res.end("<div>login</div>");
}).listen(3000); */

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var con = require('./config/connection.js');

console.log(con);

app.set('view engine', 'ejs')   ;
app.use(bodyParser.urlencoded({extended: true}));
app.get('/home', function(req, res){
    res.render("home/home");
});

app.get('/signup', function(req, res){
    res.render("signup/index");
});

app.post('/signup/save', function(req, res){
    var dados = req.body;
    res.send(dados);
});

app.get('/main', function(req, res){
    res.render("main/index");
});
app.get('/main_entregador', function(req, res){
    res.render("main_entregador/index");
});

app.listen(3000, function(){
    console.log("ae karai");
});