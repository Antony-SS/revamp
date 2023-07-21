import React from "react";
import { Grid, GridItem, Link, Box, Text, Square, Image, border } from "@chakra-ui/react";


function Home() {
  return (
<Grid h="100vh" width= "100%" templateColumns="2fr 1fr" templateRows="1fr 1fr" gap={0}>
      <GridItem rowSpan={2} colSpan={1} bg="#90CCF4" p={4} position= "relative" >
        <Box as={Link} href="/work" display="block" w="100%" h="100%" padding={0} margin={0}>
          <Square h = "100%">
            <Image src = {require("../resources/desk.png")} alt="DeskSetUp" w= "65vh" h= "65vh"/>
          </Square>
          <Box position="absolute" bottom={0} left={0} right={0} h="25%" bg="rgba(255, 255, 255, 0.7)" display="flex" alignItems="center" justifyContent="center" flexDirection="column" textAlign="center">
            <Text>Text or Content for the bottom fourth</Text>
          </Box>
        </Box>
      </GridItem>
      {/* </Box> */}
      <GridItem colSpan={1} bg="#F78888" p={4} position= "relative">
      <Box as={Link} href="/writing" display="block" w="100%" h="100%" padding={0} margin={0}>
        
        <Box position="absolute" bottom={0} left={0} right={0} h="25%" bg="rgba(255, 255, 255, 0.7)" display="flex" alignItems="center" justifyContent="center" flexDirection="column" textAlign="center">
              <Text>Text or Content for the bottom fourth</Text>
        </Box>
        
      </Box>
        {/* Content for grid item 3 */}
      </GridItem>
      <GridItem colSpan={1} bg="#F3D250" p={4} position="relative">
      <Box as={Link} href="/about" display="block" w="100%" h="100%" padding={0} margin={0}>
        <Box position="absolute" bottom={0} left={0} right={0} h="25%" bg="rgba(255, 255, 255, 0.7)" display="flex" alignItems="center" justifyContent="center" flexDirection="column" textAlign="center">
                <Text>Text or Content for the bottom fourth</Text>
        </Box>
      </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;