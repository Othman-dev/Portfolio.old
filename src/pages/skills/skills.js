import React, { useContext, useEffect } from 'react';
import DuoDisplay from '../../components/display/duoDisplay.js';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';

const Skills = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'skillsPage'})
		},[dispatch]);

return (
		<div>
				<Loading title='Skills'/>
				<DuoDisplay/>
		</div>
)};

export default Skills;
