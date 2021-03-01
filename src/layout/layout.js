import React from 'react';
import './layout.css';
import Navbar from '../components/navbar/navbar.js';
import Display from '../components/display/display.js';

const layout = () => {

return(
		<div className='layout'>
				<div className='navbarContainer'>
						<Navbar/>
				</div>
				<div className='displayContainer'>
						<Display/>
				</div>
		</div>
)};

export default layout;
