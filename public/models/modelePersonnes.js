var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


var PersonneSchema   = new Schema({
    sexe:           { type: String, match: /[MF]/ }
    ,identifiant:    { type: String, index: true }
    ,prenom:         String
    ,nom:            String
    ,adresse:        String
    ,codepostal:     { type: String, match: /^[0-9]{5}$/ }
    ,ville:          String
    ,messagerie:     String
    ,datenaissance:  String
    ,telephone:      String
    ,activite:       String
/*    ,conjoint:       {
        nom:                String
        ,prenom:            String
        ,datenaissance:     String
        ,sexe:              { type: String, match: /[MF]/ }
        ,activite:          String
    }*/
/*    ,famille:        [{
        nom:                String
        ,prenom:            String
        ,datenaissance:     String
        ,sexe:              { type: String, match: /[MF]/ }
        ,activite:          String
        ,parente:           String
    }]*/
    
    ,famille : { type : Array , "default" : [] }
    
 //    email:          { type: String, match: /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2, 6}$/ }
    
});

module.exports = mongoose.model('Personne', PersonneSchema);