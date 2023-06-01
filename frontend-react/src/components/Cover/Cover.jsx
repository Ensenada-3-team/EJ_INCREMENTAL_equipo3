import React from "react";
// import { useLocation } from "react-router-dom";
// import ReactPlayer from "react-player/youtube";

function Cover(props) {
	// const location = useLocation();

	return (
		<div className="col-md-6 card bg-transparent p-0 mx-auto">
			<img
				src="/geom-dark.jpg"
				className="img-fluid rounded w-100"
				alt="portada"
			/>
			<div className="container-fluid py-4">
				<div className="row">
					<div className="col-md-8 offset-md-2">
						<div className="card bg-light">
							<div className="card-body text-center">
								<h2 className="card-title">
									{props.welcome}
									<br /> {props.title}
								</h2>
								<p className="card-text">{props.text}</p>
							</div>
						</div>
					</div>
					{/*VIDEO */}
					{/* {location.pathname === "/register" && (<div className="col-md-8 col-sm-2 offset-md-2 mt-4">
						<div className="d-flex justify-content-center align-items-center ">
							<div className=" card d-flex justify-content-center p-2">
								<ReactPlayer
									url="https://www.youtube.com/watch?v=HrN6mjLjMZw"
									playing={true}
									loop={true}
									controls={false}
									width="100%"
									height="100%"
								/>
							</div>
						</div>
					</div>)} */}
				</div>
			</div>
		</div>
	);
}

export { Cover };
