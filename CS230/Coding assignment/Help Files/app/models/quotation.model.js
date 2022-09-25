const mongoose = require('mongoose');

// create a mongoose schema for a quotation
const QuotationSchema = mongoose.Schema({
    quotation: String,
    author: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Quotation', QuotationSchema);
