var db = require('../models');



//show all the happy hour
function index(req, res) {
  //send all happyhours as JSON response
  db.happyhour.find({}, function(err, succ){
    if(err){return console.log(err);}
    // TODO: remove console logs from production deployments
    console.log(succ.length);
    res.render('results', {results: succ});

  });

};

//search happy hour by term








function search(req,res){
  console.log("I am looking for ", req.query.term);
  db.happyhour.find({categories: req.query.term}, function(err, success){
    // TODO: remove console logs from production deployments
    console.log(success);
    res.render('search', {results: success});
    // TODO: remove unused code from production deployments
    //res.render(something, {results: success);
    // res.render('search');
  });


};

//get one happy hour
function show(req, res) {
  //get happy hour id from irl params ('req.params')
  var happyhourId = req.params.happyhourid;
  //find happy hour in db by id
    db.happyhour.findOne({ _id: happyhourId }, function(err, succ){
      if(err){return console.log(err);}
      res.render('show', {result: succ});
    });
};



// export all the module
module.exports = {
  index: index,
  search: search,
  show: show
}
