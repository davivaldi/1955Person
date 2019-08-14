const mongoose  = require("mongoose");

const PeopleSchema = new mongoose.Schema({
    name: String
}, {timestamps: true});

module.exports = mongoose.model('People', PeopleSchema);