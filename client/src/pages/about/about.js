import React, { useContext, useEffect } from 'react';
import './about.scss';
import Loading from '../../components/loading/loading.js';
import Balise, { BaliseOn, BaliseOff } from '../../components/balise/balise.js';
import { MainContext } from '../../context/mainContext.js';


const About = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() => {
				dispatch({type: 'aboutPage'})
		},[dispatch]);


return (
		<div className='aboutMain'>
				<Loading title='About'/>
				<div className='leftSide'>
						<Balise/>
						<div className='leftBlock'>
								<BaliseOn content='h1'/>
								<h1>{'test'}</h1>	
								<BaliseOff content='h1'/>
						</div>
						<div className='leftBlock'>
								<BaliseOn content='p'/>
								<p>{'test'}</p>
								<BaliseOff content='p'/>
						</div>
				</div>
				<div className='rightSide'>
				<div className='aboutContainer'>
						<div className='aboutLinksOdd'>
								Linkedin
						</div>
						<div className='aboutLinksEven'>
								Github
						</div>
						<div className='aboutLinksOdd'>
								Stackoverflow
						</div>
						<div className='aboutLinksEven'>
								CodinGame
						</div>
				</div>
				</div>
		</div>
)};

export default About;
