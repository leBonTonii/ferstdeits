module.exports = function(router) {

	var User = require('../models/User');

	router.route('/users')
	.get(function(req, response) {
		
		User.find()
	    .populate('categories')
	    .exec(function(err, user){
	    	if (err)
	        	return response.send(err);
	      	response.json(user);
	    });

	})
	.post(function(req, response) {
		
		var user = new User();
		// create a new instance of the User model
      	user.name = req.body.name;  // set the users name (comes from the request)
      	user.categories = req.body.categories;
      	
      	// save the user and check for errors
      	user.save(function(err) {
        	if (err)
          		return response.send(err);
        	response.json({ message: 'User created!' });
      	});

	});

	router.route('/users/:user_id')
	.get(function(req, response) {
		
		User.findById(req.params.user_id)
    	.populate('categories')
    	.exec(function(err, user) {
      		if (err)
        		return response.send(err);
      		response.json(user);
   		});

	})
	.put(function(req, response) {
		
		User.findById(req.params.user_id, function(err, user) {
	      	if (err)
	        	return response.send(err);

	      	if (request.body.name !== undefined)
	        	user.name = req.body.name;
	      	if (req.body.categories !== undefined)
	        	user.categories = req.body.categories;
	        
	      	// save the user
	     	user.save(function(err) {
	        	if (err)
	          		return response.send(err);
	        	response.json({ message: 'user updated!' });
	      	});
    	});

	})
	.delete(function(req, response) {
		
		User.remove({ _id: req.params.user_id }, function(err, user) {
      		if (err)
        		return response.send(err);
      		response.json({ message: 'Successfully deleted' });
      	});

	});

}