import React, { useContext, useEffect } from 'react';
import GridPage from '../../components/layoutPage/gridPage.js';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';

const Projects = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'projectsPage'})
		},[dispatch]);

return (
		<div>
				<Loading title='Projects'/>
				<GridPage/>
		</div>
)};

export default Projects;
