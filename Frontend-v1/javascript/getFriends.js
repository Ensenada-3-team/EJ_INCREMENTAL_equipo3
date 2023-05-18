// modificar luego para que solo sean sus amigos
//de momento trae todos los usuarios
const token = JSON.parse(localStorage.getItem('token'))

let friendsListDOM = document.getElementById('friends-list')


function createFriendCard(userAvatar, userName, userFirstname, userOcupation, userNickname, userId ) {
      return `
      <li class="list-group-item border p-2" 
            style="background-color: rgba(255, 255, 255, 0.644);box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);">
            <a href="./tecler-profile.html?user_id=${encodeURIComponent(JSON.stringify(userId))}" style="display: block;">
            <div class="row align-items-center">
                  <div class="col-md-5 d-flex justify-content-around">
                        <img
                              class="avatar rounded rounded-circle align-self-center border border-dark"
                              src=${userAvatar}
                              
                              alt=""
                              id=""
                        />
                        <div class="mt-3">
                              <h6 class="">${userName} ${userFirstname} @${userNickname}</h6>
                              <h6 style="font-weight:normal;">${userOcupation}</h6>
                              <p style="font-weight:normal;">Conectado hace 22 horas</p>
                        </div>
                  </div>

                  <div class="col-md-7">
                        <div class="d-flex justify-content-end m-3">
                              <button class="btn btn-dark sombra">
                                    Enviar mensaje
                              </button>
                        </div>
                  </div>
            </div>
            </a>
      </li>
      
      `
}


async function getUserFriends() {

      try {
            const userData = JSON.parse(localStorage.getItem("userData"));
            const userId = userData.user_id

            const response = await fetch(`http://localhost:3000/users/user/${userId}/friends`, {
                  method: "GET",
                  headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
            })
            const friends = await response.json()
            console.log(friends)

            friendsListDOM.innerHTML = ""

            friends.forEach(friend => {
                  const userAvatar = friend.avatar
                  const userName = friend.name
                  const userFirstname = friend.firstname
                  const userOcupation = friend.ocupation
                  const  userNickname = friend.nickname
                  const userId = friend.user_id

                  const friendCard = createFriendCard(userAvatar, userName, userFirstname, userOcupation, userNickname, userId)

                  friendsListDOM.innerHTML += friendCard

            })


            
      } catch (error) {
            console.error(error)
            alert( "Ha ocurrido un error al obtener los amigos del usuario.");
      }

}

getUserFriends()