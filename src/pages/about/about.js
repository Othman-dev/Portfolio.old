import React, { useContext, useEffect } from 'react';
import './about.scss';
import DuoPage from '../../components/layoutPage/duoPage.js';
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
				<DuoPage/>
		</div>
)};

export default About;
