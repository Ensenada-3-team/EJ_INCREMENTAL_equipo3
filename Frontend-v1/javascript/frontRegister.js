// name, firstname, nickname, birthdate, gender, avatar, password, email, ocupation, location, grade, linkedin, language, hobbie

const registerForm = document.getElementById('procesar-registro')


registerForm.addEventListener('submit', async (event)=> {
      event.preventDefault()

      const name = document.getElementById('name').value
      const firstname = document.getElementById('firstname').value
      const nickname = document.getElementById('nickname').value
      const birthdate = document.getElementById('birthdate').value
      const gender = document.getElementById('gender').value
      const avatar = document.getElementById('avatar').value
      const password = document.getElementById('password').value
      const confPassword = document.getElementById('conf_password').value
      const email = document.getElementById('email').value
      const ocupation = document.getElementById('ocupation').value
      const location = document.getElementById('location').value
      const grade = document.getElementById('grade').value
      const linkedin = document.getElementById('linkedin').value
      const language  = document.getElementById('language').value
      const hobbie  = document.getElementById('hobbies').value

      if (password === confPassword) {
            try {
                  const response = await fetch('http://127.0.0.1:3000/auth/register',  {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                              name: name, 
                              firstname: firstname, 
                              nickname: nickname, 
                              birthdate: birthdate, 
                              gender: gender, 
                              avatar: avatar, 
                              password: password, 
                              email: email, 
                              ocupation: ocupation, 
                              location: location, 
                              grade: grade, 
                              linkedin: linkedin, 
                              language: language, 
                              hobbie: hobbie
                              
                        }),
                  })

                  const newUser = await response.json()
                  console.log(newUser)
                  //Si el nickname, la contraseña, el email, o la direccion de linkedin ya están en la bd no registra al usuario
                  if (newUser.message) {
                        alert('El usuario ya existe en la base de datos, prueba con otro Nickname, otra contraseña, otro email u otro perfil de linkedin')
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