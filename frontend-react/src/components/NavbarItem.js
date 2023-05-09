import React from 'react';
function NavbarItem(props) {
	return (
		<li class="nav-item navbar-collapse-icons">
			<a class="nav-link" href={props.href}>
				<i
					class={`bi ${props.icon}`}
					style={{ fontSize: "1.8rem" }}
					alt={props.alt}
				></i>
			</a>
		</li>
	);
}


export default NavbarItem;