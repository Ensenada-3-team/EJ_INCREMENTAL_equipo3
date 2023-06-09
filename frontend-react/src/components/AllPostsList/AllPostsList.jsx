import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostElement } from "../FeedPostsSection/PostElement";
import { SectionCard } from "../FriendsSection/Cards/SectionCard";
import PostService from "../../services/post.service.js";
import Swal from "sweetalert2";

function AllPostsList() {
	const [posts, setPosts] = useState([]);
	const token = useSelector((state) => state.auth.token);

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
		<div className="col-md-5 col-lg-7 mx-auto">
			{!token ? (
				<SectionCard title="Esto es parte de lo que vas a encontrar en nuestra comunidad..."  background="bg-secondary bg-gradient"/>
			) : (
				<SectionCard title="Lo más reciente..."  background="bg-secondary bg-gradient" />
			)}
			<ol id="lista-publicaciones">
				{token
					? posts.map((post) => <PostElement key={post.post_id} data={post} />)
					: posts
							.slice(0, 5)
							.map((post) => <PostElement key={post.post_id} data={post} />)}
			</ol>
		</div>
	);
}

export { AllPostsList };
