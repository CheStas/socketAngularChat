const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    id: String,
    name: String,
    info: String,
    isActive: Boolean,
    img: String,
});

module.exports = mongoose.model('Users', usersSchema);
