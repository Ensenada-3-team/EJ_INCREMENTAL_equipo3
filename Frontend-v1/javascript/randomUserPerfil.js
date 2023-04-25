let userImg = document.getElementById('imagen-usuario')
let firstSecondName = document.getElementById('name-firstname')
let userOcupation = document.getElementById('ocupacion')
let userLocation = document.getElementById('ubicacion')
let userBio = document.getElementById('acerca-de')
let userEmail = document.getElementById('email')


async function getUserData() {
      try  {
            const responseRandomApi = await fetch('https://randomuser.me/api/')
            const user = await responseRandomApi.json()
            const datosUsuario = user.results[0]
            console.log(datosUsuario)

            userImg.setAttribute('src', datosUsuario.picture.medium)
            firstSecondName.innerHTML= `${datosUsuario.name.first} ${datosUsuario.name.last}`
            userOcupation.innerHTML = `@${datosUsuario.login.username}`
            userLocation.innerHTML = `${datosUsuario.location.city}, ${datosUsuario.location.state}, ${datosUsuario.location.country}.`
            userEmail.setAttribute('href', `mailto:${datosUsuario.email}`)
            userEmail.innerHTML = datosUsuario.email


      } catch(error) {
            console.error(error.message)
      }
}


getUserData()