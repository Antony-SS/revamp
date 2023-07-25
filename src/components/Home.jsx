import React from "react";
import { Grid, GridItem, Link, Box, Text, Image, Square } from "@chakra-ui/react";

function Home() {
  return (
<Grid h="100vh" templateColumns="2fr 1fr" templateRows="1fr 1fr" gap={0}>
      <GridItem rowSpan={2} colSpan={1} bg="#90CCF4" p={4}>
        <Box as={Link} href="/work" display="block" w="100%" h="100%" padding={0} margin={0}>
          <Square h = "100%">
            <Image>

            </Image>
          </Square>
          <Box position="absolute" bottom="22vh" left={4}>
              <Text fontSize="sm">Text 1</Text>
          </Box>
        </Box>
      </GridItem>
      {/* </Box> */}
      <GridItem colSpan={1} bg="#F78888" p={4}>
      <Box as={Link} href="/writing" display="block" w="100%" h="100%" padding={0} margin={0}>
        
        {/* content here */ }
      </Box>
        {/* Content for grid item 3 */}
      </GridItem>
      <GridItem colSpan={1} bg="#F3D250" p={4}>
      <Box as={Link} href="/about" display="block" w="100%" h="100%" padding={0} margin={0}>
        {/* content here */ }
      </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;