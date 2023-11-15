import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Icon, Box, Flex, Spacer, Image, Text, Grid, GridItem, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from '@chakra-ui/react';
import './NavBar.css'
import LogoutButton from "./LogoutButton";
import {UserContext} from "./UserContext";
import { AiOutlineBell } from 'react-icons/ai'

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
	  	<Grid templateColumns="repeat(7, 1fr)" display="flex" verticalAlign="center" alignItems="center">
		<GridItem mr="8">
			{ token && <Menu placement='bottom'>
				<MenuButton mt="6px">
					<Icon as={AiOutlineBell} boxSize={5} color="white" verticalAlign="center"/> 
				</MenuButton>
				<MenuList bg="#1C1C1C">
					<MenuItem bg="#1C1C1C">Someone liked your video!</MenuItem>
				</MenuList>
			</Menu>
			}
		</GridItem>
	  	<GridItem mr="5">
	  	<Link to="/"><Text as='b'>Home</Text></Link>
	  	</GridItem>
	  	<GridItem mr="5">
	  	{token && <Link to="/upload"><Text as='b'>Upload</Text></Link> }
	  	</GridItem>
	  	<GridItem mr="5">
	  	{token && <Link to="/my-videos"><Text as='b'>My Videos</Text></Link> }
	  	</GridItem>
	  	<GridItem mr="5">
	  	{!token && <Link to="/login"><Text as='b'>Login</Text></Link>}
	  	</GridItem>
	  	<GridItem mr="5">
	  	{!token && <Link to="/register"><Text as='b'>Register</Text></Link>}
	  	</GridItem>
	  	<GridItem mr="5">
	  	<LogoutButton />
	  	</GridItem>
	  	</Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
