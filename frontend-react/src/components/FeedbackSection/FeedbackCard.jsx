const FeedbackCard = ({ name, firstname, occupation, nickname, content }) => {
	return (
		<div className="d-flex justify-content-center align-items-center">
		<div className="card bg-light bg-gradient">
			<div className="card-header">
				<h5 className="card-title">{name} {firstname}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{occupation}</h6>
				<h6 className="card-subtitle mb-2 text-muted">@{nickname}</h6>
			</div>
			<div className="card-body">{content}</div>
		</div>
		</div>
	);
};

export default FeedbackCard;
