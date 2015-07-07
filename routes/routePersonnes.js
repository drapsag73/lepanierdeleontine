//

var express         = require('express')       // call express
   ,mongoose        = require('mongoose')
   ,Schema          = mongoose.Schema
   ,Personne        = require('../public/models/modelePersonnes.js')
   ,cors            = require('cors')

// On se connecte à la base de données
// Ne pas oublier de lancer ~/mongodb/bin/mongod dans un terminal !
mongoose.connect('mongodb://localhost/lepanierdeleontine', function(err) {
  if (err) { throw err; }
});


// ROUTES POUR PERSONNES
// =============================================================================
var routePersonnes = express.Router();              // Récupère l'instance du router d'Express

// middleware to use for all requests
/*routePersonnes.use(cors({
    allowedOrigins:[
        '192.168.0.16:8080', '78.233.143.4:8016', 'localhost:8080'   ]
}))*/
routePersonnes.all("*", function(req, res, next) {
    // do logging
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    }

   console.log('Accès autorisé');
    next(); // Pour être sur de continuer sur le route suivant
});

routePersonnes.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // Pour être sur de continuer sur le route suivant
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/personnes)
//routePersonnes.get('/', function(req, res) {
//   res.json({ message: 'hourra ! Bienvenue sur mon api !' });   
//});

// more routes for our API will happen here

// on routes that end in /personnes
// ----------------------------------------------------
routePersonnes.route('/')

    // create a personne (accessed at POST http://localhost:8090/personnes)
    .post(function(req, res) {

        
        var personne = new Personne();      // create a new instance of the Personne model
    
        personne.sexe = req.body.message.sexe;
        personne.identifiant = req.body.message.identifiant;
        personne.prenom = req.body.message.prenom;  
        personne.nom = req.body.message.nom;  
        personne.adresse = req.body.message.adresse;  
        personne.codepostal = req.body.message.codepostal;  
        personne.ville = req.body.message.ville;  
        personne.datenaissance = req.body.message.datenaissance; 
        personne.messagerie = req.body.message.messagerie;
        personne.telephone =  req.body.message.telephone;
        personne.nomutilisateur = req.body.message.nomutilisateur;
        personne.profession = req.body.message.profession;
        personne.activite = req.body.message.activite;
        personne.famille = req.body.message.famille;

       
        
        // save the personne and check for errors
        personne.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'La personne a été créée !' });
        });
        
    })
    
    // get all the personnes (accessed at GET http://localhost:8090/personnes)
    .get(function(req, res) {
        Personne.find(function(err, personnes) {
            if (err)
                res.send(err);

            res.json(personnes);
        });
    });

// on routes that end in /personnes/:personne_id
// ----------------------------------------------------
routePersonnes.route('/:personne_id')

    // get the personne with that id (accessed at GET http://localhost:8090/personnes/:personne_id)
    .get(function(req, res) {
        Personne.findById(req.params.personne_id, function(err, personne) {
            if (err)
                res.send(err);
            res.json(personne);
        });
        mongoose.connection.close();
    })
    
    // update the personne with this id (accessed at PUT http://localhost:8090/personnes/:personne_id)
    .put(function(req, res) {
    
        console.log("mise à jour : " + req.body.sexe)

        // use our personne model to find the personne we want
        Personne.findById(req.params.personne_id, function(err, personne) {

            if (err)
                res.send(err);
            console.log

            personne.sexe = req.body.sexe;
            personne.prenom = req.body.prenom;  
            personne.nom = req.body.nom;  
            personne.adresse = req.body.adresse;  
            personne.codepostal = req.body.codepostal;  
            personne.ville = req.body.ville;  
            personne.datenaissance = req.body.datenaissance; 
            personne.messagerie = req.body.messagerie;
            personne.telephone =  req.body.telephone;
            personne.nomutilisateur = req.body.nomutilisateur;
            personne.identifiant = req.body.identifiant;
            personne.profession = req.body.profession;
            personne.activite = req.body.activite;
            personne.famille = req.body.famille;
                   
  // update the personnes info

            // save the personne
            personne.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: "Mise à jour effectuée avec succès!" });
            });

        });
     })
     
    // delete the personne with this id (accessed at DELETE http://localhost:8090/personnes/:personne_id)
    .delete(function(req, res) {
        console.log(req.params.personne_id);
        Personne.remove({
            _id: req.params.personne_id
        }, function(err, personne) {
            if (err)
                res.send(err);

            res.json({ message: 'Suppression effectuée avec succès' });
        });
    });




module.exports = routePersonnes;
