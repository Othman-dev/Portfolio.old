import React, { useContext, useState } from 'react';
import './scrollDown.scss';
import { BsFillForwardFill } from 'react-icons/bs';


const ScrollDown = () => {

return(
		<div className='scrollDownContainer'>
				<div className='scrollDownText'>scroll down</div>
				<BsFillForwardFill className='scrollDownArrow'/>
		</div>
)};

export default ScrollDown;
