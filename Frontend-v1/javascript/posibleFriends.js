const posibleFriendsDOM = document.getElementById("posible-friends");

function createPosibleFriendCard(userAvatar, userNickname) {
	return `
      <div class="mt-3 p-lg-2 p-md-1 border border-dark border-1 rounded sombra bg-friends d-flex ">
            <img
                  class="avatar avatar-sm rounded rounded-circle border border-dark  d-block"
                  style="max-width: 100%"
                  src=${userAvatar}
                  alt="avatar"
            />
            <h7 class="fs-md-5 mt-2 ipad-nickname">@${userNickname}</h7>
      </div>
      <div class="d-flex justify-content-around w-100 mt-2">
            <button class="btn btn-sm btn-dark sombra" type="button">
                  <i class="bi bi-plus-lg" style="font-size: 1rem"></i>
            </button>
            <button class="btn btn-sm btn-dark sombra" type="button">
                  <i class="bi bi-dash-lg" style="font-size: 1rem"></i>
            </button>
      </div>
      `;
}


async function getPosibleFriends() {

      const user = JSON.parse(localStorage.getItem("userData"));
      try {
            const response = await fetch(`http://127.0.0.1:3000/users/nonfriends/${user.user_id}`, {
                  method: "GET",
                  headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
            })
            const nonFriends = await response.json()
            console.log('nonfriends', nonFriends)

            if (!Array.isArray(nonFriends)) {
                  console.error('Error: La respuesta no es un array de objetos.')
                  return
            }

            nonFriends.forEach((nonFriend) => {
                  const userAvatar = nonFriend.avatar
                  const userNickname = nonFriend.nickname

                  const newPosibleFriend = createPosibleFriendCard(userAvatar, userNickname)

                  posibleFriendsDOM.innerHTML += newPosibleFriend
            })

            
      } catch (error) {
            console.error(error);
		alert("Ha ocurrido un error al obtener las sugerencias de nuevos amigos.");
      }

}

getPosibleFriends()