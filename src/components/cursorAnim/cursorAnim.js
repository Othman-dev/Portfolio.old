import React, { useState, useEffect } from 'react';
import './cursorAnim.scss';

const CursorAnim = () => {

		const [cursor, setCursor] = useState({
				x: 0,
				y: 0
		})

		useEffect(() => {

				window.addEventListener('mousemove', mouseCursor);

				function mouseCursor(e) {
						cursor.style = setCursor({
								x: e.clientX,
								y: e.clientY
						})
				}

		},[]);

return(
		
		<div className='cursorContainer'>
				<div 
				value={cursor} 
				className='cursorBubble' 
				style={{'top':`${cursor.y}px`, 'left':`${cursor.x}px`}}/>
		</div>
)};

export default CursorAnim;
