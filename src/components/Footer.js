import React from 'react';
import { Link } from 'react-router-dom';

import footerImg from '../assets/veraCryptImgs/image13.jpg';

const Footer = () => {
	return (
		<footer>
			<div class="container">
				<div class="footer">
					<div class="image">
						<a href="https://scm.bz/" target="_blank" rel="noreferrer">
							<img src={footerImg} alt="footer-img" />
						</a>
					</div>
					<div class="footer-content">
						<ul>
							<li>
								<Link to="/applications">الصفحة الرئيسية</Link>
							</li>
							<li>
								<Link to="/applications">التطبيقات</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="copy-right">
				<p class="copy">Copyright SCM &copy; 2022</p>
			</div>
		</footer>
	);
};

export default Footer;
