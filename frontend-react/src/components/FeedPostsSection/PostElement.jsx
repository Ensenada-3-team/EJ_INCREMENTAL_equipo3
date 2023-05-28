import { useState } from "react";
import authService from "../../services/auth.service";
import PostService from "../../services/post.service";
import { AvatarLink } from "../AvatarLink/AvatarLink";
import Swal from "sweetalert2";

function PostElement(props) {
	const { data } = props;
	const token = authService.getCurrentToken();
	const user = authService.getCurrentUser();

	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(data.like_number);
	const [ deleted, setDeleted ] = useState(false);

	const handleLikeClick = () => {
		if (liked) {
			setLikeCount(likeCount - 1);
			setLiked(false);
		} else {
			setLikeCount(likeCount + 1);
			setLiked(true);
		}
	};

	const handleDeleteClick = () => {
		Swal.fire({
		    title: '¿Estás seguro?',
		    text: 'No podrás recuperar este post',
		    icon: 'warning',
		    showCancelButton: true,
		    confirmButtonColor: '#3085d6',
		    cancelButtonColor: '#d33',
		    confirmButtonText: 'Sí, eliminar',
		    cancelButtonText: 'Cancelar'
		}).then((result) => {
		    if (result.isConfirmed) {
			  try {
				const postService = new PostService();			
				postService.deletePost(data.post_id);
				setDeleted(true);
			  } catch (error) {
				console.log(error);
			  }
		    }
		});
	  };

	const handleCommentClick = () => {
		// handle comment click here
	};

	const handleShareClick = () => {
		// handle share click here
	};

	if (deleted) {
		return null;
	}

	return (
		<li className="card border p-4">
			<div className="container-fluid">
				<div className="row d-flex">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div className="ipad-post-avatar">
							<AvatarLink
								userId={data.user_id}
								avatar={data.avatar}
								size="avatar-lg"
							/>
							<h4 className="mt-3 p-0 post-name-firstname ipad-post-h4">
								{data.name} {data.firstname}
							</h4>
							<h6 className="p-0 post-name-firstname fw-normal ipad-post-h4">
							 	{data.occupation}
							</h6>
						</div>
					</div>
					<div className="col-lg-8 col-md-8 col-sm-12">
						<div className="sombra rounded p-4 p-md-2 bg-post">
							<h5 className="fw-bold d-flex justify-content-between post-nick-date">
								<p>@{data.nickname}</p>{" "}
								<p style={{ fontWeight: "normal", fontSize: "small" }}>
									{data.timeAgo}
								</p>
							</h5>
							<p>{data.text}</p>
						</div>
						{data.image && (
							<img
								className="img-fluid rounded sombra mt-2"
								src={data.image}
								alt="landscape"
							/>
						)}
					</div>
				</div>
				<div className="row">
					{/*BOTONES SOLO SE MUESTRAN SI EL USUARIO ESTÁ LOGUEADO */}
					{token && (
						<div className="d-flex justify-content-between w-100">
							<div className="d-flex mt-2">
								<div
									id={`sumLikes${data.post_id}`}
									className="mt-2"
									style={{ color: "black", fontWeight: "bold" }}
								>
									{likeCount}
								</div>
								<button
									id={data.post_id}
									className="btn like-btn"
									onClick={handleLikeClick}
								>
									<i className="bi bi-heart-fill"></i>
								</button>
							</div>
							<div>
								<button
									id="commentBtn"
									className="btn"
									title="Próximamente podrás comentar este post..."
									onClick={handleCommentClick}
								>
									<i
										className="bi bi-chat-left-text"
										style={{ color: "black", fontSize: "1.5rem" }}
									></i>
								</button>
								<button
									id="shareBtn"
									className="btn"
									title="Próximamente podrás compartir este post..."
									onClick={handleShareClick}
								>
									<i
										className="bi bi-share"
										style={{ color: "black", fontSize: "1.5rem" }}
									></i>
								</button>
								{data.user_id === user.user_id && (
									<button
										id="deleteBtn"
										className="btn"
										title="Eliminar el post"
										onClick={handleDeleteClick}
									>
										<i
											className="bi bi-x-lg"
											style={{ color: "black", fontSize: "1.5rem" }}
										></i>
									</button>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</li>
	);
}

export { PostElement };
