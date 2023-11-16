import socket from "./socket";
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
	Flex,
	Container,
	Heading,
	Divider,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Grid,
	GridItem,
	useToast

} from '@chakra-ui/react';

const LoginPage = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);
	
	const toast = useToast();


	async function onFormSubmit(form_data) {
		setIsSubmitting(true);
		try {
			let data = JSON.stringify(`grant_type=&username=${form_data.username}&password=${form_data.password}&scope=&client_id=&client_secret=`);

			let config = {
			  method: 'post',
				withCredentials: true,
			  url: 'http://localhost:80/api/token',
			  headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			  },
			  data : data
			};

			await axios.request(config);
			toast({
				title: 'Success',
				description: 'Login successful',
				status: 'success',
				duration: 1000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: 'Failure',
				description: `Failed to login: {error}`,
				status: 'error',
				duration: 1000,
				isClosable: true,
			});
		}

		setIsSubmitting(false);
		setTimeout(() => {
			window.location.href = '/';
		}, 1000);
	}

	return (
		<Flex height="100vh" align="center" justify="center" backgroundImage="/images/bg.gif" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
			<Container maxW={["50%", "50%", "25%"]} mt="10" p="10" shadow="dark-lg" rounded="xl" bg="#1C1C1C" color="white">
				<Heading mb="5">Login</Heading>
				<Divider mb="10" />
				<form onSubmit={handleSubmit(onFormSubmit)}>
					<FormControl isInvalid={errors.username || errors.password}>
								<FormLabel htmlFor="username">Username</FormLabel>
								<Input id="username" type='text' {...register("username", { required: "Username is required!" })} />
								<FormErrorMessage>
									{errors.username && errors.username.message}
								</FormErrorMessage>
								<FormLabel mt="5">Password</FormLabel>
								<Input type='password' {...register("password", { required: "Password is required!" })} />
								<FormErrorMessage>
									{errors.password && errors.password.message}
								</FormErrorMessage>
							<Grid mt="10">
								<GridItem justify="flex-end" align="right">
								<Button type="submit" color="white" bg="#673AB7" isLoading={isSubmitting} loadingText="Loading">Submit</Button>	
								</GridItem>
							</Grid>
					</FormControl>
				</form>
			</Container>
		</Flex>
	)
}

export default LoginPage;
