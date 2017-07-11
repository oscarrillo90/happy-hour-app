var mongoose = require('mongoose');

//TODO: Eventually add some more information on the user, maybe favorite happy hour or which happy hours they have been to?
module.exports = mongoose.model('User',{
	fb: {
		id: String,
		access_token: String,
		firstName: String,
		lastName: String,
		email: String
	}
});
