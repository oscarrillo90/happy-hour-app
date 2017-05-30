// REQUIREMENTS
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const yelp = require('yelp-fusion');


  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo-app');
// MIDDLEWARE
app.use(express.static('public'));

// ROUTES
// ... coming soon
app.get('/', function(req, res){
  res.json({message: "IT WORKS!"});
})

//yelp API route
app.get('/search', function(req, res){

  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);

    client.search(searchRequest).then(response => {
      const firstResult = response.jsonBody.businesses[0];
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
    });
  }).catch(e => {
    console.log(e);
  });
});

// SERVER START
app.listen(process.env.PORT || 3000, function () {
  console.log("HTTP server listening at localhost:3000");
});
