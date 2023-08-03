import React from "react";
import { Grid, GridItem, Link, Box, Text, Square, Image, Heading, Container, VStack } from "@chakra-ui/react";
import Logo from "./Shared/Navbar/Logo";
import Contact from "./Shared/Navbar/Contact";
import "./Shared/GridItem.css";

function Home() {
  return (
  <VStack width= "100%" height= "100%" margin={0} padding={0} alignItems={"flex-start"}>
    <Logo position = "fixed" left = {10} top = {6}/>
    <Contact position = "fixed" right = {12} top={8}/>
    <Grid minHeight="100vh" width= "100%" 
    templateColumns={{ base: "1fr", md: "2fr 1fr" }} 
    templateRows={{ base: "1fr", md: "1fr 1fr" }} 
    gap={0}
    position={"absolute"}
    zIndex={-1}
    >
    <GridItem rowSpan={{base: 1, md: 2}} colSpan={1} bg="#90CCF4" p={4} position= "relative" className="grid-item" minHeight={{ base : "100vh", md: "auto"}} padding={5}>
      <Box as={Link} href="/work" position={"relative"} zIndex={1000} display="block" w="100%" h="100%" padding={0} margin={0}>
        <Square h = "100%">
          <Image src = {require("../resources/deskfinal.png")} alt="DeskSetUp" h = {{base: "48vh" , md: "50vh" , lg: "70vh"}}/>
        </Square>
      <Box position="absolute" bottom={0} left={0} right={0} h = {{base: "21%", md: "18%" }}  display="flex" textAlign = "left" flexDirection="column" paddingLeft="6%">
        <Heading textColor={"white"} fontSize={30}> WORK </Heading>
        <Box position="relative" bottom={-2} left={0} w="35px" h="4px" bg="white"/>
        <Text textColor = "white" position={"relative"} top={5} fontSize={{base: 16, md: 14, lg: 16}}>
              A few projects I am proud of 
            <br/>for work, for school, and others just for fun</Text>
        </Box>
      </Box>
    </GridItem>
    <GridItem rowSpan={{base: 1, md: 1}} colSpan={1} bg="#F78888" p={4} position= "relative" className="grid-item" minHeight={{ base : "100vh", md: "auto"}}>
      <Box as={Link} href="/writing" display="block" w="100%" h="100%" paddingBottom= "10vh" margin={0}>
        <Square h="100%" padding={0}>
          <Image src = {require("../resources/pencil1.png")} h= {{base: "48vh", md: "28vh", lg: "36vh"}}/>
        </Square>
        <Box position="absolute" bottom={0} left={0} right={0} h= {{base: "21%" , md: "36%"}}  display="flex" flexDirection="column" textAlign="left" paddingLeft= "6%">
          <Heading textColor = "white" fontSize={30}> WRITING </Heading>
          <Box position="relative" bottom={-2} left={0} w="35px" h="4px" bg="white"/>
            <Text position={"relative"} textColor= "white" top={4} fontSize={{base: 16, md: 14, lg: 16}}>
              Collection of my technical writing,
            <br/>random thoughts, and developer logs </Text>
        </Box>
      </Box>
    </GridItem>
    <GridItem rowSpan={{base: 1, md: 1}} colSpan={1} bg="#F3D250" p={4} position="relative" className="grid-item" minHeight={{ base : "100vh", md: "auto"}}>
    <Box as={Link} href="/about" display="block" w="100%" h="100%" paddingBottom= "10vh" margin={0}>
      <Square h="100%">
        <Image src = {require("../resources/id.png")} h= {{base: "48vh", md: "28vh", lg: "36vh"}}/>
      </Square>
    <Box position="absolute" bottom={0} left={0} right={0}  h= {{base: "21%" , md: "36%"}} display="flex" flexDirection="column" textAlign="left" paddingLeft= "6%">
      <Heading fontSize={30} textColor={"white"}> ABOUT </Heading>
      <Box position="relative" bottom={-2} left={0} w= "35px" h="4px" bg="white"/>
      <Text textColor = "white" position={"relative"} top={4} fontSize={{base: 16, md: 14, lg: 16}}>
        Learn a little about me
      <br/>and contact me</Text>
      </Box>
    </Box>
    </GridItem>
  </Grid>
</VStack>
  );
};

export default Home;