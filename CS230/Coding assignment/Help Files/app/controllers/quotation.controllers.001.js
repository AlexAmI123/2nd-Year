const Quotation = require('../models/quotation.model.js');

// Default message for /
exports.root= (req, res) => {
    console.log("My Quotations App. Use the app to manage your favourite quotations!")
    return res.status(200).send({
        message: "My Quotations App. Use the app to manage your favourite quotations!"
    });
};

// Create a new Quotation and save to the database
exports.create = (req, res) => {
    console.log("Create a new Quotation and save to the database")
    return res.status(200).send({
        message: "Create a new Quotation and save to the database"
    });
};

// Return all Quotations in the database
exports.findAll = (req, res) => {
    console.log("Return all Quotations in the database")
    return res.status(200).send({
        message: "Return all Quotations in the database"
    });
};

// Find a single Quotation identified by quotationId
exports.findOne = (req, res) => {
    console.log("Find a single Quotation identified by quotationId")
    return res.status(200).send({
        message: "Find a single Quotation identified by quotationId"
    });};

// Update a Quotation identified by quotationId
exports.update = (req, res) => {
    console.log("Update a Quotation identified by quotationId")
    return res.status(200).send({
        message: "Update a Quotation identified by quotationId"
    });};

// Delete a Quotation identified by quotationId
exports.delete = (req, res) => {
    console.log("Delete a Quotation identified by quotationId")
    return res.status(200).send({
        message: "Delete a Quotation identified by quotationId"
    });
};