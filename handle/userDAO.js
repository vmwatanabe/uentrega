function userDAO(){
}

userDAO.prototype.insertUser = function(usuario){
    console.log(usuario);
}

module.exports = function(){
    return userDAO;
}