var db = require('../models');




function index(req, res) {
  //send all books as JSON response
  db.happyhour.find({}, function(err, succ){
    if(err){return console.log(err);}
    console.log(succ.length);
    res.render('layout', {results: succ});

  });

}


function search(req,res){

  db.happyhour.find({term: req.params.term}, function(err, success){
    console.log(success);
    //res.render(something, {results: success);
    res.send("Fill me out!");
  });

}

module.exports = {
  index: index,
  search: search
}
