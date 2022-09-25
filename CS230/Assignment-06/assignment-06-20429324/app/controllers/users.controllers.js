const User = require('../models/users.model.js');
/*  == USER INTERFACE ADDITIONS == */
// Default message for / (get)
exports.root = (req, res) => {
    User.find()
    .then(users => {
        res.render('users_view',{
            results: users
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Users."
        });
    });
};


//create a new User and save to the database
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.firstname || !req.body.lastname|| !req.body.mobile|| !req.body.email || !req.body.add1 || !req.body.town || !req.body.countycity) {
        return res.status(400).send({
            message: "User content cannot be empty!"
        });
    }


    // Create a new User (using schema)
    const user = new User({
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobile: req.body.mobile,
        email:req.body.email,
        add1:req.body.add1,
        add2:req.body.add2,
        town:req.body.town,
        countycity:req.body.countycity,
        eircode:req.body.eircode
    });

    // Save Quotation in the database
    user.save()
    .then(data => {
        /*  == USER INTERFACE ADDITIONS == */
        // res.redirect('/');
        /*  == USER INTERFACE ADDITIONS == */
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the User."
        });
    });
};


//Return all Users in the database
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Users."
        });
    });
};


//Return one user by userId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.params.userId
        });
    });
};


//update user identified by userId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "User content cannot be empty"
        });
    }

    // Find the Quotation and update it with the request body
    User.findByIdAndUpdate(req.params.userId, {
        title: req.body.title,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        mobile: req.body.mobile,
        email:req.body.email,
        add1:req.body.add1,
        add2:req.body.add2,
        town:req.body.town,
        countycity:req.body.countycity,
        eircode:req.body.eircode
    }, 
       { new: true })  // "new: true" return updated object
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.userId
        });
    });
};


//delete a user identified by userId
exports.delete = (req, res) => {
    console.log("got to here");
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete User with id " + req.params.userId
        });
    });
};


//search for user by first name
exports.searchFirstname = (req, res) => {
    var search = req.params.s;
    console.log("Searching Users: "+search)
    User.find({ firstname: new RegExp(search,"ig")})
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Users."
        });
    });
};

//search for user by last name
exports.searchLastname = (req, res) => {
    var search = req.params.s;
    console.log("Searching Users: "+search)
    User.find({ lastname: new RegExp(search,"ig")})
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Users."
        });
    });
};