import React, { createContext, useEffect } from "react"
import { useState } from "react";
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("awesomeToken"));

    useEffect(() => {
        const fetchUser = async () => {
            var response
			try {
			await axios.get(`http://localhost:80/api/users/me`,
                { headers: { Authorization: 'Bearer ' + token }}).then((response) => {
				response = response.data;
			});
            } catch (error) {
                console.log(error);
                setToken(null)
            }
            console.log(response);
            localStorage.setItem("awesomeToken", token);
        };
        fetchUser();
    }, [token]);
    return (
        <UserContext.Provider value={[token, setToken]}>
            {props.children}
        </UserContext.Provider>
    )
};
