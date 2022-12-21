import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Footer = () => {
	return (
		<footer>
			<div className="footer">
				<div className="image">
					<a href="https://scm.bz/" target="_blank" rel="noreferrer">
						<img src={logo} alt="footer-img" />
					</a>
				</div>
				<div className="footer-content">
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
			<div className="copy-right">
				<p className="copy">Copyright SCM &copy; 2022</p>
			</div>
		</footer>
	);
};

export default Footer;
