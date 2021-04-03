import React, { useContext, useEffect } from 'react';
import './about.scss';
import Loading from '../../components/loading/loading.js';
import Balise, { BaliseOn, BaliseOff } from '../../components/balise/balise.js';
import { MainContext } from '../../context/mainContext.js';
import { FaLinkedin, FaGithub, FaStackOverflow,  } from 'react-icons/fa';
import { ReactComponent as Codingame} from './codingame.svg';
import { dataEn, dataFr } from './aboutData.js';


const About = () => {

		const { main, dispatch } = useContext(MainContext);
		
		useEffect(() => {
				dispatch({type: 'aboutPage'})
		},[dispatch]);

		function linkedinLink() {
				window.open('https://www.linkedin.com/in/othman-abboud/', '_blank');
		};

		function githubLink() {
				window.open('https://github.com/Othman-dev/Portfolio', '_blank');
		};

		function stackoverflowLink() {
				window.open('https://stackoverflow.com/users/13862061/othman', '_blank');
		};

		function codingameLink() {
				window.open('https://www.codingame.com/profile/d462ed371e6392c976083f23d1ad103d8533304', '_blank');
		};

return (
		<div className='aboutMain'>
				<Loading title='About'/>
				<div className='leftSide'>
						<Balise/>
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
				</div>
				<div className='rightSide'>
				<div className='aboutContainer'>
						<span>{!main.french ? dataEn.linkTitle : dataFr.linkTitle}</span>
						<div className='aboutLinksOdd' onClick={linkedinLink}>
								<FaLinkedin className='AboutIconLink'/>
								<p>{!main.french ? dataEn.linkedin : dataFr.linkedin}</p>
						</div>
						<div className='aboutLinksEven' onClick={githubLink}>
								<p>{!main.french ? dataEn.stackoverflow : dataFr.stackoverflow}</p>
								<FaStackOverflow className='AboutIconLink'/>
						</div>
						<div className='aboutLinksOdd' onClick={stackoverflowLink}>
								<Codingame className='AboutIconLinkCodingame'/>
								<p>{!main.french ? dataEn.codingame : dataFr.codingame}</p>
						</div>
						<div className='aboutLinksEven' onClick={codingameLink}>
								<p>{!main.french ? dataEn.github : dataFr.github}</p>
								<FaGithub className='AboutIconLink'/>
						</div>
				</div>
				</div>
		</div>
)};


export default About;
