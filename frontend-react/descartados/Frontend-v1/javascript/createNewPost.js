const form = document.querySelector("#form-publicacion");
const publicacionesDOM = document.getElementById("lista-publicaciones");
const token = JSON.parse(localStorage.getItem("token"))

function createPostDOM(data) {
	return `
    <li class="card border p-4">
        <div class="container">
            <div class="row d-flex">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div>
                        <img class="avatar rounded rounded-circle align-self-start border border-dark ipad-avatar" src="${data.avatar}" alt="foto de autor x">
                        <h4 class="mt-3 p-0 post-name-firstname">${data.name} ${data.firstname}</h4>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <div class="border border-dark sombra rounded p-4 p-md-2 bg-post">
                        <h5 class="fw-bold d-flex justify-content-between post-nick-date"><p>@${data.nickname}</p> <p style='font-weigt: normal; font-size: small'>${data.timeAgo}</p></h5>
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
`;
}

//EVENT LISTENER DEL FORMULARIO (TEXTAREA) QUE CREA UN POST
form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const textArea = document.querySelector("#mensaje-post");
	const user = await JSON.parse(localStorage.getItem("userData"));

	console.log(user.posts);

	const response = await fetch("http://localhost:3000/posts/new-post/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			text: textArea.value,
			user_id: user.user_id,
		}),
	});

	const data = await response.json();
	console.log(data);
	

	//LOCALSTORAGE_______________________________________________________
	// Obtenemos los posts del usuario del LocalStorage o inicializamos un array vacío si no hay ninguno
	let userPosts = JSON.parse(localStorage.getItem("userData")).posts || [];
	console.log(userPosts);
	// Agregamos el nuevo post al array de posts del usuario
	userPosts.push(data);
	// Guardamos los posts del usuario actualizados en el LocalStorage (se guarda una copia)
	localStorage.setItem(
		"userData",
		JSON.stringify({ ...user, posts: userPosts })
	);
	//________________________________________________________________

	loadSavedPosts()

	// Limpiamos el campo de texto del mensaje
	document.querySelector("#mensaje-post").value = "";
});

// FUNCION QUE PINTA TODOS LOS POSTS DE EL USER Y DE SUS AMIGOS ORDENADOS POR MÁS RECIENTE ARRIBA
async function loadSavedPosts() {
	try {
		const user = JSON.parse(localStorage.getItem("userData"));
		const response = await fetch(`http://localhost:3000/posts/private/${user.user_id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`,
			},
		});

		const userFriendsPosts = await response.json();
		console.log(userFriendsPosts)


		userFriendsPosts.forEach((data)=> {
			const nuevoPost = createPostDOM(
				data
			);
			publicacionesDOM.insertAdjacentHTML("afterbegin", nuevoPost);

		})
		
	} catch (error) {
		console.error(error);
		alert("Ha ocurrido un error al obtener las publicaciones del usuario.");
	}
}

loadSavedPosts();
