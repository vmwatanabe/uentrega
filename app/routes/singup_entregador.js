module.exports = function(app){
    app.get('/signup_entregador', function(req, res){
        res.render("signup_entregador/index");
    });
}