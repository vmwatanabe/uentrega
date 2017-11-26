module.exports = function(application){
    application.post('/auth', function(req, res){
        var dados = req.body;

        req.assert('email', 'Digite um e=mail').notEmpty();
        req.assert('password', 'Digite a sua senha').notEmpty();

        var erros = req.validationErrors();

        if (erros){
            console.log(erros);
            res.render("home/home", {validation: erros});
            return;
        }

        var connection = application.config.connection;
        var model_usu = new application.app.models.model_postUsu(connection);
        model_usu.auth(dados, req, res);
    });
}