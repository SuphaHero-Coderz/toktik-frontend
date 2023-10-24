
import React, { useEffect, useState } from 'react';
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
	return(
		<Tr>
			<Td>videoInfo.video_name</Td>
			<Td>videoInfo.video_description</Td>
			<Td>videoInfo.processed</Td>
		</Tr>
	);
}

const UserVideosPage = () => {
	const [token, _] = useState(localStorage.getItem("awesomeToken"))
	var tableRows = [];

	async function getAllUserVideos() {
		var videoList = [];
		try {
			const response = await axios.get(`http://localhost:80/api/videos`, { headers: { Authorization : 'Bearer ' + token }});
			videoList = response.data;
			console.log(response);
		} catch (error) {
			console.error("NOOOOOOOOOOOOOOOOOOOOOOO");
		}
		
		return videoList;
	}

	useEffect(() => {
		getAllUserVideos().then((videoList) => {
			tableRows = videoList;
		});

	}, []);

	return (
		<Flex height="100vh" maxW="full">
			<Container mt="100px" mx="20" maxW="full" w="full">
			  <Heading mb="5">
				My Videos
			  </Heading>
				<Divider mb="5" />
				<Container maxW="full">
		<TableContainer>
		  <Table variant='simple'>
			<Thead>
			  <Tr>
				<Th>Name</Th>
				<Th>Description</Th>
				<Th>Processing</Th>
			  </Tr>
			</Thead>
			<Tbody>
				{
				tableRows.map((video, index) => (
					<Tr key={index}>
						<Td>{video.video_name}</Td>
						<Td>{video.video_description}</Td>
						<Td>{video.processing}</Td>
					</Tr>
				))
				}
			</Tbody>
		  </Table>
		</TableContainer>
				</Container>
			</Container>
		</Flex>
	);
};

export default UserVideosPage;
