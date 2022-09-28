import React from 'react';
import './App.css';

import Applications from './components/Applications.js';
import Home from './components/Home.js';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

function App() {
	library.add(fab, faAnglesDown);

	return (
		<div>
			<Router>
				<div className="App">
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/applications" element={<Applications />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
