import React from 'react';
import NavBar from './components/NavBar';
import Vid from './components/video'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/" element={<NavBar />} />
					<Route path="/video" element={<Vid />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
