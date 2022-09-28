import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Nav = () => {
	return (
		<div className="container">
			<nav dir="rtl">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<ul>
					<li>
						<Link to="/">الصفحة الرئيسية</Link>
					</li>
					<li>
						<Link to="/applications">التطبيقات</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
