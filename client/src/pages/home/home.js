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
		<div className='homeContainer'>
				<Loading title='Home'/>
				<BaliseLayout/>
				<div className='homeTitle'>
						<BaliseOn content='h1'/>
						<h1>Hello world.</h1>
						<h1>{!main.french ? 'I am ' : 'Je suis ' }<div className='nameColor'>Othman</div>,</h1>
						<h1>{!main.french ? 'web developer.' : 'developpeur web'}</h1>
						<BaliseOff content='h1'/>
				</div>
				<div className='homeContent'>
						<BaliseOn content='p'/>
						<p>{!main.french ? 'Fullstack / MERN developer' : 'Fullstack / Developpeur MERN'}</p>
						<BaliseOff content='p'/>
				</div>
		</div>
)};

export default Home;
