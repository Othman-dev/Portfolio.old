import React, { useEffect, useState } from 'react';
import './layout.scss';
import MainContextProvider from '../context/mainContext.js';
import Navbar from '../components/navbar/navbar.js';
import Matrix from '../components/matrix/matrix.js';
import {
		BrowserRouter as Router,
		Switch,
		Route
} from 'react-router-dom';
import Home from '../pages/home/home.js';
import About from '../pages/about/about.js';
import Skills from '../pages/skills/skills.js';
import Projects from '../pages/projects/projects.js';
import Contact from '../pages/contact/contact.js';
import Error from '../pages/error/error.js';

const Layout = () => {
		
		const [navbarFlex, setNavbarFlex] = useState(false);

		function setNavbar() {
				setNavbarFlex(!navbarFlex)
				console.log(navbarFlex)
		}

return(
		<div className='layout'>
		<Matrix/>
		<MainContextProvider>
				<Router>
				<div className={navbarFlex ? 'navbarContainer flex' : 'navbarContainer'}>
						<Navbar/>
				</div>
				<div className='navbarMenu' onClick={setNavbar}>
						<div className='navbarMenuDiv navbarMenuTop'/>
						<div className='navbarMenuDiv navbarMenuMiddle'/>
						<div className='navbarMenuDiv navbarMenuBottom'/>
				</div>
				<div className='pageContainer'>
						<Switch>
						<Route exact path='/'  component={Home}/>
						<Route exact path='/about'  component={About}/>
						<Route exact path='/skills' component={Skills}/>
						<Route exact path='/projects' component={Projects}/>
						<Route exact path='/contact' component={Contact}/>
						<Route component={Error}/>
						</Switch>
				</div>
				</Router>
		</MainContextProvider>
		</div>
)};

export default Layout;
