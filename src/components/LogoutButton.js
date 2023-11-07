import {UserContext} from "./UserContext";
import {useContext} from "react";
import {Button} from "@chakra-ui/react";
import axios from 'axios';

const LogoutButton = () => {
    const [token, setToken] = useContext(UserContext);

    async function handleLogout() {
        await axios.get("http://localhost:80/api/logout", {withCredentials: true}).then(setToken(null))
        window.location.reload(false);
        localStorage.setItem("awesomeToken", null)
    }
    return (
            <div>{token && <Button variant='link' color="#FF00C3" backdropFilter="auto" backdropContrast="90%"
                                   onClick={handleLogout}>Logout</Button>}</div>
        );
}

export default LogoutButton

