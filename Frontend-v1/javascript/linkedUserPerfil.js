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


//FUNCIÓN QUE COGE DE LA URL EL PARÁMETRO QUE ENVIAMOS CON LA ID DEL USUARIO DEL CUAL SE CLICÓ LA TARJETA DE AMIGO
//USA SU ID PARA COGER DE LA BD LOS DATOS DEL USUARIO Y PINTARLOS EN SU PERFIL
async function getLinkedlinkedUserData() {
      try  {
            const params = new URLSearchParams(window.location.search);
            const userId = JSON.parse(decodeURIComponent(params.get('user_id')));
            console.log(typeof userId, userId)

            const response = await fetch(`http://localhost:3000/users/user/${userId}`)
            const linkedUserData = await response.json()
            console.log(linkedUserData)
            
            userImg.setAttribute('src', linkedUserData[0].avatar)
            firstSecondName.innerHTML= `${linkedUserData[0].name} ${linkedUserData[0].firstname}`
            userNickname.innerHTML = `@${linkedUserData[0].nickname}`
            userOcupation.innerHTML =`${linkedUserData[0].ocupation} at ${linkedUserData[0].grade}`
            userLocation.innerHTML = `${linkedUserData[0].location}, España`
            userEmail.setAttribute('href', `mailto:${linkedUserData[0].email}`)
            userEmail.innerHTML = linkedUserData[0].email
            bioNick.innerHTML = `Acerca de ${linkedUserData[0].name}:`


      } catch(error) {
            console.error(error.message)
      }
}

getLinkedlinkedUserData()