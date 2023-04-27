/*
Carga los datos del Tecler del cual quieres ver su perfil en user-profile.html

*/

let userImg = document.getElementById('imagen-usuario')
let firstSecondName = document.getElementById('name-firstname')
let userNickname = document.getElementById('user-nickname')
let userOcupation = document.getElementById('ocupacion')
let userLocation = document.getElementById('ubicacion')
let userBio = document.getElementById('acerca-de')
let userEmail = document.getElementById('email')
let bioNick = document.getElementById('nickname')



async function getLinkedUserData() {
      try  {
            const userData = await JSON.parse(localStorage.getItem("userData"));
            
            userImg.setAttribute('src', userData.avatar)
            firstSecondName.innerHTML= `${userData.name} ${userData.firstname}`
            userNickname.innerHTML = `@${userData.nickname}`
            userOcupation.innerHTML =`${userData.ocupation} at ${userData.grade}`
            userLocation.innerHTML = `${userData.location}, España`
            userEmail.setAttribute('href', `mailto:${userData.email}`)
            userEmail.innerHTML = userData.email
            bioNick.innerHTML = `Acerca de ${userData.name}:`


      } catch(error) {
            console.error(error.message)
      }
}

getLinkedUserData()