import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<img src="../assets/logo.png" alt="logo" />
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="">Applications</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
