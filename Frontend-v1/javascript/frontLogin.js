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
			nicknameOrEmail: userEmailUsername.value.trim(),
                  password: password.value.trim()
			
		}),
	});

      const data = await response.json()

      if (data.token) {
            localStorage.setItem('userData', JSON.stringify(data.user));
            localStorage.setItem('token', JSON.stringify(data.token));
            window.location.href = data.redirectUrl;

            console.log(data.token, data.user)

      } else {
            
            alert("Credenciales incorrectas");
      }

      document.getElementById('username-email').value = ''
      document.getElementById('password').value = ''
});