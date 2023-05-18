/*
COMPONENTE PADRE que contiene y comunica a sus dos componentes hijos, CreatePostElement y PostList.
A través de la función updatePosts, se obtiene la actualizacion de la lista de publicaciones cuando CreatePostElement crea un nuevo post.
PostList contiene la lista de publicaciones del usuario, y recibe la actualización por props a través de el nuevo valor de posts.
*/

import { useState } from "react";
import PostService from "../../services/post.service.js";
import authService from "../../services/auth.service";
import { PostList }from "./PostList.jsx";
import { CreatePostElement } from "./CreatePostElement.jsx";
import Swal from "sweetalert2";

function FeedPostsSection() {
	const [posts, setPosts] = useState([]);

	const updatePosts = async () => {
		const user = authService.getCurrentUser()
		const postService = new PostService();

		try {
			const userFriendsPosts = await postService.getFriendsAndUserPostsByUserId(
				user.user_id
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
				<PostList posts={posts} />
			</div>
		</div>
	);
}

export default FeedPostsSection;
