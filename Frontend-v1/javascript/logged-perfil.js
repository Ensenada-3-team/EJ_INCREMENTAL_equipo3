/*
Carga los datos del Tecler del USUARIO LOGUEADO en user-logged-profile.html

*/

let userImg = document.getElementById('imagen-usuario')
let firstSecondName = document.getElementById('name-firstname')
let userNickname = document.getElementById('user-nickname')
let userOcupation = document.getElementById('ocupacion')
let userLocation = document.getElementById('ubicacion')
let userBio = document.getElementById('acerca-de')
let userEmail = document.getElementById('email')




async function getLoggedUserData() {
      try  {
            const userData = await JSON.parse(localStorage.getItem("userData"));
            
            userImg.setAttribute('src', userData.avatar)
            firstSecondName.innerHTML= `${userData.name} ${userData.firstname}`
            userNickname.innerHTML = `@${userData.nickname}`
            userOcupation.innerHTML =`${userData.ocupation} at ${userData.grade}`
            userLocation.innerHTML = `${userData.location}, España`
            userEmail.setAttribute('href', `mailto:${userData.email}`)
            userEmail.innerHTML = userData.email


      } catch(error) {
            console.error(error.message)
      }
}

getLoggedUserData()