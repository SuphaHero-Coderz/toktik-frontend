import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react';
import './NavBar.css'
import LogoutButton from "./LogoutButton";
import {UserContext} from "./UserContext";

const NavBar = () => {
  const [token, setToken] = useContext(UserContext)
  return (
	  <Box bg="gray.200" p={4}>
      <Flex maxW="100%" width="100%" align="center">
        {/* Logo on the left */}
        <Box>
          <Image src="/images/toktik-logo.png" alt="Logo" width="auto" height="40px" />
        </Box>

        {/* Navigation items on the right */}
        <Spacer />
        <Box>
	  	{token && <Link to="/">Home</Link> }
	  	{token && <Link to="/upload">Upload</Link> }
	  	{token && <Link to="/">My Videos</Link> }
	  	{!token && <Link to="/login">Login</Link>}
	  	{!token && <Link to="/register">Register</Link>}
	  	<LogoutButton />
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
