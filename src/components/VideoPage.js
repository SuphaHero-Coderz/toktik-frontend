import { AspectRatio } from '@chakra-ui/react'
import { Square, Grid, GridItem } from '@chakra-ui/react'
import { useLocation, useNavigate } from "react-router-dom"
import { Box } from '@chakra-ui/react'
import { Flex,  Heading, Text,  Card, Avatar ,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { VStack, Center, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Spacer, Link } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPage.css'

function CommentAndVideoTaps() {
    return (
<Tabs isFitted>
          <TabList style={{ position: "sticky", top: "0" }} bg="#1A1A1A" mt='5px' mr='4'>
            <Tab _selected={{bg: "1A1A1A" }}>Comments</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                <Box>
                      <Text>This is a comment, even though comments are not required to be implemented until Project 3.</Text>
                </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
    );
}

function UserCard(data) {
	const videoInfo = data.data;
	 return (
		 <Square h="100%" color="white">
		 <Card w = "100%" mt='10px' bg='#1A1A1A' mr='4' color="white" shadow="dark-lg">
		  <CardBody>
			<Flex spacing='4' mb="4">
			  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
				<Avatar name='Segun Adebayo' src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' />
				<Box>
				  <Text>Username</Text>
				  <Text>{videoInfo.uploaded_date}</Text>
				</Box>
			  </Flex>
			</Flex>
			  <Heading size='sm'>
				{videoInfo.video_name}
			  </Heading>
			  <Text>
				{videoInfo.video_description}
			  </Text>
			  <Text>Views: {videoInfo.views}</Text>
		  </CardBody>
		</Card>
		</Square>
	 );
}

function Video(data) {
	const [signedM3U8Url, setSignedM3U8Url] = useState(null);
	const [token, setToken] = useState(null);
	const objectKey = data.objectKey;
	useEffect(() => {
			try {
				axios.get(`http://localhost:80/view_video/${objectKey}`).then((response) => {
					setSignedM3U8Url(response.data.m3u8_url);
					setToken(response.data.token);
					console.log(response);
				});
			} catch (error) {
				console.log(error);
			}
	}, [objectKey]);
    return (
		<AspectRatio>
		<Square>

		<ReactPlayer
			url={signedM3U8Url}
			controls={true}
			playing={true}
			width="100%"
			height="100%"
			loop={true}
			style={{backgroundColor: '#1C1C1C'}}
			config={{
			  file: {
				hlsOptions: {
				  xhrSetup: function xhrSetup(xhr, url) {
					xhr.setRequestHeader(
					  "Access-Control-Allow-Headers",
					  "Content-Type, Accept, X-Requested-With"
					);
					xhr.setRequestHeader(
					  "Access-Control-Allow-Origin",
					  "*"
					);
					xhr.setRequestHeader(
					  "Access-Control-Allow-Credentials",
					  "true"
					);
					xhr.open('GET', url + token); // this is your token: ?Policy=foo&Key-Pair-Id=bar&Signature=foobar
				  }
				}
			  }
			}}
		  />
        </Square>
		</AspectRatio>
    );
}

function VideoPage() {
	const location = useLocation();
	const navigate = useNavigate();
	const videoInfo = location.state?.videoInfo;
	const videoIndex = location.state?.videoIndex;
	const objectKey = videoInfo.object_key;
	const videos = location.state?.videos;

	function nextVideo() {
		navigate('/video', { state: { videoInfo: videos[videoIndex+1], videoIndex : videoIndex+1, videos : videos }});
	}

	function previousVideo() {
		navigate('/video', { state: { videoInfo: videos[videoIndex-1], videoIndex : videoIndex-1, videos : videos }});
	}

	useEffect(() => {
			try {
				console.log(videoInfo);
				axios.get(`http://localhost:80/api/increment_video_views/${videoInfo.id}`);
			} catch (error) {
				console.log(error);
			}
	});

  return (
		<Flex height="100vh">
          <Grid templateColumns='repeat(20, 1fr)' h="100%" minWidth="100vh" overflowY="hidden">
                <GridItem colSpan={14}>
                    <Video objectKey={objectKey}/>
                </GridItem>
                <GridItem colSpan={1}>
	  				<VStack h="100%" bg="#1A1A1A" shadow="dark-lg" align="center" justify="center">
						<Box boxSize='20%' pt="40" align="center">
						<Link onClick={() => {navigate('/')}}>
						  <Image src='/images/close.png' alt='Dan Abramov' filter="invert(1)"/>
						</Link>
						</Box>
						<Box boxSize='20%' pt="40" align="center">
	  					{ videoIndex > 0 &&
							<Link onClick={previousVideo}>
						  <Image src='/images/uparrow.png' alt='Dan Abramov' filter="invert(1)"/>
							</Link>
						}
						</Box>
						<Spacer />
						<Box boxSize='20%' pb="40" align="center">
	  					{ ((videoIndex + 1) < videos.length) && 
	  					<Link onClick={nextVideo}>
						  <Image src='/images/uparrow.png' alt='Dan Abramov' transform="rotate(180deg)" filter="invert(1)"/>
	  					</Link>
						}
						</Box>
	  				</VStack>
                </GridItem>
                <GridItem colSpan={5} overflowY="scroll" bg="#1C1C1C" pl="5" color="white">
                    <VStack h='100%'>
                        <Box w="100%">
                            <UserCard data={videoInfo}/>
                        </Box>
                        <Box w='100%'>
                            <CommentAndVideoTaps/>
                        </Box>
                    </VStack>
                </GridItem>
          </Grid>
	  	</Flex>
  );
}

export default VideoPage;
