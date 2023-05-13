import { useState, useEffect } from "react";
import PostElement from "../PostElement/PostElement";
import PostService from "../../../services/post.service.js";
import Swal from "sweetalert2";

function useUserFriendsPosts(userId, updatePosts) {
	const [posts, setPosts] = useState([]);
	const postService = new PostService();

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const userFriendsPosts = await postService.getFriendsAndUserPostsByUserId(userId);
				setPosts(userFriendsPosts);
				updatePosts(userFriendsPosts); 
				
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
	}, [userId, updatePosts]);

	return { posts };
}

function PostList(props) {
	const user = JSON.parse(localStorage.getItem("user"));
	const { posts } = useUserFriendsPosts(user.user.user_id, props.updatePosts);
	

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
