import React, { useContext, useEffect, useState } from 'react';
import './layoutPage.scss';
import Balise, { BaliseOn, BaliseOff } from '../balise/balise.js';
import { MainContext } from '../../context/mainContext.js';
import  { AboutDb, SkillsDb, ContactDb } from '../../database/database.js';
import emailjs from 'emailjs-com';


const DuoPage = (props) => {

		const { main } = useContext(MainContext);
		
		const [database, setDatabase] = useState(AboutDb);

		useEffect(() => {
						if(main.page === 'about') setDatabase(AboutDb)
						else if(main.page === 'skills') setDatabase(SkillsDb)
						else if(main.page === 'contact') setDatabase(ContactDb)
		}, [main])

		//-----      Contact Page      -----//
		
		function handleSend(e) {
				e.preventDefault();

				emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
				.then((result) => {
						console.log(result.text);
				}, (error) => {
						console.log(error.text);
				});
		}

		function handleChange(e) {
				e.preventDefault();
				console.log(e.target, e.target.name, e.target.value);
		}

		const contactForm = (
				<div className='leftBlock'>
						<BaliseOn content='form'/>
						<form onSubmit={handleSend}>
								<input className='formInput' name='name' placeHolder='Name' type='text' onChange={handleChange} required/>
								<br/>
								<input className='formInput' name='email' placeHolder='Email' type='email' onChange={handleChange} required/>
								<br/>
								<input className='formInput' name='subject' placeHolder='Subject' type='text' onChange={handleChange} required/>
								<br/>
								<textarea className='formMessage' name='message' placeHolder='Message...' type='text' onChange={handleChange} required/>
								<br/>
								<input className='formButton' type='submit' value='send'/>
						</form>
						<BaliseOff content='form'/>
				</div>
		)  
		
return(
		<div className='duoPage'>
				<div className='leftSide'>
						<Balise/>
						<div className='leftBlock'>
								<BaliseOn content='h1'/>
								<h1>{database.title}</h1>	
								<BaliseOff content='h1'/>
						</div>
						<div className='leftBlock'>
								<BaliseOn content='p'/>
								<p>{database.content}</p>
								<BaliseOff content='p'/>
						</div>
						{main.page === 'contact' && contactForm}
				</div>
				<div className='rightSide'>
						rightside
				</div>
		</div>
)};

export default DuoPage;
