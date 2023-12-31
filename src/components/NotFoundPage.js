
import React from 'react';
import {
	Flex,
	Heading,
	Grid,
	GridItem,
} from '@chakra-ui/react';
const NotFoundPage = () => {
	return (
		<Flex height="100vh" align="center" justify="center" backgroundImage="/images/bg.gif" backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
			<Grid templateRows="repeat(2, 1fr)" align="center" gap={5}>
				<GridItem>
					<Heading color="white" fontSize="9em" textShadow="2px 0px 2px #FF0080">404</Heading>
				</GridItem>
				<GridItem>
					<Heading color="white" fontSize="4em" textShadow="2px 0px 2px #FF0080">Page Not Found</Heading>
				</GridItem>
			</Grid>
		</Flex>
	)
}

export default NotFoundPage;
