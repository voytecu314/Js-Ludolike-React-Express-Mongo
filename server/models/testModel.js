const mongoose = require('mongoose');

const test = mongoose.Schema({
    name: String,
    position: Number
});

const testModel = mongoose.model('test', test);

module.exports = testModel;