// name, firstname, nickname, birthdate, gender, avatar, password, email, ocupation, location, grade, linkedin, language, hobbie

const registerForm = document.getElementById('procesar_registro')


registerForm.addEventListener('submit', async (event)=> {
      event.preventDefault()

      const name = document.getElementById('name').value
      console.log(name)
      const firstname = document.getElementById('firstname').value
      console.log(firstname)
      const nickname = document.getElementById('nickname').value
      console.log(nickname)
      const birthdate = document.getElementById('birthdate').value
      console.log(birthdate)
      const gender = document.getElementById('gender').value
      console.log(gender)
      const avatar = document.getElementById('avatar').value
      console.log(avatar)
      const password = document.getElementById('password').value
      console.log(password)
      const confPassword = document.getElementById('conf_password').value
      console.log(confPassword)
      const email = document.getElementById('email').value
      console.log(email)
      const ocupation = document.getElementById('occupation').value
      console.log(ocupation)
      const location = document.getElementById('location').value
      console.log(location)
      const grade = document.getElementById('grade').value
      console.log(grade)
      const linkedin = document.getElementById('linkedin').value
      console.log(linkedin)
      const language  = document.getElementById('languaje').value
      console.log(language)
      const hobbie  = document.getElementById('hobbies').value
      console.log(hobbie)

      if (password === confPassword) {
            try {
                  const response = await fetch('http://3000/auth/register',  {
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
                  // window.location.href = './login.html'
            
            }catch(error){

                  console.error(error.message);
            }
      } else {
            alert('Por favor introduzca la misma contraseña.\nHa de tener como mínimo 8 caracteres que contengan al menos:\nun número,\nun caracter especial,\nuna letra mayúscula y una minúscula.')
      }

})