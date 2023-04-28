const posibleFriendsDOM = document.getElementById("posible-friends");

function createPosibleFriendCard(userAvatar, userNickname) {
	return `
      <div class="mt-3 p-lg-3 p-md-2 border border-dark border-0 rounded sombra bg-friends">
            <h6 class="fs-6 fs-md-8 text-center">@${userNickname}</h6>
            <img
                  class="avatar rounded rounded-circle border border-dark mx-auto d-block"
                  style="max-width: 100%"
                  src=${userAvatar}
                  alt="avatar"
            />
      </div>
      <div class="d-flex justify-content-around w-100 mt-3">
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
            const response = await fetch(`http://127.0.0.1:3000/users/nonfriends/${user.user_id}`)
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