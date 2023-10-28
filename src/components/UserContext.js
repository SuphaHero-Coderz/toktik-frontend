import React, { createContext, useEffect } from "react"
import { useState } from "react";
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("awesomeToken"));

    useEffect(() => {
        const fetchUser = async () => {
            localStorage.setItem("awesomeToken", token);
            var response
			try {
			await axios.get(`http://localhost:80/api/users/me`,
                { headers: { Authorization: 'Bearer ' + token }}).then((response) => {
			});
            } catch (error) {
                setToken(null)
            }
        };
        fetchUser();
    }, [token]);
    return (
        <UserContext.Provider value={[token, setToken]}>
            {props.children}
        </UserContext.Provider>
    )
};
