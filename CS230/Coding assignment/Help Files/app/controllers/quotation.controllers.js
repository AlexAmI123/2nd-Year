const Quotation = require('../models/quotation.model.js');

/*  == USER INTERFACE ADDITIONS == */
// Default message for / (get)
exports.root = (req, res) => {
    Quotation.find()
    .then(quotations => {
        res.render('quotations_view',{
            results: quotations
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};

// search for quotations, matching string on quote field
exports.searchQuotation = (req, res) => {
    var search = req.params.s;
    console.log("Searching Quotations: "+search)
    Quotation.find({ quotation: new RegExp(search,"ig")})
    .then(quotations => {
        res.render('quotations_view',{
            results: quotations
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};

// search for quotations, matching string on author field
exports.searchAuthor = (req, res) => {
    var search = req.params.s;
    console.log("Searching Authors: "+search)
    Quotation.find({ author: new RegExp(search,"ig")})
    .then(quotations => {
        res.render('quotations_view',{
            results: quotations
          });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};
/*  == USER INTERFACE ADDITIONS == */


// Create a new Quotation and save to the database
// Create and Save a new Quotation
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.quotation || !req.body.author) {
        return res.status(400).send({
            message: "Quotation content cannot be empty!"
        });
    }

    // Create a new Quotation (using schema)
    const quotation = new Quotation({
        quotation: req.body.quotation,
        author: req.body.author
    });

    // Save Quotation in the database
    quotation.save()
    .then(data => {
        /*  == USER INTERFACE ADDITIONS == */
        // res.redirect('/');
        /*  == USER INTERFACE ADDITIONS == */
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Quotation."
        });
    });
};

// Return all Quotations in the database
exports.findAll = (req, res) => {
    Quotation.find()
    .then(quotations => {
        res.send(quotations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Quotations."
        });
    });
};

// Find a single Quotation identified by quotationId
exports.findOne = (req, res) => {
    Quotation.findById(req.params.quotationId)
    .then(quotation => {
        if(!quotation) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });            
        }
        res.send(quotation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Quotation with id " + req.params.quotationId
        });
    });
};

// Update a Quotation identified by the quotationId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Quotation content cannot be empty"
        });
    }

    // Find the Quotation and update it with the request body
    Quotation.findByIdAndUpdate(req.params.quotationId, {
        quotation: req.body.quotation, 
        author: req.body.author,
    }, 
       { new: true })  // "new: true" return updated object
    .then(quotation => {
        if(!quotation) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });
        }
        res.send(quotation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });                
        }
        return res.status(500).send({
            message: "Error updating Quotation with id " + req.params.quotationId
        });
    });
};

// Update a Quotation identified by the quotationId in the request
exports.updateQuote = (req, res) => {
    // Validate Request
    if(!req.body.quotation) {
        return res.status(400).send({
            message: "Quotation content cannot be empty"
        });
    }

    // Find the Quotation and update it with the request body
    Quotation.findByIdAndUpdate(req.params.quotationId, {
        quotation: req.body.quotation
    }, 
       { new: true })  // "new: true" return updated object
    .then(quotation => {
        if(!quotation) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });
        }
        res.send(quotation);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });                
        }
        return res.status(500).send({
            message: "Error updating Quotation with id " + req.params.quotationId
        });
    });
};



// Delete a Quotation identified by quotationId
exports.delete = (req, res) => {
    console.log("got to here");
    Quotation.findByIdAndRemove(req.params.quotationId)
    .then(quotation => {
        if(!quotation) {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });
        }
        res.send({message: "Quotation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Quotation not found with id " + req.params.quotationId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Quotation with id " + req.params.quotationId
        });
    });
};