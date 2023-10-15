import React from 'react';
import NavBar from './components/NavBar';
import UploadPage from './components/UploadPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
		  <div>
			<NavBar />
			<Routes>
			  <Route path="/upload" element={<UploadPage />} />
			</Routes>
		  </div>
		</Router>
	);
}

export default App;
