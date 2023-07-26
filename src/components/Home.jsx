import React from "react";
import { Grid, GridItem, Link, Box, Text, Square, Image, Heading } from "@chakra-ui/react";


function Home() {
  return (
<Grid minHeight="100vh" width= "100%" templateColumns="2fr 1fr" templateRows="1fr 1fr" gap={0}>
      <GridItem rowSpan={2} colSpan={1} bg="#90CCF4" p={4} position= "relative" >
        <Box as={Link} href="/work" display="block" w="100%" h="100%" padding={0} margin={0}>
          <Square h = "100%">
            <Image src = {require("../resources/desk.png")} alt="DeskSetUp" w= "65vh" h= "65vh"/>
          </Square>
          <Box position="absolute" bottom={0} left={0} right={0} h="25%"  display="flex" textAlign = "left" flexDirection="column" paddingLeft="6%">
            <Heading fontSize={25}> WORK </Heading>
            <Box position="relative" bottom={-2} left={0} w="35px" h="4px" bg="#000000"/>
            <Text position={"relative"} top={5} fontSize={38}>
              A few projects I am proud of 
            <br/>For work, for school, and others just for fun</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1} bg="#F78888" p={4} position= "relative">
        <Box as={Link} href="/writing" display="block" w="100%" h="100%" paddingBottom= "10vh" margin={0}>
          <Square h="100%">
            <Image src = {require("../resources/pencil.png")} h= "35vh"/>
          </Square>
          <Box position="absolute" bottom={0} left={0} right={0} h="40%"  display="flex" flexDirection="column" textAlign="left" paddingLeft= "6%">
            <Heading fontSize={25}> WRITING </Heading>
            <Box position="relative" bottom={-2} left={0} w="35px" h="4px" bg="#000000"/>
              <Text position={"relative"} top={4} fontSize={25}>
                Collection of my technical writing,
              <br/>random thoughts, and developer logs </Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1} bg="#F3D250" p={4} position="relative">
      <Box as={Link} href="/about" display="block" w="100%" h="100%" padding={0} margin={0}>
      <Box position="absolute" bottom={0} left={0} right={0} h="40%" display="flex" flexDirection="column" textAlign="left" paddingLeft= "6%">
        <Heading fontSize={25}> ABOUT </Heading>
            <Box position="relative" bottom={-2} left={0} w= "35px" h="4px" bg="#000000"/>
            <Text position={"relative"} top={4} fontSize={25}>
             Learn a little about me
            <br/>and contact me</Text>
        </Box>
      </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;