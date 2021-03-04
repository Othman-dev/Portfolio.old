import React from 'react';
import './header.css';

const Header = (props) => {
		
		const { title } = props;

return(
		<div classNames='header'>
				<h1>{title}</h1>
		</div>
)};

export default Header;
