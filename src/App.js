import React from 'react';
import NavBar from './components/NavBar';
import UploadPage from './components/UploadPage';
import LoginPage from './components/LoginPage';
import VideoPage from './components/VideoPage';
import HomePage from './components/HomePage';
import RegisterPage from './components/RegisterPage';
import UserVideosPage from './components/UserVideosPage';
import NotFoundPage from './components/NotFoundPage';
import { PrivateRoute } from './components/PrivateRoute';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const NavBarLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

function App() {
	return (
		<ChakraProvider>
			<Router>
				<Routes>
					<Route element={<NavBarLayout />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/upload" element={<PrivateRoute><UploadPage /></PrivateRoute>} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/my-videos" element={<PrivateRoute><UserVideosPage/></PrivateRoute>} />
						<Route path='*' element={<NotFoundPage />}/>
					</Route>
					<Route path="/video" element={<PrivateRoute><VideoPage /></PrivateRoute>} />
				</Routes>
			</Router>
		</ChakraProvider>
	);
}

export default App;
