import { AspectRatio } from '@chakra-ui/react'
import { Square, Grid, GridItem } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Flex,  Stack, Heading, Text,  Card, Avatar ,  CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

function Vid() {
  return (
          <Grid templateColumns='repeat(6, 1fr)'>
                <GridItem colSpan={4} minHeight="100vh">
                    <AspectRatio minHeight="100vh">
                      <iframe
                        title='Rocky'
                        src='https://www.youtube.com/embed/_YYmfM2TfUA'
                        allowFullScreen
                      />
                    </AspectRatio>
                </GridItem>
                <GridItem colSpan={2}>
                    <Square>     
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
                    </Square>
                </GridItem>
          </Grid>
  );
}

export default Vid;
