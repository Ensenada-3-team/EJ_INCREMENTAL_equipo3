

// Middleware para validar el formato del email
const validarEmail = (req, res, next) => {
  const email = req.body.email;
  const regexEmail = /\S+@\S+\.\S+/;
  if (!regexEmail.test(email)) {
    return res.status(400).send('El email ingresado no tiene el formato correcto.');
  }
  next();
};

// Middleware para validar que la age sea un entero
const ageValidation = (req, res, next) => {
  const age = req.body.age;
  if (!Number.isInteger(parseInt(age))) {
    return res.status(400).send('La age debe ser un número entero.');
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
app.post('/registro', validarEmail, ageValidation, validarpassword, (req, res) => {
  // Aquí se puede procesar el formulario de registro
  const {name,firstname,email,age,password} = req.body
  const nuevoUsuario = {
    name,
    firstname,
    email,
    age,
    password
  }
  res.status(200).send(nuevoUsuario)
});

