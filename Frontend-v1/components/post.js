/*
El elemento post recibe name, avatar y firstname del localstorage para los posts del usuario logueado, 
y para el resto de usuarios los coge de data (respuesta del servidor con los datos de la database).
Para el resto de campos en ambos casos se reciben del objeto que se recibe del servidor.
*/
export let postElement = `
            <li class="card border p-4">
                  <div class="container">
                        <div class="row d-flex">
                              <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div>
                                    <img class="avatar rounded rounded-circle align-self-start border border-dark" src="${userAvatar}" alt="foto de autor x">
                                    <h4 class="mt-3">${name} ${firstname}  </h4>
                                    </div>
                              </div>
                              <div class="col-lg-8 col-md-8 col-sm-12">
                                    <div class="border border-dark sombra rounded p-4 bg-post">
                                          <h5 class="fw-bold d-flex justify-content-between"><p>@${nickname}</p> <p style='font-weigt: normal; font-size: small'>${new Date(Date.parse(data.post_date)).toLocaleString()}</p></h5>
                                          <p>${data.text}</p>
                                    </div>
                                    <img class='img-fluid rounded sombra mt-2' src='${data.image}'>
                              </div>
                        </div>
                        <div class="row">
                              <div class="d-flex justify-content-between w-100">
                                    <div class="d-flex mt-2">
                                          <div id="sumLikes${data.post_id}" class="mt-2" style="color: black; font-weight: bold;">${data.like_number}</div>
                                          <button id="${data.post_id}" class="btn like-btn" onclick="toggleLike(this)">
                                                <i class="bi bi-heart-fill"></i>
                                          </button>
                                          
                                    </div>
                                    <div>
                                          <button id="commentBtn" class="btn" onclick="">
                                                <i class="bi bi-chat-left-text" style="color: black; font-size: 1.5rem"></i>
                                          </button>
                                          <button id="shareBtn" class="btn" onclick="">
                                                <i class="bi bi-share" style="color: black; font-size: 1.5rem"></i>
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </div>
            </li>
            ` 