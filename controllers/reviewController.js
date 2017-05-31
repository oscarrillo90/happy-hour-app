var db = require('../models');


//show all the reviews
function index(req, res) {
  //send all happyhours as JSON response
  db.review.find({}, function(err, succ){
    if(err){return console.log(err);}
    console.log(succ.length);
    res.render('review', {results: succ});

  });

};

module.exports = {
  index: index,
}
