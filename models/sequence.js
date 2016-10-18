var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sequence;

var schemaSequence = new Schema({
    nom: { type: String },
    nextNumSeq: { type: Number, default: 1 }
});

// créé un générateur de séquence
schemaSequence.statics.generateurSequence = function generateurSequence(nomSeq){
    return {
        next: function(callback){
            sequence.update(
                    { nom: nomSeq},
                    { $inc: { nextNumSeq: 1 } },
                    { upsert: true },
                    function(err){
                        if(err) { throw(err); }
                        sequence.findOne({nom: nomSeq}, function(err2, seq){
                            if(err2) { throw(err2); }
                            console.log("se.seqnumseq= " + seq.nextNumSeq);
                            callback(seq.nextNumSeq);
                        });
                        
                    });
            /*
            sequence.findOne({nom: nomSeq}, function(err, data){
                if(err){ throw(err); }
                if(!data){
                    var seq = new sequence({
                        nom: nomSeq
                    });
                    seq.save(function(err){
                        if(err){ throw(err); }
                        callback(seq.nextNumSeq);
                    });
                } else{
                    
                }
            });
            //
            */
        }
};
}

sequence = mongoose.model("Seq", schemaSequence);

module.exports = sequence;