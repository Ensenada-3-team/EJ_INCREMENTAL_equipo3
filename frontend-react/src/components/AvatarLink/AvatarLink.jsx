import { useNavigate } from "react-router-dom";

function AvatarLink(props) {
	const { userId, avatar, size } = props;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(
			`/profile?user_id=${encodeURIComponent(JSON.stringify(userId))}`
		);
	};

	return (
		<>
			<a onClick={handleClick} className="d-block m-2 mt-3">
				<img
					className={`avatar ${size} rounded rounded-circle align-self-center border border-dark`}
					src={avatar}
					alt="Avatar link al perfil"
					id=""
				/>
			</a>
		</>
	);
}

export { AvatarLink };
