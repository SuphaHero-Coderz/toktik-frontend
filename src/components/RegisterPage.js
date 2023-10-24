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

} from '@chakra-ui/react'
import { UserContext } from "./UserContext";

const RegisterPage = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [isSubmitting, setIsSubmitting] = useState(false);
    const [, setToken] = useContext(UserContext);
    
	
	const toast = useToast();
	const delay = (t, val) => new Promise(resolve => setTimeout(resolve, t, val));

	async function onFormSubmit(data) {
		setIsSubmitting(true);
		var token
		try {
			await axios.post(`http://localhost:80/api/users`, { username: data.username, hashed_password: data.password }).then((response) => {
				token = response.data["access_token"];
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
			console.log(error);
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
		<Flex height="100vh" align="center" justify="center" backgroundImage="/images/bg.gif" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
			<Container maxW={["50%", "50%", "25%"]} mt="10" p="10" shadow="dark-lg" rounded="xl" bg="#1C1C1C" color="white">
				<Heading mb="5">Register</Heading>
				<Divider mb="10" />
				<form onSubmit={handleSubmit(onFormSubmit)}>
					<FormControl isInvalid={errors.username || errors.password}>
								<FormLabel htmlFor="username" fontWeight="bold">Username</FormLabel>
								<Input id="username" type='text' {...register("username", { required: "Username is required!" })} />
								<FormErrorMessage>
									{errors.username && errors.username.message}
								</FormErrorMessage>
								<FormLabel mt="5" fontWeight="bold">Password</FormLabel>
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

export default RegisterPage;
