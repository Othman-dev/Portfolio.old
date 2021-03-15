import React, { useContext, useEffect } from 'react';
import './contact.scss';
import DuoPage from '../../components/layoutPage/duoPage.js';
import Loading from '../../components/loading/loading.js';
import { MainContext } from '../../context/mainContext.js';


const Contact = () => {

		const { dispatch } = useContext(MainContext);

		useEffect(() => {
				dispatch({type: 'contactPage'})
		},[dispatch]);

		const title = 'Get in touch';

		const content = 'etqgggggggggggggggggger ev qgeqe gqe gqe gqe gr reqgqggrg r gqrg qg rg rg gr rrrrrrrrrrrrrrrrrrr  gr g rrrrrrrrrrrr r r rrrrrrrrrrrrrrrrrrr r e qgg eqr rq gq rq gqr gq r qrq gqrrrrrrrrrrrr r gqer gqr gr gqer greqg erqg qerg req greq greg re grq yq yq gqe gqe gqg qerg eqg ';

return (
		<div>
				<Loading title='Contact'/>
				<DuoPage title={title} content={content}/>
		</div>
)};

export default Contact;
