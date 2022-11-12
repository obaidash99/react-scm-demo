import React from 'react';
import './App.css';

import Applications from './pages/Applications.js';
import Home from './pages/Home.js';

import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

import Veracrypt from './components/Veracrypt';
import Eset from './components/Eset';
import Eraser from './components/Eraser';
import Bitwarden from './components/Bitwarden.jsx';
import Authy from './components/Authy.jsx';
import MicrosoftAuth from './components/MicrosoftAuth.jsx';
import Nord from './components/Nord.jsx';
import Workspace from './components/Workspace.jsx';
import Mailvelope from './components/Mailvelope.jsx';
import Jitsi from './components/Jitsi.jsx';
import Zoom from './components/Zoom.jsx';
import Other from './components/Other.jsx';

import Footer from './components/Footer';

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
						<Route path="/applications/Eset" element={<Eset />} />
						<Route path="/applications/Veracrypt" element={<Veracrypt />} />
						<Route path="/applications/Eraser" element={<Eraser />} />
						<Route path="/applications/Bitwarden" element={<Bitwarden />} />
						<Route path="/applications/Authy" element={<Authy />} />
						<Route path="/applications/MicrosoftAuth" element={<MicrosoftAuth />} />
						<Route path="/applications/Nord" element={<Nord />} />
						<Route path="/applications/Workspace" element={<Workspace />} />
						<Route path="/applications/Mailvelope" element={<Mailvelope />} />
						<Route path="/applications/Jitsi" element={<Jitsi />} />
						<Route path="/applications/Zoom" element={<Zoom />} />
						<Route path="/applications/Other" element={<Other />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;
