const mongoose = require('mongoose');

// create a mongoose schema for a Users
const UsersSchema = mongoose.Schema({
    title: String,
    firstname: String,
    lastname: String,
    mobile: String,
    email: String,
    add1: String,
    add2: String,
    town: String,
    countycity: String,
    eircode: String
}, {
    timestamps: true
});
// export the model to our app
module.exports = mongoose.model('Users', UsersSchema);