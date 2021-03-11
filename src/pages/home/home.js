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
				<BaliseOn content='h1' className='homeTitle'/>
		</div>
)};

export default Home;
