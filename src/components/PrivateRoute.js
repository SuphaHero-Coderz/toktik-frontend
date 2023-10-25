import { useState } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
export { PrivateRoute };

function PrivateRoute({ children }: { children: JSX.Element }) {
	const [token, _] = useState(localStorage.getItem("awesomeToken"));
	const location = useLocation();

	if (!token) {
		return <Navigate to="/login" state={{ from: location }} />;
	}

	return children;
}
