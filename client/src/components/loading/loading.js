import React, { useContext, useState, useEffect } from 'react';
import './loading.scss';
import Sound from '../../assets/sound.png';
import { MainContext } from '../../context/mainContext.js';

const Loading = (props) => {

		const { main } = useContext(MainContext);
		
		const { title } = props;

		const [done, setDone] = useState(true);

		useEffect(() => {
				setDone(false);
				const timer = setTimeout(() => {
						setDone(true)
				}, 2000);
				return () => clearTimeout(timer);	
		},[]) 

return(
		<div className='mainLoading'>
		{ done ? 
				
				<div/>

				:

				<div className='loading'>
						<div className='soundLogo'>
								<img src={Sound} alt='sound' className='soundImage'/>
								<div className='soundAnim'/>
						</div>
						<div className='loadingText'>{!main.french ? `receiving ${title} signal` : `réception du signal de ${title}`}</div>
				</div> 
		}
		</div>
)};

export default Loading;
