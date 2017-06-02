// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const yelp = require('yelp-fusion');
var db = require('./models');
var path = require('path');
var logger = require('morgan');
var ejsLayouts = require("express-ejs-layouts");
var routes = require('./config/routes');



//configuring passport
var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
app.use(expressSession({secret: 'Secret food'}));
app.use(passport.initialize());
app.use(passport.session());


app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

// app.set('view', path.join(_dirname, 'views'))

// MIDDLEWARE
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

// ROUTES
// ... coming soon
// app.get('/', function(req, res){
//   res.json({message: "IT WORKS!"});
// })


var happyHourController = require('./controllers/happyHourController.js');
var reviewController = require('./controllers/reviewController.js');
var userController = require('./controllers/userController.js');

// /search/cocktails
app.get('/search/:term', happyHourController.search);


// get all happy hours
app.get('/results', happyHourController.index);


//get one happy hour
app.get('/show/:happyhourid', happyHourController.show);


//get all reviews
app.get('/review', reviewController.index);



//get layout page
// app.get('/layout', function(req, res){
//   res.render('layout');
// });

//get search page (have both results list and map)
app.get('/toSearch', happyHourController.search);
// Routes


// Route for Facebook login
app.get('/', function(req, res){
  res.render('layout', {user: req.user});
});

// -> Facebook
app.get('/auth/facebook', passport.authenticate('facebook', { scope: "email" }));

// <- Facebook
app.get('/auth/facebook/callback',
      passport.authenticate('facebook', { successRedirect: '/',
                                          failureRedirect: '/' }));

// Logout
app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/")
})



// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
