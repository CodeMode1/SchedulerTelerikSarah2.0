var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Admin = require('../models/admin');
var Client = require('../models/client');

router.get('/', function(req, res, next){
    var getClients = Client.find();

    getClients.sort({ dateCree: 'desc'})
        .limit(10)
        .exec(function(err, results){
            if(err){
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

router.get('/adminLogue', function(req, res, next){
    var jwtDecode = jwt.decode(req.query.token);

     Admin.findById(jwtDecode.admin._id, function(err, doc){
         if(err){
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
   seulement un Admin loggué peut voir, créer, modifier et supprimer des clients
*/
router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, jwtDecode){
        if(err){
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

router.post('/', function(req, res, next){
    var jwtDecode = jwt.decode(req.query.token);

    Admin.findById(jwtDecode.admin._id, function(err, doc){
        if(err){
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
        client.save(function(err, result){
            if(err){
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

module.exports = router;

