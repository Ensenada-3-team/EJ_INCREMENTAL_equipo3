const connection = require('../db/connection');

class Post {
  constructor(id, name, email) {
      //MODIFICAR EN BASE A LA BD
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static getAll(callback) {
    connection.query('SELECT * FROM posts', (error, results, fields) => {
      if (error) throw error;
      const posts = results.map(result => new Post(result.id, result.name, result.email));
      callback(users);
    });
  }

  // otros métodos de instancia y de clase
}

module.exports = Post;