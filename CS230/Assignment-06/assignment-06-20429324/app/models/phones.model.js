const mongoose = require('mongoose');

// create a mongoose schema for a Phones
const PhonesSchema = mongoose.Schema({
    manunfacturer: String,
    model: String,
    price: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Phones', PhonesSchema);