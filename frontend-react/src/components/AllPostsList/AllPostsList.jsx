import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PostElement } from "../FeedPostsSection/PostElement";
import PostService from "../../services/post.service.js";
import authService from "../../services/auth.service.js";
import Swal from "sweetalert2";

function AllPostsList() {
	const user = authService.getCurrentUser();
	const [posts, setPosts] = useState([]);
	const token = authService.getCurrentToken();

	useEffect(() => {
		const postService = new PostService();

		const fetchPosts = async () => {
			try {
				const userFriendsPosts = await postService.getAllPosts();
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
	}, []);

	return (
		<div className="col-md-6 col-lg-7">
			<ol id="lista-publicaciones">
				{ token
					? posts.map((post) => <PostElement key={post.post_id} data={post} />)
					: posts.slice(0, 5).map((post) => <PostElement key={post.post_id} data={post} />)}
			</ol>
		</div>
	);
}

export { AllPostsList };
