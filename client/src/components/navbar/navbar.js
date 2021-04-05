import React, { useContext, useState } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../context/mainContext.js';
import classNames from 'classnames';
import Logo from '../../assets/logo.png';
import Wood from '../../assets/wood.jpg';
import ReactPlayer from 'react-player/lazy';
import { FaMusic } from 'react-icons/fa';


const Navbar = () => {

		const { main, dispatch } = useContext(MainContext);

		const [playing, setPlaying] = useState(false);

		const musicClass = classNames({
				'lightOff': true,
				'lightOn' : main.music ? true : false
		});

		const frenchClass = classNames({
				'lightOff': true,
				'lightOn' : main.french ? true : false
		});

		const knobClass = classNames({
				'knob':true,
				'knobAbout': main.page === 'about' ? true : false,
				'knobProjects': main.page === 'projects' ? true : false,
				'knobSkills': main.page === 'skills' ? true : false,
				'knobContact': main.page === 'contact' ? true : false
		});

		const musicTextContainer = classNames({
				'musicTextContainer':true,
				'musicTextContainerOn': main.music ? true : false
		});

		function musicClick() {
				dispatch({type: 'musicSwitch'});
				setPlaying(!playing);

		};

		function musicLink() {
				window.open('https://www.youtube.com/watch?v=HxF_ws9aeB0', '_blank');
		};


return(
		<div className='navbar'>
				<img className='imageBg' src={Wood} alt='wood'/>
				<div className='logoContainer'>
						<NavLink to='/'><img src={Logo} alt='Logo' className='logo'/></NavLink>
				</div>
				<div className='menu'>
						<div className='menuTop'>
								<NavLink className='contact' activeClassName='activeLink' to='/contact'>Contact</NavLink>
								<NavLink exact className='off' activeClassName='activeLink' to='/'>{!main.french ? 'Home': 'Accueil'}</NavLink>
								<NavLink className='about' activeClassName='activeLink' to='/about'>{!main.french ? 'About' : 'A propos'}</NavLink>
						</div>
						<div className={knobClass}>
								<div className='knobEffect'/>
								<div className='knobMarker'/>
				
						</div>
						<div className='menuBottom'>
								<NavLink className='projects' activeClassName='activeLink' to='/projects'>{!main.french ? 'Projects' : 'Projets'}</NavLink>
								<NavLink className='skills' activeClassName='activeLink' to='/skills'>{!main.french ? 'Skills' : 'Aptitudes'}</NavLink>
						</div>
				</div>
				<div className='musicContainer' onClick={musicLink}>
						<div className={musicTextContainer}>
								<p className='musicText'>Merkaba</p>
								<p className='musicText'>Solar  Ohm</p>
								<p className='musicText'>Merkaba</p>
								<p className='musicText'>Solar  Ohm</p>
						</div>
						<ReactPlayer className='musicPlayer' url='https://www.youtube.com/watch?v=HxF_ws9aeB0' loop={true} volume={0.2} playing={playing}/>
				</div>
				<div className='switches'>
						<div className={musicClass}/>
						<button onClick={musicClick}>
								<FaMusic className='faMusic'/>
						</button>
						<div className={frenchClass}/>
						<button onClick={() => dispatch({type: 'frenchSwitch'})}>
								<div className='flag'>
										<div className='flagBlue'/>
										<div className='flagWhite'/>
										<div className='flagRed'/>
								</div>
						</button>
				</div>
		</div>
)};

export default Navbar;
