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
          <TabList style={{ position: "sticky", top: "0" }} bg="white" mt='5px'>
            <Tab>Comments</Tab>
            <Tab>Videos</Tab>
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
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
    );
}

function UserCard() {
 return (
     <Square h="100%">
     <Card w = "90%" mt='10px' bg='#f8f8f8'>
      <CardBody>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
            <Box>
              <Heading size='sm'>Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
        </Flex>
          <Text>
                Kiss me on my hot mouse.
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
				axios.get(`http://localhost:8000/view_video/${objectKey}`).then((response) => {
					setSignedM3U8Url(response.data.m3u8_url);
					setToken(response.data.token);
					console.log(response);
				});
			} catch (error) {
				console.log(error);
			}
	}, []);
    return (
        <Square h="100%" bg="black">
            <AspectRatio w="100%">
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
            </AspectRatio>
        </Square>
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
