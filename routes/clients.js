var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Client = require('../models/client');

router.get('/', function (req, res, next) {
    var getClients = Client.find();

    getClients.sort({
            dateCree: 'desc'
        })
        .limit(10)
        .exec(function (err, results) {
            if (err) {
                return res.status(404).json({
                    title: 'erreur produite',
                    error: err
                });
            }
            res.status(200).json({
                message: 'succès',
                obj: results
            });
        });
});


router.get('/:noClient', function (req, res, next) {
    var noClient = req.params.noClient;
    Client.findOne({
        noClient: noClient
    }, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'erreur produite',
                error: err
            });
        }
        res.status(200).json({
            message: 'succès',
            obj: doc
        });
    });

});

/* middleware : requêtes voyagent de haut en bas. ( defensive programming)
   seulement un User loggué peut voir, créer, modifier et supprimer des clients
*/
router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, jwtDecode) {
        if (err) {
            return res.status(401).json({
                title: 'Authentification échouée',
                error: err
            });
        }
        // sortir du middleware pour aller à la prochaine requête
        next();
    });
});


/* créer des clients
 */

router.post('/', function (req, res, next) {
    var jwtDecode = jwt.decode(req.query.token);

    User.findById(jwtDecode.user._id, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'erreur produite',
                error: err
            });
        }
        var client = new Client({
            prenom: req.body.prenom,
            nom: req.body.nom,
            noCompte: req.body.noCompte,
            courriel: req.body.courriel,
            cell: req.body.cell,
            compagnie: req.body.compagnie,
            adresse: req.body.adresse,
            ville: req.body.ville,
            codePostal: req.body.codePostal,
            telPrincipal: req.body.telPrincipal,
            province: req.body.province,
            pays: req.body.pays,
            fax: req.body.fax,
            telSecondaire: req.body.telSecondaire,
            memo: req.body.memo,
            memoAVenir: req.body.memoAVenir,
            noExTaxeProv: req.body.noExTaxeProv,
            noExTaxeFed: req.body.noExTaxeFed,
            selectStatut: req.body.selectStatut,
            selectSource: req.body.selectSource,
            modifPar: req.body.modifPar,
            modif: req.body.modif,
            dateDernEv: req.body.dateDernEv,
            creerPar: doc.prenom + " " + doc.nom
        });
        client.save(function (err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'erreur produite',
                    error: err
                });
            }
            // TODO Nécessaire ?? doc.save();
            res.status(201).json({
                message: 'client sauvegarder',
                obj: result
            });
        });
    });
});

/*  Modifier des clients
    Quand le doc existe déjà, on peut faire save ce qui va l'updater.
 */

router.put('/:id', function (req, res, next) {
    Client.findById(req.params.id, function (err, doc) {
        if (err) {
            return res.status(404).json({
                title: 'erreur produite',
                error: err
            });
        }
        doc.prenom = req.body.prenom,
            doc.nom = req.body.nom,
            doc.noCompte = req.body.noCompte,
            doc.courriel = req.body.courriel,
            doc.cell = req.body.cell,
            doc.compagnie = req.body.compagnie,
            doc.adresse = req.body.adresse,
            doc.ville = req.body.ville,
            doc.codePostal = req.body.codePostal,
            doc.telPrincipal = req.body.telPrincipal,
            doc.province = req.body.province,
            doc.pays = req.body.pays,
            doc.fax = req.body.fax,
            doc.telSecondaire = req.body.telSecondaire,
            doc.memo = req.body.memo,
            doc.memoAVenir = req.body.memoAVenir,
            doc.noExTaxeProv = req.body.noExTaxeProv,
            doc.noExTaxeFed = req.body.noExTaxeFed,
            doc.selectStatut = req.body.selectStatut,
            doc.selectSource = req.body.selectSource,
            doc.modifPar = req.body.modifPar,
            doc.modif = req.body.modif,
            doc.dateDernEv = req.body.dateDernEv,
            doc.creerPar = doc.prenom + " " + doc.nom
        doc.save(function (err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(201).json({
                message: 'success',
                obj: result
            });
        });
    });
});

module.exports = router;