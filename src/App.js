import React from 'react';
import './App.css';

import Applications from './components/Applications.js';
import Home from './components/Home.js';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Router>
				<div className="App">
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<Applications />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
