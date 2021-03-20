import React, { useContext, useEffect } from 'react';
import './home.scss';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';
import BaliseLayout, { BaliseOn, BaliseOff } from '../../components/balise/balise.js';

const Home = () => {
		
		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'homePage'})
		},[dispatch]);


return (
		<div className='homeContainer'>
				<Loading/>
				<BaliseLayout/>
				<div className='homeTitle'>
						<BaliseOn content='h1'/>
						<h1>Hello world,</h1>
						<h1>I am <div className='nameColor'>Othman</div>,</h1>
						<h1>web developer.</h1>
						<BaliseOff content='h1'/>
				</div>
				<div className='homeContent'>
						<BaliseOn content='p'/>
						<p>Fullstack / MERN developer</p>
						<BaliseOff content='p'/>
				</div>
		</div>
)};

export default Home;
