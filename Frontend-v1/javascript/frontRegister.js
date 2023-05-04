// name, firstname, nickname, birthdate, gender, avatar, password, email, ocupation, location, grade, linkedin, language, hobbie

const registerForm = document.getElementById('procesar-registro');

const name = document.getElementById('name')
const firstname = document.getElementById('firstname')
const nickname = document.getElementById('nickname')
const birthdate = document.getElementById('birthdate')
const gender = document.getElementById('gender')
const avatar = document.getElementById('avatar')
const password = document.getElementById('password')
const confPassword = document.getElementById('conf_password')
const email = document.getElementById('email')
const ocupation = document.getElementById('ocupation')
const location = document.getElementById('location')
const grade = document.getElementById('grade')
const linkedin = document.getElementById('linkedin')
const language  = document.getElementById('language')
const hobbie  = document.getElementById('hobbies')


registerForm.addEventListener('submit', async (event)=> {
      event.preventDefault()


      if (password === confPassword) {
            try {
                  const response = await fetch('http://127.0.0.1:3000/auth/register',  {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                              name: name.value, 
                              firstname: firstname.value, 
                              nickname: nickname.value, 
                              birthdate: birthdate.value, 
                              gender: gender.value, 
                              avatar: avatar.value, 
                              password: password.value, 
                              email: email.value, 
                              ocupation: ocupation.value, 
                              location: location.value, 
                              grade: grade.value, 
                              linkedin: linkedin.value, 
                              language: language.value, 
                              hobbie: hobbie.value
                              
                        }),
                  })

                  const newUser = await response.json()
                  console.log(newUser)
                  //Si el nickname, la contraseña, el email, o la direccion de linkedin ya están en la bd no registra al usuario
                  if (newUser.message) {
                        if (newUser.message === 'Usuario menor de 18 años') {
                              alert('Debes ser mayor de 18 años para registrarte.');
                          } else {
                              alert('El usuario ya existe en la base de datos, prueba con otro Nickname o email.');
                          }
                  } else {
                        // Si está todo bien, redirige al index
                        window.location.href = '../index-login.html'
                  }
                  
            
            }catch(error){
                  console.error(error.message);

            }
      } else {
            alert('Por favor introduzca la misma contraseña.\nHa de tener como mínimo 8 caracteres que contengan al menos:\nun número,\nun caracter especial,\nuna letra mayúscula y una minúscula.')
      }

})