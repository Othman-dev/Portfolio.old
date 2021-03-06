import React, { useContext, useEffect } from 'react';
import DuoDisplay from '../../components/display/duoDisplay.js';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';


const About = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() => {
				dispatch({type: 'aboutPage'})
		},[dispatch]);

return (
		<div>
				<Loading title='About'/>
				<DuoDisplay/>
		</div>
)};

export default About;
