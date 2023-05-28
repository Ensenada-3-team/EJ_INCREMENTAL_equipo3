import { Link } from "react-router-dom";

function NavbarItem(props) {
	return (
		<li className="nav-item navbar-collapse-icons">
			<Link className="nav-link" to={props.to}>
				<i
					className={`bi ${props.icon}`}
					style={{ fontSize: "1.6rem" }}
					alt={props.alt}
					onClick={props.onClick}
					title={props.title}
				></i>
			</Link>
		</li>
	);
}

export { NavbarItem };
