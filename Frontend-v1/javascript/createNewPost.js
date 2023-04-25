const form = document.querySelector("#form-publicacion");
const publicacionesDOM = document.getElementById('lista-publicaciones')


form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const textArea = document.querySelector("#mensaje-post");
	// const user = await JSON.parse(localStorage.getItem("user"));
      // const autor = document.querySelector('#author-post')
      
	const response = await fetch("http://localhost:3000/posts/publicaciones", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			text: textArea.value,
			// user: autor.value
		}),
	});

	const data = await response.json();
	
      const nuevoPost = `
      <li class="card border p-4">
          <div class="container">
              <div class="row d-flex">
                  <div class="col-lg-4 col-md-4 col-sm-12">
                      <div>
                          <img class="avatar rounded rounded-circle align-self-start" src="${data.avatar}" alt="foto de autor x">
                          <h4 class="mt-3">${data.author} apellido </h4>
                      </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12">
                      <div class="border border-dark sombra rounded p-4 bg-post">
                          <h5 class="fw-bold"><p>@${data.author}</p></h5>
                          <p style="color: black">${data.text}</p>
                      </div>
                      <img class='img-fluid rounded sombra mt-2' src='${data.image}'>
                  </div>
              </div>
              <div class="row">
                  <div class="d-flex justify-content-between w-100">
                      <div class="d-flex mt-2">
                          <div id="sumLikes${data.postId}" class="mt-2" style="color: black; font-weight: bold;">${data.likes}</div>
                          <button id="${data.postId}" class="btn like-btn" onclick="toggleLike(this)">
                              <i class="bi bi-heart-fill"></i>
                          </button>
                          <div id="sumDisLikes${data.postId}" class="mt-2"  style="color: black; font-weight: bold;">0</div>
                          <button id="${data.postId}" class="btn dislike-btn" onclick="toggleDisLike(this)">
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
      
      publicacionesDOM.insertAdjacentHTML('afterbegin', nuevoPost);

      document.querySelector("#mensaje-post").value = ''
      document.querySelector('#author-post').value = ''
});



// const nuevoPost = `
// <li>
//       <div class='card border border-dark w-75'>
//             <div class='d-flex justify-content-between w-100'>
//                   <div>
//                         <h4>@${data.author}</h4>
//                   </div>
//                   <div>
//                         <h5>${data.date}</h5>
//                   </div>
//             </div>
//             <h5><i class="bi bi-signpost"></i>${data.text}</h5>
//             <img class='img-fluid' src='${data.image}'>
//             <div class='d-flex mt-2'>
//             <p class='text-right'>Likes: ${data.likes}</p>
//             </div>
//       </div>
// </li>
// `