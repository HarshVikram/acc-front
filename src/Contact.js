import React, { useState } from 'react';
import Layout from './components/Layout';
import Iframe from 'react-iframe';
import './Contact.css'

const Contact = () => {
		return (
			<div>
				<Layout />
				<div className='contact-container'>
					<div>
						<header className='block2-text1 mb3'>Contact Us</header>
					</div>

					<div className='contact-info'>
						<div className='contact-details pa2'>
							<header className='contact-header'>Contact Numbers</header>
							<p className='mb2 block2-text2'>Mobile: 9810147000, 9313292777</p>
							<p className='mb2 block2-text2'>Telephone: 9319084541, 9319084542, 9319084543, 9319084544</p>
						</div>
						<div className='contact-details pa2'>
							<header className='contact-header'>Email and Fax</header>
							<p className='mb2 block2-text2'>Email Address: acc_246@yahoo.in</p>
							<p className='mb2 block2-text2'>Fax: 23677273</p> 
						</div>
					</div>

					<div className='contact-address mb4'>
						<header className='contact-header pa2'>Address</header>
						<div className='map-api'>
							<Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d218.80510034107175!2d77.21166423526533!3d28.663263464109033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1599627762388!5m2!1sen!2sin"
							        width="100%"
							        height="300px"
							        id="myId"
							        className="map-location"
							        display="initial"
							        position="relative" />
							</div>
							<div className='block3-address black bg-orange dim link pointer'>
								<p className='mb0'>Showroom no. 245, Azad Market, Delhi - 110006</p>
								<p className='mb0 underline'>Click to get the location on Google Maps >></p> 
							</div>
					</div>

					<div>
						<p className='mb2 block2-text2'>Want us to reach out to you and help you out as fast as possible?</p>
						<a class="f7 link dim br3 ph3 pv2 mb2 dib white bg-orange" href="#0">Get in Touch</a>
					</div>
				</div>
			</div>
		);

}

export default Contact;