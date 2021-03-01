import React from 'react';
import './navbar.css';

const navbar = () => {

return(
		<div className='navbar'>
				<div className='logoContainer'>Logo</div>
				<ul className='menu'>
						<li>about</li>
						<li>skill</li>
						<li>project</li>
						<li>contact</li>
				</ul>
				<div className='switch'>
						<div>musicSwitch</div>
						<div>themeSwitch</div>
				</div>
		</div>
)};

export default navbar;
