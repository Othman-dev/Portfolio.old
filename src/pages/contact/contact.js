import React, { useContext, useEffect } from 'react';
import DuoDisplay from '../../components/display/duoDisplay.js';
import Header from '../../components/header/header.js';
import { MainContext } from '../../context/mainContext.js';


const Contact = () => {

		const { dispatch } = useContext(MainContext);

		useEffect(() => {
				dispatch({type: 'contactPage'})
		},[dispatch]);

return (
		<div>
				<Header title='Contact'/>
				<DuoDisplay/>
		</div>
)};

export default Contact;
