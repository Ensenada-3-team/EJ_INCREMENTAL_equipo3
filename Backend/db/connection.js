/**
Conexión con la base de datos con mysql2
( instalacion ---> npm i mysql2) --- Sustituto de sequelize
*/
const mysql = require('mysql2')

//MODIFICAR EN BASE A LA BD
const connection = mysql.createConnection({
      host: 'localhost',
      user: 'usuario',
      password: 'contraseña',
      database: 'labasededatosqueusemos'
})

connection.connect((error) => {
      if(error) {
            console.error('Error de conexion con db: ', error )
      } else {
            console.log('Conexión a la base de datos activa')
      }
 })

 module.exports = connection