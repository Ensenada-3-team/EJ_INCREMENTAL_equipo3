const publicacionesDOM = document.getElementById("lista-publicaciones");
const formSearchPostsNickname = document.getElementById("form-search-posts-nickname")
// import { createPostDOM } from "./createNewPost";

formSearchPostsNickname.addEventListener('submit', async (event)=> {
      event.preventDefault()

      const inputNickname = document.getElementById("input-search-nickname").value

      const response = await fetch(`http://localhost:3000/private/search/${inputNickname}`)
      const nicknamePosts = await response.json()
      console.log(nicknamePosts)
      // nicknamePosts.forEach((post) =>{
      //       createPostDOM(post.name)
      // })

})
