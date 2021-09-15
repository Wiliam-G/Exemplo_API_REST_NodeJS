const express = require(express);
const router = express.router();
const userServices = require('../service/Services');

router.get('/users', async function(req, res, next){
    try{
        const users = await userServices.getUsers();
        res.json(users);
    } catch(err){
        next(err);
    }
});

router.get('/users/:id', async function(req, res){
    const user = userServices.getUserById();
    res.json(user);
});

router.put('/users/:id', async function(req, res, next){
    const user = req.body;
    try{
        await userService.updateUser(req.params.id, user);
        res.status(204).end();
    } catch(err){
        next(err);
    }
});

router.post('/users', async function(req, res, next){
    const user = req.body;
    try{
        newUser = await userServices.createUser(user);
        res.status(2001).json(newUser);
    } catch(err){
        next(err);
    }
});

router.delete('/users/:id', async function(req, res, next){
    try{
        await userServices.deleteUser(req.params.id);
        res.status(204).end();
    } catch(err){
        next(err);
    }
});

module.exports = router;