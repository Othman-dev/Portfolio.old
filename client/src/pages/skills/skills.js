import React, { useContext, useEffect } from 'react';
import './skills.scss';
import Loading from '../../components/loading/loading.js';
import Balise, { BaliseOn, BaliseOff } from '../../components/balise/balise.js';
import { MainContext } from '../../context/mainContext.js';


const Skills = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'skillsPage'})
		},[dispatch]);

return (
		<div className='skillsMain'>
				<Loading title='Skills'/>
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
				<div className='skillsContainer'>
						<div className='circleTop'/>
						<div className='circleRight'/>
						<div className='circleBottom'/>
				</div>
				</div>
		</div>
)};

export default Skills;
