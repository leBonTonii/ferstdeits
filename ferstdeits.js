// BASE SETUP
// =============================================================================

// Require dependencies
var path = require('path');
var express    = require('express');      // call express
var app        = express();                 // define our app using express

var helmet = require('helmet');
app.use(helmet());

var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/ferstdeits');

// configure app to use bodyParser()
// this will let us get the data from a POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// REGISTER OUR ROUTES -------------------------------
require ('./server/routes/users.js') (router);
require ('./server/routes/categories.js') (router);
app.use('/api', router);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// START THE SERVER
// =============================================================================
app.listen(8080);
console.log('Magic happens on port ' + 8080);