import {AspectRatio, Button, FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react'
import { Square, Grid, GridItem } from '@chakra-ui/react'
import { Box, Icon } from '@chakra-ui/react'
import { Flex, Heading, Text, Card, Avatar, CardBody } from '@chakra-ui/react'
import { VStack, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Spacer, Link } from '@chakra-ui/react'
import socket from "./socket"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { AiOutlineHeart, AiFillHeart, AiOutlineEye } from 'react-icons/ai'
import { Textarea } from '@chakra-ui/react'
import {useForm} from "react-hook-form";
import {useNavigate,  Navigate, useLocation } from 'react-router-dom';


function PostCommentBlock(data) {
	const videoInfo = data.data
    const [isSubmit, setIsSubmit] = useState(false);
    const [isValid, setIsValid] = useState(false);
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	async function onFormSubmit(form_data) {
		await axios.post("http://localhost:80/api/comments"
			, {video_id: `${videoInfo.id}`, content: `${form_data.comment}`}
			,{withCredentials: true})
        setIsSubmit(true)
	}
    useEffect(() => {
        if(isSubmit){
            reset()
            setIsSubmit(false)
        }
    }
    , [isSubmit, reset]);
	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
					<FormControl>
                                <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                                    <GridItem colSpan={3}>
								        <Textarea id="comment"  {...register("comment", { required: "need to comment something" })}/>
                                    </GridItem>
                                    <GridItem colSpan={1}>
								        <Button type="submit" color="white" bg="#673AB7" >Submit</Button>
                                    </GridItem>
                                </Grid>
					</FormControl>
		</form>
	)
}
function CommentBlock(comment) {
	const [username, setUsername] = useState("")

	useEffect(() => {
		try {
			axios.get(`http://localhost:80/api/users/${comment.comment.user_id}`, {withCredentials: true}).then((response) => {
				setUsername(response.data.username);
			});
		} catch (error) {
			console.error(error);
		}
	}, []);
	return (
        <Box w='100%'m={2} >
			<Flex spacing='4' mb="4">
				<Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                        <GridItem colSpan={1}>
							<Avatar name='Segun Adebayo' src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' />
                        </GridItem>
                        <GridItem colSpan={3}>
						    <Box>
							    <Text>{username}</Text>
							    <Text>{comment.comment.content}</Text>
						    </Box>
                        </GridItem>
                    </Grid>
				</Flex>
			</Flex>
        </Box>
	)
}
function CommentAndVideoTaps(data) {
    const videoInfo = data.data
    const [comments, setComments] = useState([]);


  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

    useEffect(() => {

        // Define the handler.
        function onNewComment(data) {
            setComments(JSON.parse(data));
        }
        function onConnectError(err) {
      console.log(`connect_error due to ${err.message}`);
        }

        // Register the handler.
        socket.on("new comments", onNewComment);
        socket.on("connect_error", onConnectError);

        try {
            axios.get(`http://localhost:80/api/get_video_comments/${videoInfo.id}`, {withCredentials: true}).then((response) => {
                setComments(response.data);
            }).catch((error) => {
          console.log(error)
          return ;
      })
        } catch (error) {
            console.error(error);
        }

        return () => {
            socket.off("new comments", onNewComment);
            socket.off("connect_error", onConnectError);
        };
    }, [videoInfo]);

    const commentCards = []
    for (let i = 0; i < comments.length; i++) {
        commentCards.push(<CommentBlock id={i} comment={comments[i]} />);
    }
    return (
        <Tabs isFitted>
            <TabList style={{ position: "sticky", top: "0" }} bg="#1A1A1A" mt='5px' mr='4'>
                <Tab _selected={{ bg: "1A1A1A" }}>Comments</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Box>
                        <PostCommentBlock data={videoInfo} />
                        {commentCards}
                    </Box>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}

function UserCard(data) {
	const [username, setUsername] = useState("")
	const videoInfo = data.data;
	const [views, setViews] = useState(videoInfo.views)
	const [likes, setLikes] = useState(videoInfo.likes)
	const location = useLocation();
	useEffect(() => {
		try {
			axios.get(`http://localhost:80/api/users/${videoInfo.owner_id}`, {withCredentials: true}).then((response) => {
				setUsername(response.data.username);
			});
		} catch (error) {
			console.error(error);
		}
	}, [videoInfo]);
    useEffect(()=>{
        try{
            axios.get(`http://localhost:80/api/get_views/${videoInfo.id}`, {withCredentials: true})
                .then((response) => {
                    setViews(response.data)
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                    return ;
                })
        }
        catch(error){
            return;
        }
    }
        , [videoInfo]);

    useEffect(()=>{
        try{
            axios.get(`http://localhost:80/api/get_likes/${videoInfo.id}`, {withCredentials: true})
                .then((response) => {
                    setLikes(response.data)
                    console.log(response.data)
                }).catch((error) => {
                    console.log(error)
                    return ;
                })
        }
        catch(error){
            return;
        }
    }
        , []);
    
    const ping_views = setInterval(()=>{
        try{
            axios.get(`http://localhost:80/api/get_views/${videoInfo.id}`, {withCredentials: true})
                .then((response) => {
                    setViews(response.data)
                }).catch((error) => {
                    clearInterval(ping_views)
		            return ;
                })
        }
        catch(error){
            clearInterval(ping_views)
        }
        }
            , 5000);
    const ping_likes = setInterval(()=>{
        try{
            axios.get(`http://localhost:80/api/get_likes/${videoInfo.id}`, {withCredentials: true})
                .then((response) => {
                    setLikes(response.data)
                }).catch((error) => {
                    console.log(error)
                    clearInterval(ping_likes)
		            return ;
                })
        }
        catch(error){
            clearInterval(ping_likes)
        }
        }
            , 5000);
            
	 return (
		 <Square h="100%" color="white">
		 <Card w = "100%" mt='10px' bg='#1A1A1A' mr='4' color="white" shadow="dark-lg">
		  <CardBody>
			<Flex spacing='4' mb="4">
			  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
				<Avatar name='Segun Adebayo' src='https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg' />
				<Box>
				  <Text>{username}</Text>
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
			  <Text>Views: {views}</Text>
			  <Text>Likes: {likes}</Text>
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
			axios.get(`http://localhost:80/api/view_video/${objectKey}`, { withCredentials: true }).then((response) => {
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
					style={{ backgroundColor: '#1C1C1C' }}
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
	const [liked, setLiked] = useState(false);
	async function handleVideoLike() {

		if (liked) {
			setLiked(false);
		}
		else {
			setLiked(true);
		}
		try {
			await axios.get(`http://localhost:80/api/process_video_like/${videoInfo.id}`, { withCredentials: true });
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		try {
			axios.get(`http://localhost:80/api/increment_video_views/${videoInfo.id}`);
			axios.get(`http://localhost:80/api/get_liked_status/${videoInfo.id}`, { withCredentials: true }).then((response) => {
				setLiked(response.data.liked);
			}).catch((error) => {
                    console.log(error)
		            return ;
            })
 ;
		} catch (error) {
			console.log(error);
		}
	}, [objectKey]);

	function nextVideo() {
		navigate('/video', { state: { videoInfo: videos[videoIndex + 1], videoIndex: videoIndex + 1, videos: videos } });
	}

	function previousVideo() {
		navigate('/video', { state: { videoInfo: videos[videoIndex - 1], videoIndex: videoIndex - 1, videos: videos } });
	}
	return (
		<Flex height="100vh">
			<Grid templateColumns='repeat(20, 1fr)' h="100%" minWidth="100vh" overflowY="hidden">
				<GridItem colSpan={14}>
					<Video objectKey={objectKey} />
				</GridItem>
				<GridItem colSpan={1}>
					<VStack h="100%" bg="#1A1A1A" shadow="dark-lg" align="center" justify="center">
						<Box boxSize='20%' pt="40" align="center">
							<Link onClick={() => { navigate('/') }}>
								<Image src='/images/close.png' alt='Dan Abramov' filter="invert(1)" />
							</Link>
						</Box>
						<Box boxSize='20%' pt="40" align="center">
							{videoIndex > 0 &&
								<Link onClick={previousVideo}>
									<Image src='/images/uparrow.png' alt='Dan Abramov' filter="invert(1)" />
								</Link>
							}
						</Box>
						<Spacer />
						<Box boxSize='20%' pt="20" align="center">
								<Link onClick={handleVideoLike}>
									{ liked ? <Icon as={AiFillHeart} boxSize={8} color="white"/> : <Icon as={AiOutlineHeart} boxSize={8} color="white"/> }
								</Link>
						</Box>
						<Spacer />
						<Box boxSize='20%' pb="40" align="center">
							{((videoIndex + 1) < videos.length) &&
								<Link onClick={nextVideo}>
									<Image src='/images/uparrow.png' alt='Dan Abramov' transform="rotate(180deg)" filter="invert(1)" />
								</Link>
							}
						</Box>
					</VStack>
				</GridItem>
				<GridItem colSpan={5} overflowY="scroll" bg="#1C1C1C" pl="5" color="white">
					<VStack h='100%'>
						<Box w="100%">
							<UserCard data={videoInfo} />
						</Box>
						<Box w='100%'>
							<CommentAndVideoTaps data={videoInfo}/>
						</Box>
					</VStack>
				</GridItem>
			</Grid>
		</Flex>
	);
}

export default VideoPage;
