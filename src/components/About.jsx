import React from "react";
import { Container, ChakraProvider, Stack, Box, Image, Text, Link, HStack } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme"
import Navbar from "./Shared/Navbar/Navbar";
import { useState } from "react";
import Footer from "./Shared/Footer";

function About() {
  // const theme = CreateTheme("#F3D250");
  const theme = CreateTheme("white");
  const [, setIsModalOpen] = useState(false);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <ChakraProvider theme={theme}>
    <Box minH="100vh" display="flex" flexDir="column">
    <Navbar backgroundColor={"white"} setIsModalOpen={setIsModalOpen}/>
    <Box flex="1" mt="15vh">
    <Stack direction={"column"} flex="1" width= "100%" margin={0} padding={0} alignItems={"center"}>
      <Stack direction={{base: "column", md: "row"}} alignItems={{base: "center", md: "left"}}>
        <Image margin={5} src = {require("../resources/profile1.png")} boxSize={{base: "325px", md: "400px"}} alt='Picture of me with a robot at a corn field in India!' borderRadius={20} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)" />
        <Container width={{base: "90%", md: "100%"}}>
          <Stack direction={"column"}>
            <Text fontSize={{base: 24, md: 24, lg: 28}} fontWeight={400} textAlign={{base: "center", md: "left"}}>
              Hi, I'm Antony!
            </Text>
            <Text fontSize={{base: 14, md: 16}}>
              A few things about me: Studied Computer Science at UIUC.  Discovered robotics my final year of undergrad and haven't looked back.  
              <br/><br/>
              Spent some time doing computer vision at an <Link textColor={"blue"} textDecoration="underline" href="https://www.earthsense.co/" isExternal>agrobotics startup</Link>, 
              gained an appreciation for corn.  Realized I didn't have the mathematical foundations to build SLAM systems from scratch, returned to school.
              <br/><br/>
              Now at Georgia Tech, focusing on perception and localization for mobile robots.  Involved at the <Link textColor={"blue"} textDecoration="underline" href="https://www.robotarium.gatech.edu/" isExternal>robotarium</Link>.
              <br/><br/>
              I document my projects and technical writing <Link textColor={"blue"} textDecoration="underline" href="https://antony-blog.notion.site/projects-and-technical-writing" isExternal>here</Link>.  Would like to start writing more narratively on my <Link textColor={"blue"} textDecoration="underline" href="https://tonytigerz.substack.com/" isExternal>blog</Link>.
            </Text>
            <Box width={"100%"} marginTop={3}>
              {/* <Box width={{base: "95%", md: "95%"}} height="1px" margin="0 auto" backgroundColor={"black"} opacity={.2}></Box> */}
              <HStack spacing={{base: 3, md: 5}} justifyContent={{base: "center", md: "flex-start"}} marginTop={3}>
                <Link href="#" onClick={(e) => e.preventDefault()} fontSize={{base: 12, md: 14}} textColor={"grey"} textDecoration="underline" cursor="pointer">antony@silvettischmitt dot net</Link>
                <Link href = "https://github.com/Antony-SS" fontSize={{base: 12, md: 14}} isExternal textDecoration="underline" textColor={"grey"}>github</Link>
                {/* <Link href = "https://twitter.com/Johann_Antony" fontSize={{base: 12, md: 14}} isExternal textDecoration="underline" textColor={"grey"}>twitter</Link> */}
                <Link href = "https://www.linkedin.com/in/antony-silvetti-schmitt/" fontSize={{base: 12, md: 14}} isExternal textDecoration="underline" textColor={"grey"}>linkedin</Link>
              </HStack>
            </Box>
          </Stack>
        </Container>
      </Stack>
    </Stack>
    </Box>
      <Footer />
    </Box>
    </ChakraProvider>
  );
}

export default About;