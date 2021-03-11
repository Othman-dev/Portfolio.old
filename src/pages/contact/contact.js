import React, { useContext, useEffect } from 'react';
import DuoPage from '../../components/layoutPage/duoPage.js';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';


const Contact = () => {

		const { dispatch } = useContext(MainContext);

		useEffect(() => {
				dispatch({type: 'contactPage'})
		},[dispatch]);

return (
		<div>
				<Loading title='Contact'/>
				<DuoPage/>
		</div>
)};

export default Contact;
