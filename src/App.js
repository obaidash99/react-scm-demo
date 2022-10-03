import React from 'react';
import './App.css';

import Applications from './pages/Applications.js';
import Home from './pages/Home.js';

import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import VMware from './components/VMware';
import Veracrypt from './components/Veracrypt';
import Eset from './components/Eset';
import Eraser from './components/Eraser';

function App() {
	library.add(fab, faAnglesDown);

	return (
		<div dir="rtl">
			<Router>
				<div className="App">
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/applications" element={<Applications />} />
						<Route path="/applications/VMware" element={<VMware />} />
						<Route path="/applications/Veracrypt" element={<Veracrypt />} />
						<Route path="/applications/Eset" element={<Eset />} />
						<Route path="/applications/Eraser" element={<Eraser />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
