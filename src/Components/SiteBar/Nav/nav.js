import React from "react"
import {NavLink} from "react-router-dom"
function Nav({ text, Icon ,to }) {
	return (
		<li className='nav-item'>
      <Icon />
			<p className='logo-text'>
				<NavLink className={"nav-item__link"} to={to}>{text}</NavLink>
			</p>
		</li>
	);
}
export default Nav
