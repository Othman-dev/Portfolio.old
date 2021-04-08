import React, { useEffect, useState, useRef } from 'react';
import './matrix.scss';


const Matrix = () => {

		const [pointer, setPointer] = useState({
				x:0,
				y:0
		})

		// matrix effect on background

		const canvasRef = useRef(null);

		useEffect(() => {
				const canvas = canvasRef.current;
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
				const ctx = canvas.getContext('2d');
				const fontSize = window.innerHeight / 60;
				const columns = canvas.width / fontSize;
				const drops = [];
				for(let y = 0; y < columns ; y++){
						drops[y] = canvas.height;
				}
				setInterval( () => {
						ctx.fillStyle = '#0001';
						ctx.fillRect(0, 0, canvas.width, canvas.height);
						ctx.fillStyle = '#7DB003';
						ctx.font = fontSize + 'px sans-sherif';
						for(let i=0; i < columns; i++){
								const text = Math.floor(Math.random()*2)
								ctx.fillText(text, i*fontSize, drops[i]*fontSize);
								if(drops[i]*fontSize > canvas.height && Math.random() > 0.99){
										drops[i] = 0;
								}
								drops[i]++;
						}
				}, 50);

				window.addEventListener('mousemove', mousePointer)
				function mousePointer(e) {
						pointer.style = setPointer({
								x: e.clientX,
								y: e.clientY
						})
				}
		// eslint-disable-next-line react-hooks/exhaustive-deps
		},[])

		// Logo that goes on top of clipPath

		const matrixHole = (
						
				<div className='holeContainer'
				style={{'top': `${pointer.y}px`, 'left':`${pointer.x}px`}}> 
						<div className='holeEffect'/>
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
				<canvas ref={canvasRef}
				style={{'clipPath': `circle(6rem at ${pointer.x}px  ${pointer.y}px)`}}/>
				{matrixHole}
		</div>
)};

export default Matrix;
