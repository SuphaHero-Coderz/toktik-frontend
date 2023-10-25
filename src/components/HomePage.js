import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Router } from "react-router-dom";
import axios from 'axios';
import NavBar from './NavBar';
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
	Progress
} from '@chakra-ui/react'

const VideoCard = ({ videoInfo }) => {
	return (
    <GridItem height="400px" colSpan={1} w="full">
	<Link to="/video" state={{object_key : videoInfo.object_key}}>
      <Box position="relative" overflow="hidden" height="400px">
        <Image src={videoInfo.video_thumbnail} alt="Video Thumbnail" height="100%" width="100%" objectFit="cover" />
        <Box position="absolute" bottom="0" left="0" right="0" p={4} bg="rgba(0, 0, 0, 0.7)" color="white">
          <Text fontWeight="bold" fontSize="lg">{videoInfo.video_name}</Text>
          <Text fontSize="sm">{videoInfo.video_description}</Text>
        </Box>
      </Box>
	</Link>
    </GridItem>
  );
}


const HomePage = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		try {
			axios.get('http://localhost:80/api/get_all_videos').then((response) => {
				setVideos(response.data);
			});
		} catch (error) {
			console.error(error);
		}
	}, []);

	const videoCards = []
	for (let i = 0; i < videos.length; i++) {
		videoCards.push(<VideoCard videoInfo={videos[i]} />);
	}

	return (
		<Flex height="100vh" backgroundImage="/images/bg.gif" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
		<Grid templateRows="repeat(2, 0.2fr)" w="full" mr="40">
			<GridItem w="full">
				<Container mt="100px" mx="20" p="10" shadow="dark-lg" rounded="xl" maxW="full" w="full" bg="#1C1C1C" color="white">
				  <Heading mb="5">
					All Videos
				  </Heading>
					<Divider mb="5" />
					<Grid maxW="full" templateColumns="repeat(5, 1fr)" gap={4}>
					{videoCards}
					</Grid>
				</Container>
			</GridItem>
		</Grid>
		</Flex>
	);
};

export default HomePage;
