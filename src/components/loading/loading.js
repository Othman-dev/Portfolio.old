import React, { useState, useEffect } from 'react';
import './loading.scss';
import Sound from '../../assets/sound.png';

const Loading = (props) => {
		
		const { title } = props;

		const [done, setDone] = useState(false);

		useEffect(() => {
				setDone(false);
				const timer = setTimeout(() => {
						setDone(true)
				}, 2000);
				return () => clearTimeout(timer);	
		},[]) 

return(
		<div>
		{ done ? 
				
				<div/>

				:

				<div className='loading'>
						<div className='soundLogo'>
								<img src={Sound} alt='sound' className='soundImage'/>
								<div className='soundAnim'/>
						</div>
						<div className='loadingText'>sending {title} signal</div>
				</div> 
		}
		</div>
)};

export default Loading;
