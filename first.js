var app = require('./config/server');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// var rotaMain = require('./app/routes/main')(app);
// var rotaMainEntregador = require('./app/routes/main_entregador')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaSignup = require('./app/routes/signup')(app);


app.listen(3000, function(){
    console.log("ae karai");
});