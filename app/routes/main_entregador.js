module.exports = function(app){
    app.get('/main_entregador', function(req, res){
        if (req.session.auth && req.session.entregador)
            res.render("main_entregador/index");
        else
            res.render("home/home",  {validation: [{msg: "Você deve fazer login primeiro."}]})
    });
}