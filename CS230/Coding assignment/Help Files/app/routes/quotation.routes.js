module.exports = (app) => {
    const quotations = require('../controllers/quotation.controllers.js');
    
    // Default message for /
    app.get('/', quotations.root);

    // Create a new Quotation
    app.post('/quotations', quotations.create);

    // Retrieve all Quotations
    app.get('/quotations', quotations.findAll);

    // Retrieve a single Quotation specified by quotationId
    app.get('/quotations/:quotationId', quotations.findOne);

    // Update a Quotation specified by quotationId
    app.put('/quotations/:quotationId', quotations.update);

    // Update a Quotation's quotation field specified by quotationId
    app.put('/quotations/quote/:quotationId', quotations.updateQuote);

    // Delete a Quotation specified by quotationId
    app.delete('/quotations/:quotationId', quotations.delete);

    /*  == USER INTERFACE ADDITIONS == */
    // Search for Quotations matching s
    app.get('/quotation/:s', quotations.searchQuotation); 
    app.get('/author/:s', quotations.searchAuthor); 
    /*  == USER INTERFACE ADDITIONS == */

}