import React from 'react';

import './Values.css';

import lightbulb from '../img/lightbulb-o.png';
import bank from '../img/bank.png';
import balance from '../img/balance-scale.png';

import { AiFillCaretRight } from 'react-icons/ai';

const Values = () => {
	return (
		<div className='Values' id='values'>
			<h2>Our Values</h2>
			<div className='values-content'>
				<div className='card card-1'>
					<div className='value'>
						<img src={lightbulb} alt='' />
						<h3>Innovatives</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab magnam dignissimos. Molestias, nulla? </p>
					</div>
					<AiFillCaretRight className='right-icon right-1' />
				</div>

				<div className='card card-2'>
					<div className='value'>
						<img src={bank} alt='' />
						<h3>Loyalty</h3>
						<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati esse ipsam quasi? Obcaecati, culpa hic!</p>
					</div>
					<AiFillCaretRight className='right-icon right-2' />
				</div>
				<div className='card card-3'>
					<div className='value'>
						<img src={balance} alt='' />
						<h3>Respect</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor veniam, quam dolore dicta.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Values;
