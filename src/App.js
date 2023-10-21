import React from 'react';
import NavBar from './components/NavBar';
import Vid from './components/video'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Box from '@chakra-ui/react'

function App() {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<NavBar />} />
					<Route path="/video" element={<Vid />} />
				</Routes>
			</Router>
	);
}

export default App;
