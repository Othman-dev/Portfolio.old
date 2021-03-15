import React, { useContext } from 'react';
import './layoutPage.scss';
import Balise, { BaliseOn, BaliseOff } from '../balise/balise.js';
import { MainContext } from '../../context/mainContext.js';


const DuoPage = (props) => {

		const { title, content } = props;

		const { main } = useContext(MainContext);

		//-----      Contact Page      -----//

		const contactForm = (
				<form>
						
				</form>
		)  
		
return(
		<div className='duoPage'>
				<div className='leftSide'>
						<Balise/>
						<div className='leftBlock'>
								<BaliseOn content='h1'/>
								<h1>{title}</h1>	
								<BaliseOff content='h1'/>
						</div>
						<div className='leftBlock'>
								<BaliseOn content='p'/>
								<p>{content}</p>
								<BaliseOff content='p'/>
						</div>
				</div>
				<div className='rightSide'>
						rightside
				</div>
		</div>
)};

export default DuoPage;
