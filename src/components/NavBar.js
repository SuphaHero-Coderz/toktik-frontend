import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Spacer, Image, Text, Grid, GridItem } from '@chakra-ui/react';
import './NavBar.css'
import LogoutButton from "./LogoutButton";
import {UserContext} from "./UserContext";

const NavBar = () => {
  const [token, setToken] = useContext(UserContext)
  return (
	  <Box bgGradient='linear(to-l, #482980, #FF0080)' p={4} pos="fixed" w="100%">
      <Flex maxW="100%" width="100%" align="center">
        {/* Logo on the left */}
        <Box>
          <Link to="/">
			  <Image src="/images/toktik-logo.png" alt="Logo" width="auto" height="40px" />
	  	  </Link>
        </Box>

        {/* Navigation items on the right */}
        <Spacer />
        <Box color="white">
	  	<Grid templateColumns="repeat(6, 1fr)">
	  	<GridItem>
	  	<Link to="/"><Text as='b'>Home</Text></Link>
	  	</GridItem>
	  	<GridItem>
	  	{token && <Link to="/upload"><Text as='b'>Upload</Text></Link> }
	  	</GridItem>
	  	<GridItem>
	  	{token && <Link to="/my-videos"><Text as='b'>My Videos</Text></Link> }
	  	</GridItem>
	  	<GridItem>
	  	{!token && <Link to="/login"><Text as='b'>Login</Text></Link>}
	  	</GridItem>
	  	<GridItem>
	  	{!token && <Link to="/register"><Text as='b'>Register</Text></Link>}
	  	</GridItem>
	  	<GridItem>
	  	<LogoutButton />
	  	</GridItem>
	  	</Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
