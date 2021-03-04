import React, { useContext } from 'react';
import './navbar.scss';
import {
		NavLink
} from 'react-router-dom';
import { MainContext } from '../../context/mainContext.js';
import Logo from '../../assets/logo.png';


const Navbar = () => {

		const { main, dispatch } = useContext(MainContext);

return(
		<div className='navbar'>
				<div className='logoContainer'>
						<NavLink to='/'><img src={Logo} alt='Logo' className='logo'/></NavLink>
				</div>
				<div className='menu'>
						<div className='menuTop'>
								<NavLink className='about' activeClassName='activeLink' to='/about'>About</NavLink>
								<NavLink exact className='off' activeClassName='activeLink' to='/'>Off</NavLink>
								<NavLink className='skills' activeClassName='activeLink' to='/skills'>Skills</NavLink>
						</div>
						<div className='knob'/>
						<div className='menuBottom'>
								<NavLink className='projects' activeClassName='activeLink' to='/projects'>Projects</NavLink>
								<NavLink className='contact' activeClassName='activeLink' to='/contact'>Contact</NavLink>
						</div>
				</div>
				<div className='switch'>
						<div className='light'/>
						<button onClick={() => dispatch({type: 'musicSwitch'})}>
								Music
						</button>
						<div className='light'/>
						<button onClick={() => dispatch({type: 'frenchSwitch'})}>
								Franc.
						</button>
				</div>
		</div>
)};

export default Navbar;
