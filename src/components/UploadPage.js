import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
	Center,
	Button,
	VStack,
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
	Flex,
	Progress
} from '@chakra-ui/react'


const UploadPage = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [isUploading, setIsUploading] = useState(false);
	const [token, _] = useState(localStorage.getItem("awesomeToken"))

	// For little popups at the bottom of the screen
	const toast = useToast();

	/**
	 * Returns a random filename 
	 * 
	 * @returns random filename in the form of a `timestamp_randomstring`
	 */
	const generateRandomFileName = () => {
		const timestamp = new Date().getTime();
		const randomString = Math.random().toString(36).substring(7);
		return `${timestamp}_${randomString}`;
	};

	async function generatePresignedUrl(objectKey) {
		var presignedUrl;

		try {
			await axios.get(`http://localhost:80/api/generate_presigned_url/${objectKey}`).then((response) => {
				presignedUrl = response.data["presigned_url"];
			});
		} catch (error) {
			toast({
				title: 'Failure',
				description: 'Failed to fetch presigned URL.',
				status: 'error',
				duration: 1000,
				isClosable: true,
			});
		}

		return presignedUrl;
	}

	/**
	 * Uploads a file object to S3 given a presigned URL
	 * 
	 * @param {File} file 
	 * @param {string} presignedUrl 
	 */
	async function uploadToS3(file, presignedUrl) {
		try {
			await axios.put(presignedUrl, file, {
				headers: {
					'Content-Type': 'video/*',
				},
				timeout: (30 * 60 * 1000),
			});
			toast({
				title: 'Success',
				description: 'Video uploaded successfully.',
				status: 'success',
				duration: 1000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: 'Failure',
				description: 'Failed to upload video.',
				status: 'error',
				duration: 1000,
				isClosable: true,
			});
		}
	}

	async function notifyBackendOfUploadSuccess(videoInfo) {
		await axios.post("http://localhost:80/api/process_video/", videoInfo, {withCredentials: true, headers : { Authorization: 'Bearer ' + token }});
	}

	/**
	 * Fetches presigned URL from backend and then initiates upload process
	 * 
	 * @param {*} data 
	 */
	async function onFormSubmit(data) {
		const objectKey = generateRandomFileName();
		const presignedUrl = await generatePresignedUrl(objectKey);
		const file = data.videoFile[0];

		const videoInfo = {
			"object_key" : objectKey,
			"video_name" : data.videoName,
			"video_description" : data.videoDescription,
		}

		setIsUploading(true);
		await uploadToS3(file, presignedUrl);
		setIsUploading(false);

		console.log(videoInfo);
		const response = await notifyBackendOfUploadSuccess(videoInfo);
		console.log(response);

		// Redirect back to home screen
		setTimeout(() => {
			window.location.href = '/';
		}, 1000);
	}

	return (
		<Flex height="100vh" align="center" justify="center" backgroundImage="/images/bg.gif" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
			<Container maxW="container.md" mt="10" p="10" shadow="dark-lg" rounded="xl" bg="#1C1C1C" color="white">
				<Heading mb="10">Upload Video</Heading>
				<Divider mb="10" />
				<form onSubmit={handleSubmit(onFormSubmit)}>
					<FormControl isInvalid={errors.videoName || errors.videoFile}>
						<Grid templateColumns='repeat(2, 1fr)' gap={10}>
							<GridItem>
								<FormLabel htmlFor="video-name">Video Name</FormLabel>
								<Input id="video-name" type='text' {...register("videoName", { required: "Video name is required!" })} />
								<FormErrorMessage>
									{errors.videoName && errors.videoName.message}
								</FormErrorMessage>
								<FormHelperText color="gray.100">Choose a cool name for your video!</FormHelperText>
								<FormLabel mt="5">Video Description</FormLabel>
								<Input type='text' {...register("videoDescription")} />
							</GridItem>
							<GridItem>
								<VStack align="center" justify="center" height="100%">
									<Flex height="100%" border="1px" borderColor="white" borderStyle="dashed" rounded="md" align="center" justify="center">
									<Center w="100%">
										<Input
											id="video-file" lineHeight="12" mx="5.5em" style={{ border: 'none' }}
											type="file"
											accept="video/*"
											width="100%"
											height="100%"
											{...register("videoFile", { required: "Please upload a video!" })}
										/>
									</Center>
									</Flex>
								</VStack>
								<FormErrorMessage>
									{errors.videoFile && errors.videoFile.message}
								</FormErrorMessage>
							</GridItem>
						</Grid>
						<Grid templateColumns='repeat(2, 1fr)' gap={10} mt="10">
							<GridItem pt="5">
							{ isUploading && <Progress size='xs' isIndeterminate /> }
							</GridItem>
							<GridItem justify="flex-end" align="right">
							<Button type="submit" bg="#673AB7" color="white" isLoading={isUploading} loadingText="Uploading" >Upload</Button>
							</GridItem>
						</Grid>
					</FormControl>
				</form>
			</Container>
		</Flex>
	);
};

export default UploadPage;
