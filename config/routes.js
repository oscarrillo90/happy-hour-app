var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'), //used to manipulate POST
    passport = require("passport")


var userController = require('../controllers/userController');


var isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.render('layout');
}


// http://127.0.0.1:3000/candies
// router.route('/candies')
//
//   //GET all candies
//   .get(candiesController.getAll)
//
//   //POST a new blob
//   .post(isAuthenticated, candiesController.createCandy);
//
//
// router.route('/candies/:id')
//
//   // GET return specific candy
//   .get(candiesController.getCandy)
//
//   // PATCH update existing candy
//   .patch(candiesController.updateCandy)
//
//   // DELETE remove specific candy from DB
//   .delete(isAuthenticated, candiesController.removeCandy);




router.route('/auth/facebook').get( userController.getLogin);


router.route('/auth/facebook/callback').get(userController.getCallback);

router.route('/logout').get(userController.logout);


module.exports = router
