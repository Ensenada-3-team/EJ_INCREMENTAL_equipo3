import { useState, useEffect } from "react";
import PostElement from "../PostElement/PostElement";
import PostService from "../../../services/post.service.js";
import authService from "../../../services/auth.service";
import Swal from "sweetalert2";

function PostList(props) {
	const user = authService.getCurrentUser();
	const [posts, setPosts] = useState(props.posts);

	useEffect(() => {
		const postService = new PostService();

		const fetchPosts = async () => {
			try {
				const userFriendsPosts =
					await postService.getFriendsAndUserPostsByUserId(user.user_id);
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

		fetchPosts();
	}, [props.posts, user.user_id]);

	return (
		<div>
			<ol id="lista-publicaciones">
				{posts.map((post) => (
					<PostElement key={post.post_id} data={post} />
				))}
			</ol>
		</div>
	);
}

export default PostList;
