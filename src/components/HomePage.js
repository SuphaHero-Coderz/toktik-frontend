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
	Icon,
    VStack,
    StackDivider,
    Center
} from '@chakra-ui/react'
import { AiOutlineHeart, AiOutlineEye } from 'react-icons/ai'

const VideoCard = ({ videoInfo, videos, index }) => {
	return (
				<GridItem w="full">
				<Box borderRadius="md" mt="20px" maxWidth="280px" maxHeight="580px" minHeight="480px" overflow="hidden">
			        <Link to="/video" state={{ videoInfo: videoInfo, videoIndex: index, videos: videos }}>
					    <Image src={videoInfo.video_thumbnail} alt="Video Thumbnail" height="480px" width="280px" objectFit="cover"/>
					        <Box p={4} bg="rgba(0, 0, 0, 0.7)" color="white">
						        <Text fontWeight="bold" fontSize="lg">{videoInfo.video_name}</Text>
						            { videoInfo.video_description.length > 0 ? <Text fontSize="sm">{videoInfo.video_description}</Text> : <Text fontSize="sm">&nbsp;</Text> }
						        <Text display="flex" verticalAlign="center" alignItems="center"><Icon as={AiOutlineEye} color="white" mr="1"/> {videoInfo.views} <Icon as={AiOutlineHeart} color="white" ml="2" mr="1" /> {videoInfo.likes}</Text>
					        </Box>
			        </Link>
				</Box>
                </ GridItem>
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
        <Center minWidth="100%" mt="100px">
            <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={4}
            align='stretch'
        >
							{videoCards}
            </VStack>
        </Center>
		</Flex>
	);
};

export default HomePage;
