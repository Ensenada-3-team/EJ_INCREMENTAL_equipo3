function SectionCard(props) {
	return (
		<>
			<div className="row">
				<div className="col card post-card">
					<div>
						<h2>{props.title}</h2>
					</div>

				</div>
			</div>
		</>
	);
}

export { SectionCard };