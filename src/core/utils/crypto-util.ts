import bcrypt from 'bcrypt';

const saltRounds = 10;

module.exports = (plainTextPassword) => {
	bcrypt.genSalt(saltRounds, (err, salt) => {
		bcrypt.hash(this.plainTextPassword, salt, (err, hash) => {
			return {hash,salt};	
		})
	})
}

module.exports = hashPassword;
