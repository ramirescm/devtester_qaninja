const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    name: String,
    number: String,
    description: String
});

module.exports = mongoose.model('Contact', ContactSchema);
