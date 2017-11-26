module.exports = function(application){
    application.post('/signup/save', function(req, res){
        var dados = req.body;
        var connection = application.config.connection;
        /* var model_postUsu = application.app.models.model_postUsu;
        model_postUsu.post(connection, function(error, result){
            res.send(result);
        }); */
        var userDAO = new application.app.models.model_postUsu(connection);
        userDAO.insertUser(dados, req, res);
    });
}