const mongoose = require('mongoose');

const players = mongoose.Schema({
    name: String,
    avatar: String,
    position: Number,
    pts_log: Array,
    dice: Array,
    beaten_by: Array,
    beats: Array,
    correct: Number,
    wrong: Number,
    on_move: Boolean
});

const game = mongoose.Schema({
    hash: String,
    board: String,
    on_round: Number,
    finished: Boolean,
    players: [players]
});

const gameModel = mongoose.model('game', game);

module.exports = gameModel;