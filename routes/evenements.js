var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var Evenement = require('../models/evenement');

router.get('/', function (req, res, next) {
    var getEvenements = Evenement.find();

    getEvenements.sort({
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

module.exports = router;