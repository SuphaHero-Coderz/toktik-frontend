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

	useEffect(() => {
		try {
			axios.get(`http://localhost:80/api/get_all_notifications`, {withCredentials: true}).then((response) => {
				const data = response.data;
				if (response.data.length > 0) {
					setNewNotifications(!data[0].read);
					setNotifications(data);
				}
			});
		} catch (error) {
			console.error(error);
		}
	}, [newNotifications]);

	socket.on("new_notification", (data) => {
		const parsed = JSON.parse(data);
		setNewNotifications(!parsed[0].read);
		setNotifications(parsed);
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
							{token && <Menu placement='bottom' onClose={onMenuClose}>
								<MenuButton mt="6px">
									<Icon as={AiOutlineBell} boxSize={5} color={newNotifications ? "#FF0080" : "white"} verticalAlign="center" />
								</MenuButton>
								<MenuList bg="#1C1C1C">
									{ notifications.map((notification, idx) => ( <MenuItem bg="#1C1C1C" color={notification.read ? "white" : "#FF0080"}>{notification.description}</MenuItem> )) };
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
