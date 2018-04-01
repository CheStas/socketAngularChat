const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
    text: String,
    idTo: String,
    idFrom: String,
    name: String,
    time: Date,
});

module.exports = mongoose.model('Messages', messagesSchema);
