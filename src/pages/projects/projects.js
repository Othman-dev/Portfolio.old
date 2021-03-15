import React, { useContext, useEffect } from 'react';
import './projects.scss';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';
import { FaGithub, FaLink } from 'react-icons/fa';

const Projects = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'projectsPage'})
		},[dispatch]);

return (
		<div className='projectsContainer'>
				<Loading title='Projects'/>
				<div className='clipContainer'>
						<div className='clip clip1'>
								<button className='buttonL'><FaGithub className='clipLogo'/></button>
								<div className='clipContent'>
										srhsfhsfhshshsfhsdhsdhdsfhsdgsdg
								</div>
								<button className='buttonR'><FaLink className='clipLogo'/></button>
						</div>	
						<div className='clip clip2'>
								<button className='buttonL'><FaGithub className='clipLogo'/></button>
								<div className='clipContent'>
										srhsfhsfhshshsfhsdhsdhdsfhsdgsdg
								</div>
								<button className='buttonR'><FaLink className='clipLogo'/></button>
						</div>	
						<div className='clip clip3'>
								<button className='buttonL'><FaGithub className='clipLogo'/></button>
								<div className='clipContent'>
										srhsfhsfhshshsfhsdhsdhdsfhsdgsdg
								</div>
								<button className='buttonR'><FaLink className='clipLogo'/></button>
						</div>
				</div>
		</div>
)};

export default Projects;
