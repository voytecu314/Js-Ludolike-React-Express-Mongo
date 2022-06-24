const gameModel = require('../models/gameModel.js');

const createGame = async (req, res)=>{
    const game = new gameModel({
        hash: req.body.hash,
        board: 'zig-zag',
        on_round: 0,
        finished: false,
        players: [{
            name: req.body.name,
            avatar: 'default',
            position: 0,
            pts_log: [],
            dice: [],
            beaten_by: [],
            beats: [],
            correct: 0,
            wrong: 0,
            on_move: false
                }]
            });

        await game.save();

        res.status(200).json(game);
    }

module.exports = createGame;