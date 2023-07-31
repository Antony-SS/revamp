import React from "react";
import { Grid, GridItem, Link, Box, Text, Square, Image, Heading } from "@chakra-ui/react";
import "./Shared/GridItem.css";

function Home() {
  return (
<Grid maxHeight = "100vh" minHeight="100vh" width= "100%" templateColumns="2fr 1fr" templateRows="1fr 1fr" gap={0}>
      <GridItem rowSpan={2} colSpan={1} bg="#90CCF4" p={4} position= "relative" className="grid-item">
        <Box as={Link} href="/work" display="block" w="100%" h="100%" padding={0} margin={0}>
          <Square h = "100%">
            <Image src = {require("../resources/deskfinal.png")} alt="DeskSetUp" w= "70vh" h= "70vh"/>
          </Square>
          <Box position="absolute" bottom={0} left={0} right={0} h="21%"  display="flex" textAlign = "left" flexDirection="column" paddingLeft="6%">
            <Heading fontSize={30}> WORK </Heading>
            <Box position="relative" bottom={-2} left={0} w="35px" h="4px" bg="#000000"/>
            <Text position={"relative"} top={5} fontSize={16}>
              A few projects I am proud of 
            <br/>for work, for school, and others just for fun</Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1} bg="#F78888" p={4} position= "relative" className="grid-item">
        <Box as={Link} href="/writing" display="block" w="100%" h="100%" paddingBottom= "10vh" margin={0}>
          <Square h="100%" padding={0}>
            <Image src = {require("../resources/pencil1.png")} h= "36vh"/>
          </Square>
          <Box position="absolute" bottom={0} left={0} right={0} h="32%"  display="flex" flexDirection="column" textAlign="left" paddingLeft= "6%">
            <Heading fontSize={30}> WRITING </Heading>
            <Box position="relative" bottom={-2} left={0} w="35px" h="4px" bg="#000000"/>
              <Text position={"relative"} top={4} fontSize={16}>
                Collection of my technical writing,
              <br/>random thoughts, and developer logs </Text>
          </Box>
        </Box>
      </GridItem>
      <GridItem colSpan={1} bg="#F3D250" p={4} position="relative" className="grid-item">
      <Box as={Link} href="/about" display="block" w="100%" h="100%" paddingBottom= "10vh" margin={0}>
        <Square h="100%">
            <Image src = {require("../resources/id.png")} h= "36vh"/>
        </Square>
      <Box position="absolute" bottom={0} left={0} right={0} h="32%" display="flex" flexDirection="column" textAlign="left" paddingLeft= "6%">
        <Heading fontSize={30}> ABOUT </Heading>
            <Box position="relative" bottom={-2} left={0} w= "35px" h="4px" bg="#000000"/>
            <Text position={"relative"} top={4} fontSize={16}>
             Learn a little about me
            <br/>and contact me</Text>
        </Box>
      </Box>
      </GridItem>
    </Grid>
  );
};

export default Home;