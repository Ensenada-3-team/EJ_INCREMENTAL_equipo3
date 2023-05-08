const pool = require("../db/connection");

class User {
	constructor(id, name, email) {
		this.id = id;
		this.name = name;
		this.email = email;
	}

	static getAll(callback) {
		pool.query("SELECT * FROM users ", (error, results, fields) => {
			if (error) throw error;
			const users = results.map(
				(result) => new User(result.id, result.name, result.email)
			);
			callback(users);
		});
	}

	// otros métodos de instancia y de clase
}

module.exports = User;
