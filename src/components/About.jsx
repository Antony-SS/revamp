import React from "react";
import { Container, ChakraProvider, Stack, Box, Heading, Image, Text } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme"
import Navbar from "./Shared/Navbar/Navbar";
import { useState } from "react";
import { ContactModal, Footer } from ".";

function About() {
  const theme = CreateTheme("#F3D250");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <ChakraProvider theme={theme}>
    <Navbar backgroundColor={"#F3D250"} setIsModalOpen={setIsModalOpen}/>
    <Stack direction={"column"} position = "absolute" top = "25vh" height = "10" width= "100%" margin={0} padding={0} alignItems={"center"}>
      <Container minWidth = "100%" display= "flex" flexDirection= "column"  textAlign= "center" alignItems={"center"} justifyContent={"center"} margin={0} paddingBottom={{base: "20px", md: "45px"}}>
            <Box border="4px solid rgba(0, 0, 0, 0.2)" borderRadius="10px" padding={0} margin={0} textAlign={"center"} justifyContent={"center"}>
          <Heading paddingLeft={10} paddingRight={10} paddingBottom={4} fontSize={{base: 70, md: 160, lg: 230}} textColor= "black" opacity={.15}>A B O U T</Heading>
        </Box>
      </Container>
      <Stack direction={{base: "column", md: "row"}} alignItems={{base: "center", md: "left"}}>
        <Image margin={5} src = {require("../resources/profile.jpg")} boxSize={{base: "325px", md: "400px"}} alt='Picture of Me' borderRadius={10} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)" />
        <Container width={{base: "90%", md: "100%"}}>
          <Stack direction={"column"}>
            <Text fontSize={{base: 24, md: 24, lg: 28}} fontWeight={400}>
              Hi, I'm Antony, a masters student at Georgia Tech.
            </Text>
            <Text fontSize={{base: 12, md: 14}}>
              I'm studying robotics, with a focus on perception and localization. I was born in Germany and raised in ( a suburb of ) Chicago.  I did my undergrad @ UIUC where I studied Industrial Engineering & Computer Science.
              <br/><br/>
              Previously, I worked for a year as a Computer Vision Engineer at Earthsense, a robotics startup in the agtech space.  I supported vision and perception across our fleet of agricultural robots.  I also led the covercropping project, where I oversaw engineering and business development for the firm's covercropping robots.
              <br/><br/>
              I want to work with high performing, passionate people to build products that people love.  I enjoy working with customers as much as I enjoy engineering, and my best role is likely a hybrid of the two.
              <br/><br/>
              On a less serious note, I like to rock climb, run, and love the outdoors.
            </Text>
          </Stack>
        </Container>
      </Stack>
      <ContactModal isModalOpen={isModalOpen} onClose={closeModal}/>
      <Footer/>
    </Stack>
    </ChakraProvider>
  );
}

export default About;