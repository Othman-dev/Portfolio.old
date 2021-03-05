import React, { useContext, useEffect } from 'react';
import DuoDisplay from '../../components/display/duoDisplay.js';
import Header from '../../components/header/header.js';
import { MainContext } from '../../context/mainContext.js';

const Skills = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'skillsPage'})
		},[dispatch]);

return (
		<div>
				<Header title='Skills page'/>
				<DuoDisplay/>
		</div>
)};

export default Skills;
