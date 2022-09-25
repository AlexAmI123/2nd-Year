const mongoose = require('mongoose');

// create a mongoose schema for a Orders
const OrdersSchema = mongoose.Schema({
    pid: String,
    userid: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Orders', OrdersSchema);