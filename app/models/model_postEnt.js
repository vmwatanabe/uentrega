/* module.exports = function(){
    this.adad = function(connection, callback){
        connection.post('aa', callback);
    }
    return this;
}
 */
function entDAO(connection){
    console.log("AAEAE");
    this._connection = connection();
}

entDAO.prototype.insertEnt = function (entrega){
    console.log(entrega);
    this._connection.open(function(err, mongocli){
        mongocli.collection("entrega", function(err, collection){
            collection.insert(entrega);
            mongocli.close();
        });
    });
}

module.exports = function(){
    return entDAO;
}