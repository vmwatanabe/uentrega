module.exports = function(){
    this.adad = function(connection, callback){
        connection.post('aa', callback);
    }
    return this;
}