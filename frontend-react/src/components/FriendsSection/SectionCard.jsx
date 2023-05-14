function SectionCard(props) {
	return (
		<>
			<div className="row">
				<div className="col card post-card p-1">
					<div>
						<h4>{props.title}</h4>
					</div>

				</div>
			</div>
		</>
	);
}

export { SectionCard };