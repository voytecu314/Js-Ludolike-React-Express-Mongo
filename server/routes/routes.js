const express = require('express');
const checkOrigin = require('../middleware/checkOrigin.js');
const getPassphrase = require('../controllers/passphrase.js');
const createGame = require('../controllers/createGame.js');

const router = express.Router();

router.get('/getPass',checkOrigin, getPassphrase);

router.post('/createGame', createGame);

module.exports = router;