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

var cli = [];
var ent = [];

var objaux;

io.on('connection', function(socket){
    console.log("Usuário conectado.");
    socket.on('disconnect', function(){
        console.log('Usuário desconectado.');
    });
    socket.on('entregadorPronto', function(data){
        console.log("entregador pronto");
        if (cli.length == 0){    
            ent.push(data);
        }else{
            var cliente = cli.shift();
            var aux = 'call'+cliente.email;
            console.log(aux);
            var obj = new Object();
            obj.cliente = cliente;
            obj.entregador = data;
            obj.status = 0;
            objaux = obj;
            var connection = app.config.connection;
            var model_ent = new app.app.models.model_postEnt(connection);
            model_ent.insertEnt(obj);
            socket.broadcast.emit(aux, data);
            socket.emit('confirmEntregador', cliente);
        }
    });
    socket.on('clientePronto', function(data){
        console.log("cliente pronto");
        if (ent.length == 0){
            cli.push(data);
        }else{
            var entregador = ent.shift();
            var aux = 'call'+entregador;
            console.log(aux);
            var obj = new Object();
            obj.cliente = data;
            obj.entregador = entregador;
            obj.status = 0;
            objaux = obj;
            var connection = app.config.connection;
            var model_ent = new app.app.models.model_postEnt(connection);
            model_ent.insertEnt(obj);
            socket.broadcast.emit(aux, data);
            socket.emit('confirmCliente', entregador);
        }

        //socket.emit('confirmaEntrega', data);
    })

    socket.on('entregadorChegou', function(data){
        console.log('entregador chegou');
        var aux = 'arrive'+data;
        socket.broadcast.emit(aux, data);
    });
    socket.on('clienteConfirmou', function(data){
        console.log('cliente confirmou chegou');
        var aux = 'confirm'+data;
        console.log(aux);
        socket.broadcast.emit(aux, data);
    });
    socket.on('entregadorEntregou', function(data){
        console.log('Entregador entregou');
        var aux = 'entregou'+data;
        console.log(aux);
        socket.broadcast.emit(aux, data);
    });
    socket.on('clienteConfirmouEntrega', function(data){
        console.log('cliente confirmou entrega');
        var aux = 'confirmatudo'+data;
        console.log(aux);
        socket.broadcast.emit(aux, data);
    });
});