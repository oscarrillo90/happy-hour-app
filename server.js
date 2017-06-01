// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const yelp = require('yelp-fusion');
var db = require('./models');

var path = require('path');
var logger = require('morgan');

//configuring passport
var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
app.use(expressSession({secret: 'astarterwordtohelpcreatearandomandconsistentencryptionforallsessions'}));
app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
// app.set('view', path.join(_dirname, 'views'))

// MIDDLEWARE
app.use(express.static('public'));


// ROUTES
// ... coming soon
app.get('/', function(req, res){
  res.json({message: "IT WORKS!"});
})

var happyHourController = require('./controllers/happyHourController.js');
var reviewController = require('./controllers/reviewController.js');

// /search/cocktails
app.get('/search/:term', happyHourController.search);


// get all happy hours
app.get('/results', happyHourController.index);

//get one happy hour
app.get('/show/:happyhourid', happyHourController.show);


//get all reviews
app.get('/review', reviewController.index);


// Route for Facebook login
app.get('/', function(req, res){
  res.render('layout', {user: req.user});
});
//add the route that will be used to create the request to Facebook:
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'} ));



// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
