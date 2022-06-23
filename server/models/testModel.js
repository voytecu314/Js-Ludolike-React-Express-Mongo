const mongoose = require('mongoose');

const players = mongoose.Schema({
    name: String,
    position: Number
});

const test = mongoose.Schema({
    hash: String,
    players: [players]
});

const testModel = mongoose.model('test', test);

module.exports = testModel;