import { CreatePostElement } from "./CreatePostElement/CreatePostElement"
import PostList from "./PostsList/PostList"
/*
lISTA DE POSTS DE LOS USUARIOS AMIGOS DEL USUARIO, Y LOS DEL USUARIO.
- Se muestran en orden más reciente.
*/
function FeedPostsSection() {
      return (
            <div class="col-md-6 col-lg-7">
                  <div class="container">
                        < CreatePostElement />
                        < PostList />
                  </div>
            </div>
      )

}

export default FeedPostsSection