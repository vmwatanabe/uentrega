module.exports = function(application){
    application.get('/logout', function(req, res){
        req.session.destroy(function(err){
            res.render("home/home", {validation: {}});
        });
    });
}