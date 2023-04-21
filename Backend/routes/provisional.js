

// Middleware para validar el formato del email
const validarEmail = (req, res, next) => {
  const email = req.body.email;
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    return res.status(400).send('El email ingresado no tiene el formato correcto.');
  }
  next();
};

// Middleware para validar que la edad sea un entero
const validarEdad = (req, res, next) => {
  const edad = req.body.edad;
  if (!Number.isInteger(parseInt(edad))) {
    return res.status(400).send('La edad debe ser un número entero.');
  }
  next();
};

// Middleware para validar que la password sea segura
const validarpassword = (req, res, next) => {
  const password = req.body.password;
  const regexpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regexpassword.test(password)) {
    return res.status(400).send('La password debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un caracter especial.');
  }
  next();
};

// Ruta para procesar el formulario de registro con los middlewares de validación
app.post('/registro', validarEmail, validarEdad, validarpassword, (req, res) => {
  // Aquí se puede procesar el formulario de registro
  const {nombre,apellido,email,edad,password} = req.body
  const nuevoUsuario = {
    nombre,
    apellido,
    email,
    edad,
    password
  }
  res.status(200).send(nuevoUsuario)
});

