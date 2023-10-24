import { AspectRatio } from '@chakra-ui/react'
import { Square, Grid, GridItem } from '@chakra-ui/react'
import { useLocation } from "react-router-dom"
import { Box } from '@chakra-ui/react'
import { Flex,  Heading, Text,  Card, Avatar ,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { VStack, Center, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './VideoPage.css'

function CommentAndVideoTaps() {
    return (
<Tabs isFitted>
          <TabList style={{ position: "sticky", top: "0" }} bg="white" mt='5px' mr='4'>
            <Tab>Comments</Tab>
          </TabList>
          <TabPanels>
            <TabPanel >
                <Box>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                      <Text>Creator, Chakra UI</Text>
                </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
    );
}

function UserCard(data) {
 return (
     <Square h="100%">
     <Card w = "100%" mt='10px' bg='#f8f8f8' mr='4'>
      <CardBody>
        <Flex spacing='4' mb="4">
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' />
            <Box>
              <Text>Username</Text>
              <Text>12/9/2023 -- 12:30pm</Text>
            </Box>
          </Flex>
        </Flex>
          <Heading size='sm'>
	 		Video Name
          </Heading>
          <Text>
	 		This is the description for the video.
          </Text>
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
	}, []);
    return (
		<AspectRatio>
		<Square>

		<ReactPlayer
			url={signedM3U8Url}
			controls={true}
			playing={true}
			width="100%"
			height="100%"
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
	const objectKey = location.state?.object_key;
  return (
          <Grid templateColumns='repeat(6, 1fr)' minHeight="100vh" minWidth="100vh" overflowY="hidden">
                <GridItem colSpan={4}>
                    <Video objectKey={objectKey}/>
                </GridItem>
                <GridItem colSpan={2} overflowY="scroll" maxHeight="100vh">
                    <VStack h='100%'>
                        <Box w="100%">
                            <UserCard />
                        </Box>
                        <Box w='100%'>
                            <CommentAndVideoTaps/>
                        </Box>
                    </VStack>
                </GridItem>
          </Grid>
  );
}

export default VideoPage;
