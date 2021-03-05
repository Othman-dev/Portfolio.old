import React, { useContext, useEffect } from 'react';
import DuoDisplay from '../../components/display/duoDisplay.js';
import Header from '../../components/header/header.js';
import { MainContext } from '../../context/mainContext.js';


const About = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() => {
				dispatch({type: 'aboutPage'})
		},[dispatch]);

return (
		<div>
				<Header title='About page'/>
				<DuoDisplay/>
		</div>
)};

export default About;
