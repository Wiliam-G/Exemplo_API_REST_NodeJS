const userData = require('../data/UserData');

exports.getUser = function(){
    return userData.getUser();
};

exports.getUserById = async function(id){
    const user = await userData.getUserById(id);
    if(!user)
        throw new Error('User not found');
    return user;
};

exports.updateUser = async function(id){
    await exports.getUserById(id)
    return userData.updateUser(id, user);
};

exports.deleteUser = function(id){
    return userData.deleteUser(id);
};

exports.createUser = function(user){
    return userData.createUser(user);
};

