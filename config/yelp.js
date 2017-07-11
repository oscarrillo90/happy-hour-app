
//'use strict';
// TODO: Good work getting the yelp api up and running! Look into having it run automatically every night to update your database of happy hours
var yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
var clientId = 
var clientSecret = 
var searchRequest = {
  term:'happy hour',
  location: 'austin, tx',
  limit: 20
};


yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search(searchRequest).then(response => {
    var firstResult = response.jsonBody.businesses[0];
    var prettyJson = JSON.stringify(firstResult, null, 4);
    response.json(prettyJson);
  });
}).catch(e => {
  console.log(e);
});
