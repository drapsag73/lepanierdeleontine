// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express         = require('express')        // call express
    ,app            = express()                 // define our app using express
    ,bodyParser     = require('body-parser')
    ,routePersonnes = require('./routes/routePersonnes')
    ,routeProduits  = require('./routes/routeProduits')
    ,mongoose       = require('mongoose')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8090;        // set our port

// REGISTER OUR ROUTES -------------------------------
// 
app.use('/personnes', routePersonnes);
app.use('/produits', routeProduits);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Le Panier de Léontine écoute le port ' + port);