import { AspectRatio } from '@chakra-ui/react'
import { Square, Grid, GridItem } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex,  Stack, Heading, Text,  Card, Avatar ,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { VStack, Center, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import './VideoPage.css'

function CommentAndVideoTaps() {
    return (
<Tabs isFitted>
          <TabList pos='relative' position="static">
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
     <Card w = "90%">
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
 );
}

function VideoPage() {
  return (
          <Grid templateColumns='repeat(6, 1fr)' minHeight="100vh" minWidth="100vh" overflowY="hidden">
                <GridItem colSpan={4}>
                    <Square h="100%">
                    <AspectRatio w="100%">
                      <iframe
                        title='Rocky'
                        src='https://www.youtube.com/embed/_YYmfM2TfUA'
                        allowFullScreen
                      />
                    </AspectRatio>
                    </Square>
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
