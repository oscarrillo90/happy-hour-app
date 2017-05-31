// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const yelp = require('yelp-fusion');
var db = require('./models');

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

// /search/cocktails
app.get('/search/:term', function(req,res){

  db.happyhour.find({term: req.params.term}, function(err, success){
    console.log(success);
    //res.render(something, {results: success);
    res.send("Fill me out!");
  });

})


// get all books
app.get('/results', function (req, res) {
  //send all books as JSON response
  db.happyhour.find({}, function(err, succ){
    if(err){return console.log(err);}
    console.log(succ.length);
    res.render('layout', {results: succ});

  });

});
//yelp API route
// app.get('/search', function(req, res){
//
//
//
// var searchRequest = {
//   term: req.params.term,
//   location: 'austin, tx'
// }
//
//   var yelp = require('yelp-fusion');
//
//   // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
//   // from https://www.yelp.com/developers/v3/manage_app
//   var clientId = 'V2QqY10c5zFZE84_xaQwYQ';
//   var clientSecret = 'QjWl5JQMnwhIYhFwlrpvbOZ99HsaJTYbufGKLt5CBRO9KxVTfcaZFmXb4xxQEepL';
//
//   var searchRequest = {
//     term:'happy hour',
//     location: 'austin, tx',
//     limit: 20
//   };
//
//
//   yelp.accessToken(clientId, clientSecret).then(response => {
//     const client = yelp.client(response.jsonBody.access_token);
//
//     client.search(searchRequest).then(response => {
//       var results = response.jsonBody.businesses;
//       //var prettyJson = JSON.stringify(firstResult, null, 4);
//       console.log(results);
//       res.render('layout.ejs', {results: results});
//     });
//   }).catch(e => {
//     console.log(e);
//   });
// });






// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
