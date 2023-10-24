import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {
  useDisclosure,
	Flex,
	Container,
	Heading,
	Divider,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	FormHelpText,
	Box,
	VStack,
	Input,
	FormHelperText,
	Grid,
	GridItem,
	useToast

} from '@chakra-ui/react';
import {UserContext} from "./UserContext";

const LoginPage = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [, setToken] = useContext(UserContext);
	
	const toast = useToast();
	const delay = (t, val) => new Promise(resolve => setTimeout(resolve, t, val));

	async function onFormSubmit(form_data) {
		setIsSubmitting(true);
		var token
		try {
			let data = JSON.stringify(`grant_type=&username=${form_data.username}&password=${form_data.password}&scope=&client_id=&client_secret=`);

			let config = {
			  method: 'post',
			  url: 'http://localhost:80/api/token',
			  headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			  },
			  data : data
			};

			await axios.request(config).then((response) => {
				token = response.data["access_token"];
				console.log(response);
			});
			setToken(token);
			await delay(3000);
			toast({
				title: 'Success',
				description: 'Login successful',
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
		} catch (error) {
			toast({
				title: 'Failure',
				description: `Failed to login: {error}`,
				status: 'error',
				duration: 3000,
				isClosable: true,
			});
		}
		setIsSubmitting(false);
		setTimeout(() => {
			window.location.href = '/';
		}, 3000);
	}

	return (
		<Flex height="100vh" align="center" justify="center">
			<Container maxW="container.sm" mt="10" p="10" shadow="md" rounded="md">
				<Heading mb="10">Login</Heading>
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
								<Button type="submit" color="white" bg="green.400" isLoading={isSubmitting} loadingText="Loading">Submit</Button>	
								</GridItem>
							</Grid>
					</FormControl>
				</form>
			</Container>
		</Flex>
	)
}

export default LoginPage;
