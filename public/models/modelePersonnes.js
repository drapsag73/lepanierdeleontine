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
 //    email:          { type: String, match: /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2, 6}$/ }
    
});

module.exports = mongoose.model('Personne', PersonneSchema);