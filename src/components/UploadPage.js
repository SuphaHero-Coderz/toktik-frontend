import { React, useState } from 'react';
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
	useToast
} from '@chakra-ui/react'


const UploadPage = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [isUploading, setIsUploading] = useState(false);

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
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			console.error('Error uploading file:', error);
			toast({
				title: 'Failure',
				description: 'Failed to upload video.',
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		}

		setIsUploading(false);

		// Redirect back to home screen
		setTimeout(() => {
			window.location.href = '/';
		}, 3000);
	}

	/**
	 * Fetches presigned URL from backend and then initiates upload process
	 * 
	 * @param {*} data 
	 */
	function onFormSubmit(data) {
		setIsUploading(true);

		const file = data.videoFile[0];
		const randomFileName = generateRandomFileName();
		axios.get(`http://localhost:8000/generate_presigned_url/${randomFileName}`).then((response) => {
			const presignedUrl = response.data["presigned_url"];
			uploadToS3(file, presignedUrl);
		});
	}

	return (
		<Flex height="100vh" align="center" justify="center">
			<Container maxW="container.md" mt="10" p="10" shadow="md" rounded="md">
				<Heading mb="10">Upload File</Heading>
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
								<FormHelperText>Choose a cool name for your video!</FormHelperText>
								<FormLabel mt="5">Video Description</FormLabel>
								<Input type='text' {...register("videoDescription")} />
							</GridItem>
							<GridItem>
								<VStack align="center" justify="center" height="100%">
									<Box height="100%">
										<Input
											id="video-file"
											type="file"
											accept="video/*"
											height="100%"
											{...register("videoFile", { required: "Please upload a video!" })}
										/>
									</Box>
								</VStack>
								<FormErrorMessage>
									{errors.videoFile && errors.videoFile.message}
								</FormErrorMessage>
							</GridItem>
						</Grid>
						<Flex alignItems="right" mt="10">
							<Spacer />
							<Button type="submit" isLoading={isUploading} loadingText="Uploading" >Upload</Button>
						</Flex>
					</FormControl>
				</form>
			</Container>
		</Flex>
	);
};

export default UploadPage;