import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {
	Flex,
	Box,
	Grid,
	GridItem,
	Heading,
	Divider,
	Container,
	Image,
	Text,
	Icon
} from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'

const VideoCard = ({ videoInfo, videos, index }) => {
	return (
		<GridItem height="400px" colSpan={1} w="full">
			<Link to="/video" state={{ videoInfo: videoInfo, videoIndex: index, videos: videos }}>
				<Box position="relative" overflow="hidden" height="400px">
					<Image src={videoInfo.video_thumbnail} alt="Video Thumbnail" height="100%" width="100%" objectFit="cover" />
					<Box position="absolute" bottom="0" left="0" right="0" p={4} bg="rgba(0, 0, 0, 0.7)" color="white">
						<Text fontWeight="bold" fontSize="lg">{videoInfo.video_name}</Text>
						{ videoInfo.video_description.length > 0 ? <Text fontSize="sm">{videoInfo.video_description}</Text> : <Text fontSize="sm">&nbsp;</Text> }
						<Text display="flex" verticalAlign="center" alignItems="center"><Icon as={AiOutlineEye} color="white" mr="1"/> {videoInfo.views} <Icon as={AiOutlineHeart} color="white" ml="2" mr="1" /> {videoInfo.likes}</Text>
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
		videoCards.push(<VideoCard videoInfo={videos[i]} videos={videos} index={i} />);
	}

	return (
		<Flex minH="100vh" backgroundImage="/images/bg.gif" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
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
