const mongoose = require('mongoose');

exports.schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
});