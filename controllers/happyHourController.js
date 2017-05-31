var db = require('../models');



//show all the happy hour
function index(req, res) {
  //send all happyhours as JSON response
  db.happyhour.find({}, function(err, succ){
    if(err){return console.log(err);}
    console.log(succ.length);
    res.render('layout', {results: succ});

  });

};

//search happy hour by term
function search(req,res){

  db.happyhour.find({term: req.params.term}, function(err, success){
    console.log(success);
    //res.render(something, {results: success);
    res.send("Fill me out!");
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
