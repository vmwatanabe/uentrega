module.exports = function(app){
    app.get('/main', function(req, res){
        if (req.session.auth){
            var session = new Object();
            session.name = req.session.name;
            session.email = req.session.email;
            res.render("main/index", {session: session});
        }
        else
            res.render("home/home",  {validation: [{msg: "Você deve fazer login primeiro."}]})
    });
}