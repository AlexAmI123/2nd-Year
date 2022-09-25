const Phone = require('../models/phones.model.js');
//Return all Users in the database
exports.findAll = (req, res) => {
    Phone.find()
    .then(phones => {
        res.send(phones);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Phones."
        });
    });
};