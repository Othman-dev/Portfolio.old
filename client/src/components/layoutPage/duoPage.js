import React, { useContext, useEffect, useState } from 'react';
import './layoutPage.scss';
import Balise, { BaliseOn, BaliseOff } from '../balise/balise.js';
import { MainContext } from '../../context/mainContext.js';
import  { AboutDb, SkillsDb, ContactDb } from '../../database/database.js';
import emailjs from 'emailjs-com';
import ContactMap  from './contactMap.js';


const DuoPage = (props) => {

		const { main } = useContext(MainContext);
		
		const [database, setDatabase] = useState(AboutDb);

		useEffect(() => {
						if(main.page === 'about') setDatabase(AboutDb)
						else if(main.page === 'skills') setDatabase(SkillsDb)
						else if(main.page === 'contact') setDatabase(ContactDb)
		}, [main])

		
		//-----     ABOUT PAGE     -----//

		const aboutRight = (
				<div className='aboutContainer'>
						<div className='aboutLinksOdd'>
								Linkedin
						</div>
						<div className='aboutLinksEven'>
								Github
						</div>
						<div className='aboutLinksOdd'>
								Stackoverflow
						</div>
						<div className='aboutLinksEven'>
								CodinGame
						</div>
				</div>
		)

		
		//-----     SKILLS PAGE     -----//


		const skillsRight = (
				<div className='skillsContainer'>
						<div className='circleTop'/>
						<div className='circleRight'/>
						<div className='circleLeft'/>
				</div>
		)


		//-----     CONTACT PAGE      -----//
		

		const [message, setMessage] = useState({})

		function handleSend(e) {
				e.preventDefault();
				emailjs.send('service_workmail', 'template_portfolio', message, process.env.REACT_APP_EMAIL_KEY)
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

		const contactForm = (
				<div className='leftBlock'>
						<BaliseOn content='form'/>
						<form onSubmit={handleSend}>
								<input className='formInput' name='name' placeholder='Name' type='text' onChange={handleChange} required/>
								<input className='formInput' name='email' placeholder='Email' type='email' onChange={handleChange} required/>
								<br/>
								<input className='formInput formSubject' name='subject' placeholder='Subject' type='text' onChange={handleChange} required/>
								<br/>
								<textarea className='formMessage' name='message' placeholder='Message...' type='text' onChange={handleChange} required/>
								<br/>
								<input className='formButton' type='submit' value='send'/>
						</form>
						<BaliseOff content='form'/>
				</div>
		)  
		
		const contactMap = (
				<div className='rightBlock contactMapContainer'>
						<p className='infoMap'>
								Othman Abboud<br/>
								Ynystawe, Swansea, Wales.<br/>
								<br/>
								<span>@</span> : othman@workmail.com
						</p>
						<ContactMap/>
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
						{main.page === 'contact' && contactMap}
						{main.page === 'about' && aboutRight}
						{main.page === 'skills' && skillsRight}
				</div>
		</div>
)};

export default DuoPage;
