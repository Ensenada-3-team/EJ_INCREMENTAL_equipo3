// modificar luego para que solo sean sus amigos
//de momento trae todos los usuarios

const friendsListDOM = document.getElementById('friends-list')


function createFriendCard(userAvatar, userName, userFirstname, userOcupation, userGrade, ) {
      return `
      <li class="list-group-item border p-2" style="
                  background-color: rgba(255, 255, 255, 0.644);
                  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);">
            <div class="row align-items-center">
                  <div class="col-md-4 d-flex justify-content-around">
                        <img
                              class="avatar rounded rounded-circle align-self-center border border-dark"
                              src="https://randomuser.me/api/portraits/women/10.jpg"
                              
                              alt=""
                              id=""
                        />
                        <div class="mt-3">
                              <h6 class="" style="font-weight: bold;">Nombre y apellido</h6>
                              <h6 class="" >Ocupación</h6>
                              <p>Conectado hace 22 horas</p>
                        </div>
                  </div>

                  <div class="col-md-8">
                        <div class="d-flex justify-content-end m-3">
                              <button class="btn btn-dark sombra">
                                    Enviar mensaje
                              </button>
                        </div>
                  </div>
            </div>
      </li>
      
      `
}


