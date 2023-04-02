let ol = document.getElementById("lista-publicaciones");

async function getAllPosts() {
	try {
		const responseUsers = await fetch("https://dummyjson.com/users");
		const users = await responseUsers.json();

            ol.innerHTML = "";

		users.users.forEach(async (user) => {
			const userId = user.id;
			const username = user.firstName;
			const lastName = user.lastName;
			const userImage = user.image;
			const nickName = user.maidenName;

			try {
				const response = await fetch(
					`https://dummyjson.com/posts/user/${userId}`
				);
				const data = await response.json();

				
				data.posts.forEach((post) => {
					let html = `
                                    <li class="card border p-4">
                                          <div class="container">
                                                <div class="row d-flex">
                                                      <div class="col-lg-4 col-md-4 col-sm-12">
                                                            <div>
                                                                  <img class="img-fluid rounded align-self-start"
                                                                  src="${userImage}" alt="${username} ${lastName}">
                                                                  <h4 class="mt-3">${username} ${lastName}</h4>
                                                            </div>
                                                      </div>
                                                      <div class="col-lg-8 col-md-8 col-sm-12">
                                                            <div class="border border-dark sombra rounded p-4 bg-post">
                                                                  <h5 class="fw-bold"><p>@${nickName}</p>${post.title}</h5>
                                                                  <p style="color: black">${post.body}</p>
                                                            </div>
                                                      </div>
                                                </div>
                                                <div class="row">
                                                      <div class="d-flex justify-content-between w-100">
                                                            <div class="d-flex mt-2">
                                                                  <div id="sumLikes${post.id}" class="mt-2" style="color: black; font-weight: bold;">${post.reactions}</div>
                                                                  <button id="${post.id}" class="btn like-btn" onclick="toggleLike(this)">
                                                                  <i class="bi bi-heart-fill"></i>
                                                                  </button>

                                                                  <div id="sumDisLikes${post.id}" class="mt-2"  style="color: black; font-weight: bold;">0</div>
                                                                  <button id="${post.id}" class="btn dislike-btn" onclick="toggleDisLike(this)">
                                                                  <i class="bi bi-hand-thumbs-down-fill"></i>
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
                              `;

					ol.innerHTML += html;
				});

			} catch (error) {
				console.error(error);
				alert("Ha ocurrido un error al obtener las publicaciones del usuario.");
			}
		});
	} catch (error) {
		console.error(error.message);
	}
}


getAllPosts()