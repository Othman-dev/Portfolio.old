import React, { useContext, useEffect } from 'react';
import './projects.scss';
import Loading from '../../components/loading/loading.js';
import BaliseLayout, { BaliseOn, BaliseOff } from'../../components/balise/balise.js';
import { MainContext } from '../../context/mainContext.js';
import { FaGithub, FaLink } from 'react-icons/fa';
import {data} from './projectsData.js';

const Projects = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'projectsPage'})
		},[dispatch]);

		function projectClick(link) {
				window.open(link, '_blank');
		}

return (
		<div>
				<Loading title='Projects'/>
		<div className='projectsContainer'>
				<BaliseLayout/>
				<div className='projectsBaliseOn'><BaliseOn content='link'/></div> 
				<div className='clipContainer'>
						<div className='clip clip1'>
								<button className='buttonL' onClick={() => projectClick(data.project1Repo)}><FaGithub className='clipLogo'/></button>
								<div className='clipContent'>
										<p>{data.project1}</p>		
								</div>
								<button className='buttonR' onClick={() => projectClick(data.project1Link)}><FaLink className='clipLogo'/></button>
						</div>	
						<div className='clip clip2'>
								<button className='buttonL' onClick={() => projectClick(data.project2Repo)}><FaGithub className='clipLogo'/></button>
								<div className='clipContent'>
										<p>{data.project2}</p>		
								</div>
								<button className='buttonR' onClick={() => projectClick(data.project2Link)}><FaLink className='clipLogo'/></button>
						</div>	
						<div className='clip clip3'>
								<button className='buttonL' onClick={() => projectClick(data.project3Repo)}><FaGithub className='clipLogo'/></button>
								<div className='clipContent'>
										<p>{data.project3}</p>		
								</div>
								<button className='buttonR' onClick={() => projectClick(data.project3Link)}><FaLink className='clipLogo'/></button>
						</div>
				</div>
				<div className='projectsBaliseOff'><BaliseOff content='link'/></div> 
		</div>
		</div>
)};

export default Projects;
