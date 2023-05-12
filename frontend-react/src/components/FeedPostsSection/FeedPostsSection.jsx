import { useState } from "react";
import PostService from "../../services/post.service.js";
import PostList from "./PostList/PostList";
import { CreatePostElement } from "./CreatePostElement/CreatePostElement.jsx";
import Swal from "sweetalert2";

function FeedPostsSection() {
	const [posts, setPosts] = useState([]);

	const updatePosts = async () => {
		const user = JSON.parse(localStorage.getItem("user"));
		const postService = new PostService();

		try {
			const userFriendsPosts = await postService.getFriendsAndUserPostsByUserId(
				user.user.user_id
			);
			setPosts(userFriendsPosts);
                  
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Ha ocurrido un error al obtener las publicaciones!",
				footer: '<a href="">Why do I have this issue?</a>',
			});
		}
	};

	return (
		<div className="col-md-6 col-lg-7">
			<div className="container">
				<CreatePostElement updatePosts={updatePosts} />
				<PostList posts={posts} updatePosts={updatePosts} />
			</div>
		</div>
	);
}

export default FeedPostsSection;
