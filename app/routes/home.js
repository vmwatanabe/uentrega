module.exports = function(app){
    app.get('/home', function(req, res){
        var data;
        res.render("home/home", {validation: {}});
    });
}