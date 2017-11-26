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

userDAO.prototype.insertUser = function (user){
    console.log(user);
    this._connection.open(function(err, mongocli){
        mongocli.collection("user", function(err, collection){
            collection.insert(user);
            mongocli.close();
        });
    });
}

module.exports = function(){
    return userDAO;
}