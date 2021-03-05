import React, { useContext, useEffect } from 'react';
import Header from '../../components/header/header.js';
import { MainContext } from '../../context/mainContext.js';


const Home = () => {
		
		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'homePage'})
		},[dispatch]);


return (
		<div>
				<Header title='Home page'/>
		</div>
)};

export default Home;
