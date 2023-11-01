import { useState } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
export { PrivateRoute };

function PrivateRoute({ children }: { children: JSX.Element }) {
	const token = localStorage.getItem("awesomeToken");
	const location = useLocation();

	if (token == "null") {
		return <Navigate to="/login" state={{ from: location }} />;
	} else {
		return children;
	}

}
