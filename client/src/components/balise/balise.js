import React from 'react';
import './balise.scss';

export const BaliseOn = (props) => {
		const { content } = props;
return(
		<div className='balise'>
				{`<${content}>`}
		</div>
)};

export const BaliseOff = (props) => {
		const { content } = props;
return(
		<div className='balise'>
				{`</${content}>`}
		</div>
)};

const BaliseLayout = () => {

return(
		<div className='baliseLayout'>
				<div className='topHtml'>
						{'<html>'}
				</div>
				<div className='topBody'>
						{'<body>'}
				</div>
				<div className='bottomBody'>
						{'</body>'}
				</div>
				<div className='bottomHtml'>
						{'</html>'}
				</div>
		</div>
)};

export default BaliseLayout;
