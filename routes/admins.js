var express = require('express');
var router = express.Router();
//package pour encrypter le password
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var Admin = require('../models/admin');

//Crée Admin(User) lors du sign-up.
router.post('/', function (req, res, next) {
    var admin = new Admin({
        courriel: req.body.courriel,
        password: passwordHash.generate(req.body.password),
        prenom: req.body.prenom,
        nom: req.body.nom
    });
    admin.save(function (err, result) {
        if (err) {
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

router.post('/signin', function (req, res, next) {
    //serveur evoit le token au client si :  Admin est trouvé par email et le password est celui de la bd.
    //client va utiliser ce token pour les futurs requêtes.
    Admin.findOne({
        courriel: req.body.courriel
    }, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'une erreur produite',
                error: err
            });
        }
        if (!doc) {
            return res.status(404).json({
                title: 'aucun admin trouve',
                error: {
                    message: 'admin introuvable'
                }
            });
        }
        if (!passwordHash.verify(req.body.password, doc.password)) {
            return res.status(404).json({
                title: 'impossible de vous loguer',
                error: {
                    message: 'password invalide'
                }
            });
        }
        /* générer un token et le retourner au client. Encrypter token avec package jsonwebtoken.
           payload: => renvoyer l'admin, clé secrète pour la validité, expiration token (4 heures).
        */
        var token = jwt.sign({
            admin: doc
        }, 'secret', {
            expiresIn: 14400
        });
        res.status(200).json({
            message: 'Success',
            token: token,
            adminId: doc._id
        });
    });
});

//export le router pour que ces routes soient disponibles à l'ext du fichier.
module.exports = router;