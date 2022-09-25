const Quotation = require('../models/quotation.model.js');

// Default message for /
exports.root= (req, res) => {
    console.log("My Quotations App. Use the app to manage your favourite quotations!")
    return res.status(200).send({
        message: "My Quotations App. Use the app to manage your favourite quotations!"
    });
};

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