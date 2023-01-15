import React from 'react';

import { useState } from 'react';

import './Contact.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		if (name != '' && email != '' && email.includes('.') == true && email.includes('@') == true && message != '') {
			setSubmitted(false);
			window.location = '';
		}
	};

	return (
		<div className='Contact' id='contact'>
			<h2>Contact Us</h2>
			<form action='' className='contact-form' onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				{!submitted ? <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} /> : <input type='text' id='name' name='name' onChange={(e) => setName(e.target.value)} className='submitted' />}
				{submitted && name == '' && <p>This field is required</p>}

				<label htmlFor='email'>Email</label>
				{!submitted ? <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)} /> : <input type='email' id='email' name='email' onChange={(e) => setEmail(e.target.value)} className='submitted' />}
				{(submitted && email == '' && <p>Invalid email address</p>) || (submitted && email.includes('@') == false && <p>Invalid email address</p>) || (submitted && email.includes('.') == false && <p>Invalid email address</p>)}

				<label htmlFor='message'>Message</label>
				{!submitted ? (
					<textarea cols='30' rows='10' name='message' id='message' onChange={(e) => setMessage(e.target.value)}></textarea>
				) : (
					<textarea cols='30' rows='10' name='message' id='message' onChange={(e) => setMessage(e.target.value)} className='submitted'></textarea>
				)}
				{submitted && message == '' && <p>This field is required</p>}

				<label htmlFor='submit'></label>
				<input type='submit' value='Submit' className='submit' />
			</form>
		</div>
	);
};

export default Contact;
