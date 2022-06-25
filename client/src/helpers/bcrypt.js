import bcryptjs from 'bcryptjs';

export const hashBcrypt = (passphrase) => {
    const salt = bcryptjs.genSaltSync(10);
    const hash = bcryptjs.hashSync(passphrase, salt);
    return hash;
}
