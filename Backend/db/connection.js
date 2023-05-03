/**
Conexión con la base de datos con mysql2
( instalacion ---> npm i mysql2) --- Sustituto de sequelize
*/
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
    host: '127.0.0.1', // IP del servidor de la base de datos
    user: 'root', // usuario de la base de datos
    password: '', // contraseña de la base de datos
    database: 'bd_equipo3', // nombre de la base de datos
    charset: 'latin1' // conjunto de caracteres del servidor
});

pool.getConnection()
.then(connection => {
    console.log('Conexión a la base de datos activa');
    connection.release();
})
.catch(error => {
    console.error('Error de conexión con db: ', error);
});

module.exports = pool;