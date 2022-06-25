import crypto from 'crypto';

export const hashCrypto = (passphrase) => {

    const salt = process.env.REACT_APP_SALT || 'bb5jf08fa5d0';

    const hash = crypto.pbkdf2Sync(passphrase, salt, 1000, 64, `sha512`).toString(`hex`);

    return hash;

    }
