import React from 'react';

import './Footer.css';

import Facebook from '../img/facebook-official.png';
import Twitter from '../img/twitter.png';

const Footer = () => {
	return (
		<div className='Footer'>
			<p>Copyright © 2016. PT Company</p>
			<div className='footer-logo-container'>
				<img src={Facebook} alt='' className='footer-logo' />
				<img src={Twitter} alt='' className='footer-logo' />
			</div>
		</div>
	);
};
export default Footer;
