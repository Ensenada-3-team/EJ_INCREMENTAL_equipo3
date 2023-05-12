import { CreatePostElement } from "./CreatePostElement/CreatePostElement"
import PostList from "./PostsList/PostList"

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