import React from 'react';
import NavBar from './components/NavBar';
import UploadPage from './components/UploadPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
	return (
		<ChakraProvider>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<div></div>} />
					<Route path="/upload" element={<UploadPage />} />
					<Route path="/video" element={<VideoPage />} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
}

export default App;
