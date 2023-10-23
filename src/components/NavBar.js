import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Image, Text } from '@chakra-ui/react';
import './NavBar.css'

const NavBar = () => {

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
	  	<Link to="/">Home</Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
