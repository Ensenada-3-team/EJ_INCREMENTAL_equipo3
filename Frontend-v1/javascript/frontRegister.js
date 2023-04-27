// name, firstname, nickname, birthdate, gender, avatar, password, email, ocupation, location, grade, linkedin, language, hobbie

const registerForm = document.getElementById('procesar_registro')


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
      const ocupation = document.getElementById('occupation').value
      const location = document.getElementById('location').value
      const grade = document.getElementById('grade').value
      const linkedin = document.getElementById('linkedin').value
      const language  = document.getElementById('languaje').value
      const hobbie  = document.getElementById('hobbies').value

      if (password === confPassword) {
            try {
                  const response = await fetch('http://3000/auth/register',  {
                        method: "POST",
                        headers: {
                              "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                              name, 
                              firstname, 
                              nickname, 
                              birthdate, 
                              gender, 
                              avatar, 
                              password, 
                              email, 
                              ocupation, 
                              location, 
                              grade, 
                              linkedin, 
                              language, 
                              hobbie
                              
                        }),
                  })

                  const newUser = await response.json()
                  console.log(newUser)

            
            }catch(error){

                  console.error(error);
            }
      } else {
            alert('Por favor introduzca la misma contraseña.\nHa de tener como mínimo 8 caracteres que contengan al menos:\nun número,\nun caracter especial,\nuna letra mayúscula y una minúscula.')
      }

})