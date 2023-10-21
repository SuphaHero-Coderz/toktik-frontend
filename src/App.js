import React from 'react';
import NavBar from './components/NavBar';
import VideoPage from './components/VideoPage'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
	return (
			<Router>
				<Routes>
					<Route path="/" element={<NavBar />} />
					<Route path="/video" element={<VideoPage />} />
				</Routes>
			</Router>
	);
}

export default App;
