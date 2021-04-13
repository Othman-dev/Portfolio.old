import React, { useContext, useState, useEffect } from 'react';
import './contact.scss';
import { dataEn, dataFr } from './contactData.js';
import Loading from '../../components/loading/loading.js';
import Balise, { BaliseOn, BaliseOff } from '../../components/balise/balise.js';
import { MainContext } from '../../context/mainContext.js';
import ContactMap  from './contactMap.js';
import Axios from 'axios';
import ScrollDown from '../../components/scrollDown/scrollDown.js';


const Contact = () => {

		const { main, dispatch } = useContext(MainContext);

		useEffect(() => {
				dispatch({type: 'contactPage'})
		},[dispatch]);

		const [message, setMessage] = useState({})

		function handleSend(e) {
				e.preventDefault();
				Axios.post('/api/email', message)
				.then((result) => {
						console.log(result.text);
				}, (error) => {
						console.log(error.text);
				}); 
		}

		function handleChange(e) {
				e.preventDefault();
				setMessage({...message, [e.target.name]: e.target.value});
		}


return (
		<div className='mainDuo'>
				<Loading title='Contact'/>
				<div className='leftSide'>
						<Balise/>
						<ScrollDown/>
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
						<div className='leftBlock'>
								<BaliseOn content='form'/>
								<form onSubmit={handleSend}>
										<input className='formInput' name='name' placeholder='Name' type='text' onChange={handleChange} required/>
										<input className='formInput' name='email' placeholder='Email' type='email' onChange={handleChange} required/>
										<br/>
										<input className='formInput formSubject' name='subject' placeholder='Subject' type='text' onChange={handleChange} required/>
										<br/>
										<textarea className='formMessage' name='content' placeholder='Message...' type='text' onChange={handleChange} required/>
										<br/>
										<input className='formButton' type='submit' value='send'/>
								</form>
								<BaliseOff content='form'/>
						</div>
				</div>
				<div className='rightSide'>
				<div className='contactMapContainer'>
						<p className='infoMap'>
								Othman Abboud<br/>
								Ynystawe, Swansea, Wales.
						</p>
						<ContactMap/>
				</div>
				</div>
		</div>
)};

export default Contact;
