import React, { useContext, useEffect } from 'react';
import './about.scss';
import DuoPage from '../../components/layoutPage/duoPage.js';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';


const About = () => {

		const { dispatch } = useContext(MainContext);
		
		useEffect(() => {
				dispatch({type: 'aboutPage'})
		},[dispatch]);

		const title = 'Me, myself and I.';

		const content = 'etqgggggggggggggggggger ev qgeqe gqe gqe gqe gr reqgqggrg r gqrg qg rg rg gr rrrrrrrrrrrrrrrrrrr  gr g rrrrrrrrrrrr r r rrrrrrrrrrrrrrrrrrr r e qgg eqr rq gq rq gqr gq r qrq gqrrrrrrrrrrrr r gqer gqr gr gqer greqg erqg qerg req greq greg re grq yq yq gqe gqe gqg qerg eqg ';

return (
		<div>
				<Loading title='About'/>
				<DuoPage title={title} content={content}/>
		</div>
)};

export default About;
