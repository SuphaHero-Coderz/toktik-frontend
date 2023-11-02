import React, { createContext, useEffect } from "react"
import { useState } from "react";
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = (props) => {
    const [token, setToken] = useState(localStorage.getItem("awesomeToken"));

    useEffect(() => {
        const fetchUser = async () => {
			try {
                await axios.get(`http://localhost:80/api/users/me`, { withCredentials: true, headers: { Authorization: 'Bearer ' + token }})
                setToken(1)
                localStorage.setItem("awesomeToken", 1)
            } catch (error) {
                setToken(null)
                localStorage.setItem("awesomeToken", null)
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
