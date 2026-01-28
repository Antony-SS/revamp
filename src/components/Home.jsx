import React from "react";
import { ChakraProvider, Grid, GridItem, Link, Box, Text, Square, Image, Heading, VStack } from "@chakra-ui/react";
import Logo from "./Shared/Navbar/Logo";
import Contact from "./Shared/Navbar/Contact";
import "./Shared/GridItem.css";
import CreateTheme from "../ChakraStyles/CreateTheme";
import { useState } from "react";

function Home() {
  const theme = CreateTheme("white");

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
  <ChakraProvider theme = {theme}>
  <VStack width= "100%" margin={0} padding={0} alignItems={"flex-start"} position={{base: "absolute", md: "fixed"}}>
    {/* <Logo position = "fixed" left = {{base: 6, md: 10}} top= {{base: 2, md: 6}}/>
    <Contact position = "fixed" right = {12} top= {{base: "20px", md: "35px"}} setIsModalOpen={setIsModalOpen}/> */}
    <Grid height="100vh"  width= "100%" 
    templateColumns={{ base: "1fr", md: "2fr 1fr" }} 
    templateRows={{ base: "1fr", md: "1fr 1fr" }} 
    gap={0}
    position={"absolute"}
    zIndex={-1}
    >
    {/* <GridItem rowSpan={{base: 1, md: 2}} colSpan={1} bg="#90CCF4" p={4} position= "relative" className="grid-item" minHeight={{ base : "100vh", md: "100vh"}} padding={5}>
     */}
     <GridItem rowSpan={{base: 1, md: 2}} colSpan={1} bg="white" p={4} position= "relative" className="grid-item" minHeight={{ base : "100vh", md: "100vh"}} padding={5}>
      <Box as={Link} href="https://antony-blog.notion.site/projects-and-technical-writing" isExternal position={"relative"} zIndex={1000} display="block" w="100%" h="100%" padding={0} margin={0}>
        <Square h = "100%">
          <Image src = {require("../resources/calvin_hobbes_rock.png")} alt="DeskSetUp" h = {{base: "48vh" , md: "50vh" , lg: "70vh"}}/>
        </Square>
      <Box position="absolute" bottom={0} left={{base: "18%", md: 0}} right= {{base: "18%", md: 0}} h = {{base: "21%", md: "18%" }}  display="flex" textAlign = {{base: "center", md:"left"}}   flexDirection="column" alignItems={{ base: "center", md: "flex-start" }} paddingLeft= {{base: "0", md: "6%"}}>
        <Heading textColor={"Black"} fontSize={30}> WORK </Heading>
        <Box position="relative" bottom={-2} left= {0}  w= "35px" h="4px" bg="black"/>
        <Text textColor = "black" position={"relative"} top={5} fontSize={{base: 16, md: 14, lg: 16}}>
              Projects & technical writing 
            <br/>from school, work, and personal projects</Text>
        </Box>
      </Box>
    </GridItem>
    {/* <GridItem rowSpan={{base: 1, md: 1}} colSpan={1} bg="#F78888" p={4} position= "relative" className="grid-item" minHeight={{ base : "100vh", md: "auto"}}> */}
    <GridItem rowSpan={{base: 1, md: 1}} colSpan={1} bg="white" p={4} position= "relative" className="grid-item" minHeight={{ base : "100vh", md: "auto"}}>
      <Box as={Link} href="https://tonytigerz.substack.com/" isExternal display="block" w="100%" h="100%" paddingBottom= "10vh" margin={0}>
        <Square h="100%" padding={0}>
          <Image src = {require("../resources/calvin_hobbes_log.png")} h= {{base: "44vh", md: "24vh", lg: "32vh"}}/>
        </Square>
        <Box position="absolute" bottom={0} left={{base: "18%", md: 0}} right= {{base: "18%", md: 0}} h = {{base: "21%", md: "36%" }}  display="flex" textAlign = {{base: "center", md:"left"}}   flexDirection="column" alignItems={{ base: "center", md: "flex-start" }} paddingLeft= {{base: "0", md: "6%"}}>
          <Heading textColor = "black" fontSize={30}> WRITING </Heading>
          <Box position="relative" bottom={-2} left={0} w="35px" h="4px" bg="black"/>
            <Text position={"relative"} textColor= "black" top={4} fontSize={{base: 16, md: 14, lg: 16}}>
              An effort to 
            <br/>write more expressively</Text>
        </Box>
      </Box>
    </GridItem>
    {/* <GridItem rowSpan={{base: 1, md: 1}} colSpan={1} bg="#F3D250" p={4} position="relative" className="grid-item" minHeight={{ base : "100vh", md: "auto"}}> */}
    <GridItem rowSpan={{base: 1, md: 1}} colSpan={1} bg="white" p={4} position="relative" className="grid-item" minHeight={{ base : "100vh", md: "auto"}}>
      <Box as={Link} href="/about" display="block" w="100%" h="100%" paddingBottom= "10vh" margin={0}>
      <Square h="100%" >
        <Image src = {require("../resources/calvin.png")} h= {{base: "48vh", md: "28vh", lg: "36vh"}}/>
      </Square>
    <Box position="absolute" bottom={0} left={{base: "18%", md: 0}} right= {{base: "18%", md: 0}} h = {{base: "21%", md: "36%" }}  display="flex" textAlign = {{base: "center", md:"left"}}   flexDirection="column" alignItems={{ base: "center", md: "flex-start" }} paddingLeft= {{base: "0", md: "6%"}}>
      <Heading fontSize={30} textColor={"black"}> ABOUT </Heading>
      <Box position="relative" bottom={-2} left={0} w= "35px" h="4px" bg="black"/>
      <Text textColor = "black" position={"relative"} top={4} fontSize={{base: 16, md: 14, lg: 16}}>
        Learn a little about me
      <br/>and contact me</Text>
      </Box>
    </Box>
    </GridItem>
  </Grid>
</VStack>
</ChakraProvider>
  );
};

export default Home;