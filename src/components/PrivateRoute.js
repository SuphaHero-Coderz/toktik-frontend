import {useContext} from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {UserContext} from "./UserContext";

function PrivateRoute({ children }: { children: JSX.Element }) {
	const [token, ] = useContext(UserContext)
	const location = useLocation();
	console.log(token);
	if (token == null) {
		return <Navigate to="/login" state={{ from: location }} />;
	} else {
		return children;
	}
}

export default PrivateRoute
