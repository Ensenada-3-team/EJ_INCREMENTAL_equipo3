function SectionCard(props) {
	return (
		<>
			<div className={"row" + props.display}>
				<div className={`col card p-1 text-center d-flex align-items-center ${props.background}`}>
					<h5 className={`${props.fontWeigth} ${props.textColor} mt-1`}>
						{props.title}
					</h5>
				</div>
			</div>
		</>
	);
}

export { SectionCard };
