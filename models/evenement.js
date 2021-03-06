var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Sequence = require('../models/sequence');
var genSequence = Sequence.generateurSequence('evenement');

var evenementSchema = new Schema({
    noEvenement: {
        type: Number
    },
    nom: {
        type: String
    },
    dateEvenement: {
        type: Date
    },
    contact: {
        type: String
    },
    client: {
        type: String
    },
    selectEtat: {
        type: String
    },
    dateSoumission: {
        type: Date
    },
    dateConfirmation: {
        type: Date
    },
    dateFacturation: {
        type: Date
    },
    dateNonRetenu: {
        type: Date
    },
    dateAnnulation: {
        type: Date
    },
    notes: {
        type: String
    },
    validationTache: {
        type: Boolean
    },
    creerPar: {
        type: String
    },
    dateCree: {
        type: Date,
        default: Date.now
    },
    modifPar: {
        type: String
    },
    modif: {
        type: Date
    },
    client_FK: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
});

evenementSchema.pre('save', function (next) {
    var doc = this;
    genSequence.next(function (nextSeq) {
        doc.noEvenement = nextSeq;
    });
});

module.exports = mongoose.model('Evenement', evenementSchema);