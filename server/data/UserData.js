const database = require('../infra/DataBase');

exports.getUser = function(){
    return database.query('select * from api.users');
};

exports.getUserById = function(id){
    return database.OneOrNone('select * from api.users where id = $1', [id])
};

exports.updateUser = function(id, user){
    return database.none('update api.user set nome = $1, idade = $2, email = $3, telefone = $4',
    [user.nome, user.idade, user.email, user.telefone, id]);
};

exports.deleteUser = function(id){
    return database.none('delete from api.user where id = $1', [id])
};

exports.createUser = function(user){
    return database.one('insert into api.user (nome, idade, email, telefone) values ($1, $2, $3, $4', [user.nome, user.idade, user.email, user.telefone]);
};