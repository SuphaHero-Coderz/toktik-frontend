import {useContext, useState} from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import {UserContext} from "./UserContext";

function PrivateRoute({ children }: { children: JSX.Element }) {
	const [token, ] = useContext(UserContext)
	const location = useLocation();
	console.log(token);
	if (token == null) {
		console.log(token);
		return <Navigate to="/login" state={{ from: location }} />;
	} else {
		return children;
	}
}

export default PrivateRoute
