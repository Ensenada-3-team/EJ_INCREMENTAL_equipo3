const publicacionesDOM = document.getElementById("lista-publicaciones");
const formSearchPostsNickname = document.getElementById("form-search-posts-nickname")
// import { createPostDOM } from "./createNewPost";

function createPostDOM(name, firstname, nickname, userAvatar, data) {
	return `
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
`;
}

//EVENTO QUE RECOGE LA BÚSQUEDA DE POSTS POR NICKNAME ( EN LA SEARCHBAR)
formSearchPostsNickname.addEventListener('submit', async (event)=> {
      event.preventDefault()

      const nickname = document.getElementById("input-search-nickname").value

      try {
            
            const response = await fetch(`http://localhost:3000/posts/private/search/${nickname}`)
            const nicknamePosts = await response.json()
            console.log(nicknamePosts[0])
            //ponemos a cero la lista de posts
            publicacionesDOM.innerHTML = ""
            //p
            nicknamePosts[0].forEach((post) =>{
                  const userPost = createPostDOM(post.name, post.firstname, post.nickname, post.avatar, post)
                  publicacionesDOM.insertAdjacentHTML("afterbegin", userPost);

                  document.getElementById("input-search-nickname").value = ''
            })


      } catch (error) {
            console.error(error.message)   
      }

})
