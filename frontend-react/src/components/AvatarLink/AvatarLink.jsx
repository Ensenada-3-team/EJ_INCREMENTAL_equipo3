import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";

function AvatarLink(props) {
	const { userId, avatar, size } = props;
	const navigate = useNavigate();
	const token = authService.getCurrentToken();
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = () => {
		token
			? navigate(
					`/app/profile?user_id=${encodeURIComponent(JSON.stringify(userId))}`
			  )
			: navigate("/");
	};
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const avatarStyle = {
		width: size,
		height: size,
		borderRadius: "50%",
		border: "1px solid dark",
		cursor: "pointer",
		transition: "transform 0.3s ease",
		transform: isHovered ? "scale(1.1)" : "scale(1)",
	};

	return (
		<>
			<button
				onClick={handleClick}
				className="d-block m-2 mt-3"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				style={{
					background: "none",
					border: "none",
					padding: 0,
					cursor: "pointer",
					textDecoration: "none",
					color: "inherit",
					outline: "none",
				}}
			>
				<img
					className={`avatar ${size} rounded rounded-circle align-self-center border border-dark`}
					src={avatar}
					style={avatarStyle}
					alt="Avatar link al perfil"
					id=""
				/>
			</button>
		</>
	);
}

export { AvatarLink };
