
//'use strict';

var yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
var clientId = 'V2QqY10c5zFZE84_xaQwYQ';
var clientSecret = 'QjWl5JQMnwhIYhFwlrpvbOZ99HsaJTYbufGKLt5CBRO9KxVTfcaZFmXb4xxQEepL';

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
