import React, { useEffect, useState, useContext } from 'react';
import './layout.scss';
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
import { MainContext } from '../context/mainContext.js';

const Layout = () => {

		const { main, dispatch } = useContext(MainContext);

		function setNavbar() {
				dispatch({type: 'setNavbarFlex'})
		}

return(
		<div className='layout'>
				<Matrix/>
				<Router>
				<div className={main.navbarFlex ? 'navbarContainer flex' : 'navbarContainer'}>
						<Navbar/>
				</div>
				<div className='navbarMenu' onClick={setNavbar}>
						<div className={main.navbarFlex ? 'navbarMenuDiv navbarMenuTop' : 'navbarMenuDiv'}/>
						<div className={main.navbarFlex ? 'navbarMenuDiv navbarMenuMiddle' : 'navbarMenuDiv'}/>
						<div className={main.navbarFlex ? 'navbarMenuDiv navbarMenuBottom' :'navbarMenuDiv'}/>
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
		</div>
)};

export default Layout;
