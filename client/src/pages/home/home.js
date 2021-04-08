import React, { useContext, useEffect } from 'react';
import './home.scss';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';
import BaliseLayout, { BaliseOn, BaliseOff } from '../../components/balise/balise.js';

const Home = () => {
		
		const { dispatch, main } = useContext(MainContext);
		
		
		useEffect(() => {
				dispatch({type: 'homePage'})
		// eslint-disable-next-line react-hooks/exhaustive-deps
		},[]);


return (
		<div className='mainDuo'>
				<Loading title='Home'/>
				<BaliseLayout/>
				<div className='leftSide'>
						<div className='leftBlock'>
								<BaliseOn content='h1'/>
								<h1 className='homeH1'>Hello world.</h1>
								<h1 className='homeH1'>{!main.french ? 'I am ' : 'Je suis ' }<span className='nameColor'>Othman</span>,</h1>
								<h1 className='homeH1'>{!main.french ? 'web developer.' : 'développeur web'}</h1>
								<BaliseOff content='h1'/>
						</div>
						<div className='leftBlock'>
								<BaliseOn content='p'/>
								<p className='homeP'>{!main.french ? 'Fullstack / MERN developer' : 'Fullstack / Developpeur MERN'}</p>
								<BaliseOff content='p'/>
						</div>
				</div>
		</div>
)};

export default Home;
