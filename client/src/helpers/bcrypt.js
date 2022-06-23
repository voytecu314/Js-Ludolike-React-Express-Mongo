import bcryptjs from 'bcryptjs';

const hashFunction = (passphrase) => {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(passphrase, salt);
    return hash;
}

export default hashFunction;