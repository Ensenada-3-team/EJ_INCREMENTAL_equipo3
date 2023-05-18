function Cover(props) {
	return (
		
			<div className="col-md-7 card bg-transparent p-0 mx-auto">
				<img src="geom-dark.jpg" className="img-fluid rounded" />
				<div className="container-fluid py-4">
					<div className="row">
						<div className="col-md-8 offset-md-2">
							<div className="card bg-light">
								<div className="card-body">
									<h2 className="card-title text-center">
										{props.welcome}
										<br /> {props.title}
									</h2>
									<p className="card-text">
										{props.text}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		
	);
}

export { Cover };
