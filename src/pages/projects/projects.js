import React, { useContext, useEffect } from 'react';
import GridDisplay from '../../components/display/gridDisplay.js';
import Header from '../../components/header/header.js';
import { MainContext } from '../../context/mainContext.js';

const Projects = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'projectsPage'})
		},[dispatch]);

return (
		<div>
				<Header title='Projects page'/>
				<GridDisplay/>
		</div>
)};

export default Projects;
