module.exports = (app) => {
    const users = require('../controllers/users.controllers.js');
    const orders = require('../controllers/orders.controllers.js');
    const phones = require('../controllers/phones.controllers.js');
    //Users
    // Default message for /
    app.get('/', users.root);

    // Create a new user
    app.post('/users', users.create);

    // Retrieve all users
    app.get('/users', users.findAll);

    // Retrieve a single user specified by userId
    app.get('/users/:userId', users.findOne);

    // Update a user specified by userId
    app.put('/users/:userId', users.update);

    // Delete a user specified by userId
    app.delete('/users/:userId', users.delete);

    // Search for users matching s
    app.get('/firstname/:s', users.searchFirstname); 
    app.get('/lastname/:s', users.searchLastname); 

    //Orders
    // Create a new order
    app.post('/orders', orders.create);
    
    // Retrieve all orders
    app.get('/orders', orders.findAll);
    
    // Search for orders matching s
    app.get('/orders/:s', orders.searchUserId); 
    
    app.get('/orders/:s', orders.searchpId);
    
    // Update a order specified by orderId
    app.put('/users/:userId', users.update);
    
    // Delete a order specified by orderId
    app.delete('/orders/:userId', orders.delete);
    
    //Phones
    // Retrieve all phones
    app.get('/phones', phones.findAll);
}