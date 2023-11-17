import socket from "./socket";
import axios from 'axios';
import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Icon, Box, Flex, Spacer, Image, Text, Grid, GridItem, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, } from '@chakra-ui/react';
import './NavBar.css'
import LogoutButton from "./LogoutButton";
import {UserContext} from "./UserContext";
import { AiOutlineBell } from 'react-icons/ai'
import { useState } from "react";

const NavBar = () => {
    
	const [token, setToken] = useContext(UserContext)
	const [notifications, setNotifications] = useState([]);
	const [newNotifications, setNewNotifications] = useState(false);

	function configureSocket(user_id, subscriptions) {
		socket.auth = { user_id: user_id, subscriptions: subscriptions };
        socket.connect()
		console.log(`The socket is: ${socket.connected}`);
	}

	useEffect(() => {
		if (token == "null" || token == null) return;
		try {
			axios.get(`http://localhost:80/api/get_socket_info`, {withCredentials: true}).then((response) => {
				const user_id = response.data.user_id;
				const subscriptions = response.data.subscriptions;
				configureSocket(user_id, subscriptions);
			}).catch(() => {})

			axios.get(`http://localhost:80/api/get_all_current_user_notifications`, {withCredentials: true}).then((response) => {
				const data = response.data;
				if (response.data.length > 0) {
					setNewNotifications(!data[0].read);
					setNotifications(data);
				}
			}).catch(() => {});

		} catch (error) {
			console.error(error);
		}
	}, [token, newNotifications]);

	socket.on("new_notification", (data) => {
		const parsed = JSON.parse(data);
		setNewNotifications(true);
		setNotifications([...notifications, parsed]);
	})
    

	function onMenuClose() {
		try {
			axios.get(`http://localhost:80/api/read_all_notifications`, {withCredentials: true});
			setNewNotifications(false);
			setNotifications(notifications.map(notification => ({ ...notification, read: true })));
		} catch (error) {
			console.error(error);
		}
	}
    

	return (
		<Box bgGradient='linear(to-l, #482980, #FF0080)' p={4} pos="fixed" w="100%" zIndex="dropdown">
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
							{token && <Menu placement='bottom' onClose={onMenuClose}>
								<MenuButton mt="6px">
									<Icon as={AiOutlineBell} boxSize={5} color={newNotifications ? "#FF0080" : "white"} verticalAlign="center" />
								</MenuButton>
								<MenuList bg="#1C1C1C" h="500px" overflowY="scroll">
									{ notifications.map((notification, idx) => ( <MenuItem bg="#1C1C1C" color={notification.read ? "white" : "#FF0080"}>{notification.description}</MenuItem> )) }
								</MenuList>
							</Menu>
							}
						</GridItem>
						<GridItem mr="5">
							<Link to="/"><Text as='b'>Home</Text></Link>
						</GridItem>
						<GridItem mr="5">
							{token && <Link to="/upload"><Text as='b'>Upload</Text></Link>}
						</GridItem>
						<GridItem mr="5">
							{token && <Link to="/my-videos"><Text as='b'>My Videos</Text></Link>}
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
