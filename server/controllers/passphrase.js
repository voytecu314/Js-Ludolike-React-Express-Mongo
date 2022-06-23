const axios = require('axios');

const getPassphrase = async (req, res) => {
    const passphrase = await axios.get('http://metaphorpsum.com/paragraphs/1/1');

    res.status(200).json({passphrase: passphrase.data});
}

module.exports = getPassphrase;