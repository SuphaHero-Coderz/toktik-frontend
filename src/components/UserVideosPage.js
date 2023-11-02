
import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "./UserContext";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
	Spacer,
	Flex,
	Button,
	VStack,
	Box,
	Grid,
	GridItem,
	Heading,
	Divider,
	Container,
	Input,
	FormControl,
	FormErrorMessage,
	FormLabel,
	FormHelperText,
	useToast,
	Image,
	Text,
	Progress,
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react'

const TableRow = ({ videoInfo }) => {
	function processingMessage(processed) {
		if (processed) {
			return "Uploaded";
		}
		return "Processing...";
	}
	return(
		<Tr>
			<Td>{videoInfo.video_name}</Td>
			<Td>{videoInfo.video_description}</Td>
			<Td>{processingMessage(videoInfo.processed)}</Td>
			<Td>
			<Button mr="5" colorScheme="yellow">Edit</Button>
			<Button colorScheme="red">Delete</Button>
			</Td>
		</Tr>
	);
}

const UserVideosPage = () => {
	const [token, _] = useContext(UserContext)
	const [userVideos, setUserVideos] = useState([]);

	async function getAllUserVideos() {
		var videoList = [];
		try {
			const response = await axios.get(`http://localhost:80/api/videos`, {withCredentials: true, headers: { Authorization : 'Bearer ' + token }});
			videoList = response.data;
		} catch (error) {
			console.error("NOOOOOOOOOOOOOOOOOOOOOOO");
		}
		
		return videoList;
	}

	useEffect(() => {
		getAllUserVideos().then((videoList) => {
			setUserVideos(videoList);
		});
	}, []);

	return (
		<Flex height="100vh" maxW="full" mr="20">
			<Container mt="100px" maxW="full" w="full" mx="10">
			  <Heading mb="5" mx="5">
				My Videos
			  </Heading>
				<Text mb="5" mx="5">In a perfect world, this would have nice design with working edit/delete. But this is not a perfect world.</Text>
				<Divider mb="5" mx="5"/>
				<Container maxW="full" shadow="md" mx="5">
				<TableContainer>
				  <Table variant='simple'>
					<Thead>
					  <Tr>
						<Th>Name</Th>
						<Th>Description</Th>
						<Th>Status</Th>
						<Th>Options</Th>
					  </Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td>Name</Td>
							<Td>Description</Td>
							<Td>In progress</Td>
							<Td>
							<Button mr="5" colorScheme="yellow">Edit</Button>
							<Button colorScheme="red">Delete</Button>
							</Td>
						</Tr>
					{userVideos.map((video) => (<TableRow videoInfo={video}/>) )}
					</Tbody>
				  </Table>
				</TableContainer>
				</Container>
			</Container>
		</Flex>
	);
};

export default UserVideosPage;
