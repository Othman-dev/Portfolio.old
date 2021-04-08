import React, { useContext, useEffect } from 'react';
import './skills.scss';
import { dataEn, dataFr, circleTopContent, circleRightContent, circleBottomContent } from './skillsData.js';
import Loading from '../../components/loading/loading.js';
import BaliseLayout, { BaliseOn, BaliseOff } from '../../components/balise/balise.js';
import { MainContext } from '../../context/mainContext.js';


const Skills = () => {

		const { main, dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'skillsPage'})
		},[dispatch]);

return (
		<div className='mainDuo'>
				<Loading title='Skills'/>
				<BaliseLayout/>
				<div className='leftSide'>
						<div className='leftBlock'>
								<BaliseOn content='h1'/>
								<h1>{!main.french ? dataEn.title : dataFr.title}</h1>	
								<BaliseOff content='h1'/>
						</div>
						<div className='leftBlock'>
								<BaliseOn content='p'/>
								<p>{!main.french ? dataEn.content : dataFr.content}</p>
								<BaliseOff content='p'/>
						</div>
				</div>
				<div className='rightSide'>
						<div className='circleTop'>{circleTopContent}</div>
						<div className='circleRight'>{circleRightContent}</div>
						<div className='circleBottom'>{circleBottomContent}</div>
				</div>
		</div>
)};

export default Skills;
