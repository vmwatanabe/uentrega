module.exports = function(app){
    app.get('/main_entregador', function(req, res){
        if (req.session.auth && req.session.entregador){
            var session = new Object();
            session.name = req.session.name;

            
            

            res.render("main_entregador/index", {session: session});
        }
        else
            res.render("home/home",  {validation: [{msg: "Você deve fazer login primeiro."}]})
    });
}