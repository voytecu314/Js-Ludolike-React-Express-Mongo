const express = require('express');
const checkOrigin = require('../middleware/checkOrigin.js');
const getPassphrase = require('../controllers/passphrase.js');

const router = express.Router();

router.get('/getPass',checkOrigin, getPassphrase);

router.post('/createGame', (req, res)=>{
    res.status(200).json({response: req.body})
});

module.exports = router;