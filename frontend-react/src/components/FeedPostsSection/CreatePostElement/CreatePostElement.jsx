import { useState, useEffect } from "react";
import PostService from "../../../services/post.service.js";
import UserService from "../../../services/user.service.js";

import Swal from "sweetalert2";

function CreatePostElement(props) {
	const [content, setContent] = useState("");
	const postService = new PostService();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const textArea = document.querySelector("#mensaje-post");
		const user = JSON.parse(localStorage.getItem("user"));

		try {
			const data = await postService.createPost(
				textArea.value,
				user.user.user_id
			);
			console.log(data);

			setContent("");
			props.updatePosts();
			
		} catch (error) {
			console.error(error);
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Ha ocurrido un error al crear un nuevo post!",
				footer: '<a href="">Why do I have this issue?</a>',
			});
		}
	};

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		const username = document.querySelector("#nickname");
		const ocupation = document.querySelector("#ocupation");
		const loggedUserImage = document.querySelector("#logged-user-image");
		const userService = new UserService();

		async function loadUserData() {
			try {
				const userData = await userService.getUserById(user.user.user_id);
				console.log(userData);

				username.textContent = `@${userData.nickname}`;
				ocupation.textContent = userData.ocupation;
				loggedUserImage.src = userData.avatar;
			} catch (error) {
				console.error(error);
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: "Ha ocurrido un error al cargar los datos del usuario!",
					footer: '<a href="">Why do I have this issue?</a>',
				});
			}
		}

		loadUserData();
	}, []);

	return (
		<div className="row">
			<div className="col card post-card">
				<div className="d-flex w-100 card-header rounded mb-2 p-0">
					<img
						id="logged-user-image"
						className="avatar rounded rounded-circle border border-dark"
						alt="imagen usuario logueado"
					/>
					<div className="d-column m-1">
						<h4 id="nickname" className="mt-1"></h4>
						<p id="ocupation"></p>
					</div>
				</div>
				<h4 className="align-self-start">Comparte algo con tu comunidad:</h4>
				<form id="form-publicacion" className="w-100" onSubmit={handleSubmit}>
					<textarea
						id="mensaje-post"
						className="form-control sombra rounded"
						placeholder="Cuéntanos algo interesante en menos de 256 caracteres :D"
						maxLength="256"
						rows="3"
						value={content}
						onChange={(event) => setContent(event.target.value)}
					></textarea>
					<div className="d-flex flex-row-reverse">
						<button
							type="submit"
							className="btn btn-sm btn-dark sombra"
							id="crear-publicacion"
						>
							Post
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export { CreatePostElement };
