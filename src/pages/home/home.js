import React, { useContext, useEffect } from 'react';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';


const Home = () => {
		
		const { dispatch } = useContext(MainContext);
		
		useEffect(() =>{
				dispatch({type: 'homePage'})
		},[dispatch]);


return (
		<div>
				<Loading/>
		</div>
)};

export default Home;
