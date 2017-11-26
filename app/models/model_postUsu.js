/* module.exports = function(){
    this.adad = function(connection, callback){
        connection.post('aa', callback);
    }
    return this;
}
 */
function userDAO(connection){
    console.log("AAEAE");
    this._connection = connection();
}

userDAO.prototype.insertUser = function (user, req, res){
    console.log(user);
    this._connection.open(function(err, mongocli){
        mongocli.collection("user", function(err, collection){
            collection.insert(user);
            req.session.auth = true;
            req.session.entregador = user.entregador;
            req.session.name = user.name;
            if (req.session.entregador == 1){
                res.redirect("/main_entregador");
            }else{
                res.redirect("/main");
            }
            mongocli.close();
        });
    });
}

userDAO.prototype.auth = function (user, req, res){
    console.log(user);
    this._connection.open(function(err, mongocli){
        mongocli.collection("user", function(err, collection){
            collection.find(user).toArray(function(err, result){
                if (result[0] != undefined){
                    req.session.auth = true;
                    req.session.entregador = result[0].entregador;
                    req.session.name = result[0].name;
                    req.session.email = result[0].email;
                }
                if (req.session.auth == true){
                    if (req.session.entregador == 1){
                        res.redirect("main_entregador");
                    }else{
                        res.redirect("main");
                    }
                }else{
                    res.render('home/home', {validation: [{msg: "Usuário ou senha não coincidem."}]});
                }
            });
            mongocli.close();
        });
    });
}

module.exports = function(){
    return userDAO;
}