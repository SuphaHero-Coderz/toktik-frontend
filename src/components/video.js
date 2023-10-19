import { AspectRatio } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

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
          </Grid>
  );
}

export default Vid;