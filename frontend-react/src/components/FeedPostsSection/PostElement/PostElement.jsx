import { useState } from "react";

function PostElement(props) {
	const { data } = props;

	const [liked, setLiked] = useState(false);
	const [likeCount, setLikeCount] = useState(data.like_number);

	const handleLikeClick = () => {
		if (liked) {
			setLikeCount(likeCount - 1);
			setLiked(false);
		} else {
			setLikeCount(likeCount + 1);
			setLiked(true);
		}
	};

	const handleCommentClick = () => {
		// handle comment click here
	};

	const handleShareClick = () => {
		// handle share click here
	};

	return (
		<li className="card border p-4">
			<div className="container">
				<div className="row d-flex">
					<div className="col-lg-4 col-md-4 col-sm-12">
						<div>
							<img
								className="avatar rounded rounded-circle align-self-start border border-dark ipad-avatar"
								src={data.avatar}
								alt="foto de autor x"
							/>
							<h4 className="mt-3 p-0 post-name-firstname">
								{data.name} {data.firstname}
							</h4>
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
								alt="post image"
							/>
						)}
					</div>
				</div>
				<div className="row">
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
								onClick={handleCommentClick}
							>
								<i
									className="bi bi-chat-left-text"
									style={{ color: "black", fontSize: "1.5rem" }}
								></i>
							</button>
							<button id="shareBtn" className="btn" onClick={handleShareClick}>
								<i
									className="bi bi-share"
									style={{ color: "black", fontSize: "1.5rem" }}
								></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

export default PostElement;
