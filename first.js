var app = require('./config/server');

// var rotaMain = require('./app/routes/main')(app);
// var rotaMainEntregador = require('./app/routes/main_entregador')(app);
// var rotaHome = require('./app/routes/home')(app);
// var rotaSignup = require('./app/routes/signup')(app);


var server = app.listen(3000, function(){
    console.log("Servidor online");
});

var io = require('socket.io').listen(server);

app.set('io', io);

io.on('connection', function(socket){
    console.log("Usuário conectado.");
    socket.on('disconnect', function(){
        console.log('Usuário desconectado.');
    });
    socket.on('entregadorPronto', function(data){
        console.log("ayy");
        app.get('io').emit(
            'teste',
            'data'
        );
    });
});