import React from 'react';
import './Navbar.css';

import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
	return (
		<div className='Navbar'>
			<div className='navbar-content'>
				<p className='company-name'>Company</p>

				<input type='checkbox' id='check' />
				<label for='check' class='checkbtn'>
					<FiMenu className='hamburger-menu' />
				</label>

				<ul className='menu'>
					<li id='about'>
						<a href='#values'>About</a>
						<ul className='submenu'>
							<li>
								<a href='#values'>History</a>
							</li>
							<li class='tes'>
								<a href='#values'>Vission Mission</a>
							</li>
						</ul>
					</li>
					<li>
						<a href='#values'>Our Work</a>
					</li>
					<li>
						<a href='#values'>Our Team</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
