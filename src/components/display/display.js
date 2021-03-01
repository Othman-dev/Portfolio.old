import React from 'react';
import './display.css';

const display = () => {

const grid = (
		<div className='displayGrid'>
				<div className='gridBox'>1</div>		
				<div className='gridBox'>2</div>		
				<div className='gridBox'>3</div>		
				<div className='gridBox'>4</div>		
		</div>
)

const duo = (
		<div className='displayDuo'>
				<div className='leftSide'>
						leftside
				</div>
				<div className='rightSide'>
						rightside
				</div>
		</div>
)

return(
		<div>
				{grid}
		</div>
)};

export default display;
