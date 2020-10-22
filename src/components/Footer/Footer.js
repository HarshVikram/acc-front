import React from'react';
import '../main.css';
import '../font-awesome.min.css';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<footer id="footer">
				<ul class="icons">
					<li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
					<li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;