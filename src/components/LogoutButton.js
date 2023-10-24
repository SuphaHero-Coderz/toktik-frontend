import {UserContext} from "./UserContext";
import {useConst} from "@chakra-ui/react";
import {useContext} from "react";
import {Button} from "@chakra-ui/react";


const LogoutButton = () => {
    const [token, setToken] = useContext(UserContext);
    const handleLogout = () => {
        setToken(null);
    };

    return (
        <div>{ token && <Button variant='link' color="#FF00C3" backdropFilter="auto" backdropContrast="90%" onClick={handleLogout}>Logout</Button>}</div>
    );
};

export default LogoutButton

