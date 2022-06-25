const gameModel = require('../models/gameModel.js');

const joinGame = async (req, res) => {

    const filter = {hash: req.body.hash};
    const findGame = await gameModel.find(filter);

    if(findGame.length===1){

        const newPlayers = findGame[0].players;
        newPlayers.push({
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
        });

        const updateGame = await gameModel.findOneAndUpdate(filter, {players: newPlayers}, {
        returnOriginal: false
         });

        res.json(updateGame);  
    } else {
        res.status(404).json({status: 'Not found', error: 'Wrong passphrase'})
    }

   
}

module.exports = joinGame;