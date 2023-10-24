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
	<Link to="/video" state={{object_key : videoInfo.objectKey}}>
      <Box position="relative" overflow="hidden" height="400px">
        <Image src={videoInfo.thumbnailSrc} alt="Video Thumbnail" height="100%" width="100%" objectFit="cover" />
        <Box position="absolute" bottom="0" left="0" right="0" p={4} bg="rgba(0, 0, 0, 0.7)" color="white">
          <Text fontWeight="bold" fontSize="lg">{videoInfo.name}</Text>
          <Text fontSize="sm">{videoInfo.description}</Text>
        </Box>
      </Box>
	</Link>
    </GridItem>
  );
}


const HomePage = () => {
	const videoInfos = [
		{
			"name" : "Robert",
			"description" : "All hail Robert",
			"objectKey" : "1697962724921_uee3wj",
			"thumbnailSrc" : "https://media.licdn.com/dms/image/D5603AQGNQsD2WdlEeQ/profile-displayphoto-shrink_800_800/0/1691384473566?e=2147483647&v=beta&t=7awZ1cSkkVt_GvJxpCvGH3M2Hl_oFLYF_NCQpLgYJGE"
		}
	];
	const videoCards = []
	for (let i = 0; i < 5; i++) {
		videoCards.push(<VideoCard videoInfo={videoInfos[0]} />);
	}
	return (
		<Flex height="100vh" maxW="full">
		<Grid templateRows="repeat(2, 0.2fr)" w="full" mr="40">
			<GridItem w="full">
				<Container mt="100px" mx="20" maxW="full" w="full">
				  <Heading mb="5">
					Robert
				  </Heading>
					<Divider mb="5" />
					<Grid maxW="full" templateColumns="repeat(5, 1fr)" gap={4}>
					{videoCards}
					</Grid>
				</Container>
			</GridItem>
			<GridItem w="full">
				<Container mt="100px" mx="20" maxW="full" w="full">
				  <Heading mb="5">
					Also Robert
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
