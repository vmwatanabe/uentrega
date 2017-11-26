var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/home', function(req, res){
    res.render("home/home");
});

app.listen(3000, function(){
    console.log("ae karai");
});