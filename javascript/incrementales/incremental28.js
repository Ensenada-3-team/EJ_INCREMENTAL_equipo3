const form = document.querySelector("#form-publicacion");
const publicacionesDOM = document.getElementById('lista-publicaciones')


form.addEventListener("submit", async (event) => {
	event.preventDefault();

	const textArea = document.querySelector("#mensaje-post");
	// const user = await JSON.parse(localStorage.getItem("user"));
      const autor = document.querySelector('#author-post')
	const response = await fetch("http://localhost:3001/publicaciones", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			text: textArea.value,
			user: autor.value
		}),
	});

	const data = await response.json();
	
      const nuevoPost = `
            <li>
                  <div class='card border border-dark w-75'>
                        <div class='d-flex justify-content-between w-100'>
                              <div>
                                    <h4>@${data.user}</h4>
                              </div>
                              <div>
                                    <h5>${data.date}</h5>
                              </div>
                        </div>
                        <h5><i class="bi bi-signpost"></i>${data.text}</h5>
                        <img class='img-fluid' src='${data.image}'>
                        <div class='d-flex mt-2'>
                        <p class='text-right'>Likes: ${data.likes}</p>
                        </div>
                  </div>
            </li>
      `
      
      publicacionesDOM.innerHTML += nuevoPost

      document.querySelector("#mensaje-post").value = ''
      document.querySelector('#author-post').value = ''
});
