module.exports = function(app){
    app.get('/main_entregador', function(req, res){
        res.render("main_entregador/index");
    });
}