const Order = require('../models/orders.model.js')
//create a new Order and save to the database
exports.create = (req, res) => {
    // Validate the request
    if(!req.body.pid || !req.body.userid) {
        return res.status(400).send({
            message: "Order content cannot be empty!"
        });
    }


    // Create a new Order (using schema)
    const order = new Order({
        pid: req.body.pid,
        userid: req.body.userid,
    });

    // Save Order in the database
    order.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while creating the Order."
        });
    });
};

//find all Orders
exports.findAll = (req, res) => {
    Order.find()
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Orders."
        });
    });
};

//search for order by product id
exports.searchpId = (req, res) => {
    var search = req.params.s;
    console.log("Searching Orders: "+search)
    Order.find({ pid: new RegExp(search,"ig")})
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Orders."
        });
    });
};

//search for order by user id
exports.searchUserId = (req, res) => {
    var search = req.params.s;
    console.log("Searching Orders: "+search)
    Order.find({ userid: new RegExp(search,"ig")})
    .then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while retrieving all Orders."
        });
    });
};

//update order identified by orderId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Order content cannot be empty"
        });
    }

    // Find the order and update it with the request body
    Order.findByIdAndUpdate(req.params.orderId, {
        pid: req.body.pid,
        userid: req.body.userid,
    }, 
       { new: true })  // "new: true" return updated object
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Order not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating Order with id " + req.params.userId
        });
    });
};

//delete a order identified by userId
exports.delete = (req, res) => {
    console.log("got to here");
    Order.findByIdAndRemove(req.params.orderId)
    .then(order => {
        if(!order) {
            return res.status(404).send({
                message: "Order not found with user id " + req.params.userId
            });
        }
        res.send({message: "Order deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Order not found with user id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete order with user id " + req.params.userId
        });
    });
};