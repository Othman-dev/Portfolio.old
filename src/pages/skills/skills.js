import React, { useContext, useEffect } from 'react';
import DuoPage from '../../components/layoutPage/duoPage.js';
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
				<DuoPage/>
		</div>
)};

export default Skills;
