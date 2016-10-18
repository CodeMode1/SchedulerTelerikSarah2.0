var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var Admin = require('../models/admin');

//defining the routes
//new package to install to encrypt string(password) : npm install --save password-hash
// --save to save it to dev dependencies in package.json

//creating admin, sign-up
router.post('/', function(req, res, next){
    var admin = new Admin({
        courriel: req.body.courriel,
        password: passwordHash.generate(req.body.password),
        prenom: req.body.prenom,
        nom: req.body.nom
    });
    admin.save(function(err, result){
       if(err){
           return res.status(404).json({
            title: 'une erreur produite',
            error: err
            });
        }
        res.status(201).json({
            message: 'success',
            obj: result
        }); 
    });
});

router.post('/signin', function(req, res, next){
    //server sends token to client if :  user is found by email and the entered password is valid (same in db)
    //client will use this token for future requests
    Admin.findOne({courriel: req.body.courriel}, function(err, doc){
        if(err){
            return res.status(404).json({
                title: 'une erreur produite',
                error: err
            });
        }
        if(!doc){
            return res.status(404).json({
                title: 'aucun admin trouve',
                error: {message: 'admin introuvable'}
            });
        }
        if(!passwordHash.verify(req.body.password, doc.password)){
           return res.status(404).json({
                title: 'impossible de vous loguer',
                error: {message: 'password invalide'}
            });
        }
        /* generate a token and return it to the client (using a 3rd party package to generate encrypted token : jsonwebtoken)
           payload: => sending back admin, secret key for validity, token expiration (4 hours)
        */
        var token = jwt.sign({admin: doc}, 'secret', {expiresIn: 14400});
        res.status(200).json({
            message: 'Success',
            token: token,
            adminId: doc._id
        });
    });
});


//note: in real app, encript on client & server side  (SSL)

//export the router to make these routes available outside this file 
module.exports = router;