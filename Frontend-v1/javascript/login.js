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
			name: userEmailUsername.value,
                  password: password.value
			
		}),
	});

      const data = await response.json()

      if (data.redirectUrl) {
            
            window.location.href = data.redirectUrl;
      } else {
            
            console.log("Credenciales incorrectas");
      }

      //guardo en el localstorage el nombre del usuario para usarlo en el index luego con getItem
      localStorage.setItem("username", data.name);

      document.getElementById('username-email').value = ''
      document.getElementById('password').value = ''


})