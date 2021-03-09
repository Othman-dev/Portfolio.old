import React, { useEffect, useState } from 'react';
import './matrix.scss';


const Matrix = () => {

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

		const matrixHole = (
						
				<div className='holeContainer'
				style={{'top': `${pointer.y}px`, 'left':`${pointer.x}px`}}> 
						<div className='holeCircle circle1'/>				
						<div className='holeCircle circle2'/>				
						<div className='holeCircle circle3'/>				
						<div className='holeCircle circle4'/>			
						<div className='holeCircle circle5'/>				
						<div className='holeCircle circle6'/>		
						<div className='holeCircle circle7'/>				
						<div className='holeCircle circle8'/>		
						<div className='holeCircle circle9'/>				
						<div className='holeCircle circle10'/>		
						<div className='holeCircle circle11'/>				
						<div className='holeCircle circle12'/>		
				</div>
		); 


return(
		<div className='matrixContainer'>
				<div className='matrix'
				style={{'clipPath': `circle(49px at ${pointer.x}px  ${pointer.y}px)`}}> 
					testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
				</div>
				{matrixHole}
		</div>
)};

export default Matrix;
