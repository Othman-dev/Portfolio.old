import React, { useEffect, useState } from 'react';
import './display.scss';

const Display = () => {

		const [pointer, setPointer] = useState({
				x:0,
				y:0
		})

		useEffect(() => {
				window.addEventListener('mousemove', mousePointer)

				function mousePointer(e) {
						pointer.style = setPointer({
								x: e.clientX,
								y: e.clientY
						})
				}
		},[])

return(

		<div className='displayBackground'>
				<div value={pointer} 
				className='displayClip'
				style={{'clipPath': `circle(50px at ${pointer.x}px ${pointer.y}px)`}}/>
				<div value={pointer} 
				className='displayClip'
				style={{'clipPath': `circle(50px at ${pointer.x}px ${pointer.y}px)`, 'transition':'all .11s linear', 'opacity':'.6'}}/>
				<div value={pointer} 
				className='displayClip'
				style={{'clipPath': `circle(50px at ${pointer.x}px ${pointer.y}px)`, 'transition':'all .12s linear', 'opacity':'.4'}}/>
				<div value={pointer} 
				className='displayClip'
				style={{'clipPath': `circle(50px at ${pointer.x}px ${pointer.y}px)`, 'transition':'all .13s linear', 'opacity':'.2'}}/>
				<div value={pointer} 
				className='displayClip'
				style={{'clipPath': `circle(50px at ${pointer.x}px ${pointer.y}px)`, 'transition':'all .14s linear', 'opacity':'.1'}}/>
				<div value={pointer} 
				className='displayClip'
				style={{'clipPath': `circle(50px at ${pointer.x}px ${pointer.y}px)`, 'transition':'all .15s linear', 'opacity':'.1'}}/>
		{/*	<div value={pointer}
				className='displayClipShadow'
				style={{'top': `${pointer.y}px`, 'left':`${pointer.x}px`}}/> */}
		</div>

)};

export default Display;
