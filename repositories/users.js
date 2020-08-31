const fs = require('fs');
const crypto = require('crypto');
const util = require('util');

const Repository = require('./respository');

const scrypt = util.promisify(crypto.scrypt);

class UserRespository extends Repository {

    async create(attrs) {
        attrs.id = this.randomID();

        const salt = crypto.randomBytes(8).toString('hex');
        const buf = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${buf.toString('hex')}.${salt}`,
            results: []
        };
        records.push(record);
        await this.writeAll(records);
        return record;
    }

    async comparePasswords(saved, supplied) {
        // Saved -> password saved in our database. 'hashed.salt'
        //Supplied -> password given to user trying to sign in
        const [hashed, salt] = saved.split('.');
        const hashedSuppliedBuf = await scrypt(supplied, salt, 64);

        return hashed === hashedSuppliedBuf.toString('hex');
    }
}

module.exports = new UserRespository('users.json');