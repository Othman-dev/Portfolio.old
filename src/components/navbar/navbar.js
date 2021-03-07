import React, { useContext } from 'react';
import './navbar.scss';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../../context/mainContext.js';
import classNames from 'classnames';
import Logo from '../../assets/logo.png';
import { FaMusic } from 'react-icons/fa';


const Navbar = () => {

		const { main, dispatch } = useContext(MainContext);

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

return(
		<div className='navbar'>
				<div className='logoContainer'>
						<NavLink to='/'><img src={Logo} alt='Logo' className='logo'/></NavLink>
				</div>
				<div className='menu'>
						<div className='menuTop'>
								<NavLink className='contact' activeClassName='activeLink' to='/contact'>Contact</NavLink>
								<NavLink exact className='off' activeClassName='activeLink' to='/'>Off</NavLink>
								<NavLink className='about' activeClassName='activeLink' to='/about'>About</NavLink>
						</div>
						<div className={knobClass}><div className='knobMarker'/></div>
						<div className='menuBottom'>
								<NavLink className='projects' activeClassName='activeLink' to='/projects'>Projects</NavLink>
								<NavLink className='skills' activeClassName='activeLink' to='/skills'>Skills</NavLink>
						</div>
				</div>
				<div className='switches'>
						<div className={musicClass}/>
						<button onClick={() => dispatch({type: 'musicSwitch'})}>
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
