const loginForm = document.getElementById('form-login')

loginForm.addEventListener('submit', async (event)=> {
      event.preventDefault()

      const userEmailUsername = document.getElementById('username-email')
      const password = document.getElementById('password')
      
      const response = await fetch('http://localhost:3000/auth/login', {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			nicknameOrEmail: userEmailUsername.value,
                  password: password.value
			
		}),
	});

      const data = await response.json()

      if (data.redirectUrl) {
            
            window.location.href = data.redirectUrl;

            localStorage.setItem('userData',  JSON.stringify(data.user))
            localStorage.setItem('token', JSON.stringify(data.token))
            console.log(data.token)
            console.log(data.user)

      } else {
            
            console.log("Credenciales incorrectas");
      }

      document.getElementById('username-email').value = ''
      document.getElementById('password').value = ''
});