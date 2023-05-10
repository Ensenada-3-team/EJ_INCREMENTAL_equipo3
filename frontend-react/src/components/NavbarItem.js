import React from 'react';
function NavbarItem(props) {
	return (
		<li className="nav-item navbar-collapse-icons">
			<a className="nav-link" href={props.href}>
				<i
					className={`bi ${props.icon}`}
					style={{ fontSize: "1.8rem" }}
					alt={props.alt}
				></i>
			</a>
		</li>
	);
}


export default NavbarItem;