var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Evenement = require('../models/evenement');

/*  populate va chercher les objets Clients par la FK pointé sur CLient.
    si pas populate, let get renvoit des Ids.
    Todo: populate, retourner seulement les champs nécessaires de l'objet
*/
router.get('/', function (req, res, next) {
    var getEvenements = Evenement.find();

    getEvenements.sort({
            dateCree: 'desc'
        })
        .populate('client_FK')
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

/* middleware : requêtes voyagent de haut en bas. ( defensive programming)
   seulement un User loggué peut créer, modifier et supprimer des clients
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

/* créer un évènement
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
        var evenement = new Evenement();
        evenement.nom = req.body.nom;
        evenement.dateEvenement = req.body.dateEvenement;
        evenement.contact = req.body.contact;
        evenement.client = req.body.client;
        evenement.selectEtat = req.body.selectEtat;
        evenement.dateSoumission = req.body.dateSoumission;
        evenement.dateConfirmation = req.body.dateConfirmation;
        evenement.dateFacturation = req.body.dateFacturation;
        evenement.dateNonRetenu = req.body.dateNonRetenu;
        evenement.dateAnnulation = req.body.dateAnnulation;
        evenement.notes = req.body.notes;
        evenement.validationTache = req.body.validationTache;
        evenement.creerPar = doc.prenom + " " + doc.nom;
        evenement.modifPar = req.body.modifPar;
        evenement.modif = req.body.modif;
        evenement.client.client_Fk = req.body.client_FK._id;

        user.save(function (err, result) {
            if (err) {
                return res.status(404).json({
                    title: 'erreur produite',
                    error: err
                });
            }
            res.status(200).json({
                title: 'evenement sauvegarder',
                error: result
            });
        });
    });
});

module.exports = router;