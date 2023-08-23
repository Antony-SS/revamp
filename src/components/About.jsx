import React from "react";
import { Container, ChakraProvider, VStack, Box, Heading } from "@chakra-ui/react";
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
      <VStack height = "10" width= "100%" margin={0} padding={0} alignItems={"center"} position={"absolute"}>
    <Navbar backgroundColor={"#F3D250"} setIsModalOpen={setIsModalOpen}/>
    <Container minWidth = "100%" display= "flex" flexDirection= "column" top = "15vh" paddingTop={"10vh"} position = "relative" textAlign= "center" alignItems={"center"} justifyContent={"center"} margin={0}>
      <Box border="4px solid rgba(0, 0, 0, 0.2)" borderRadius="10px" padding={0} margin={0} textAlign={"center"} justifyContent={"center"}>
        <Heading paddingLeft={10} paddingRight={10} paddingBottom={4} fontSize={{base: 90, md: 200, lg: 240}} textColor= "black" opacity={.15}>A B O U T</Heading>
      </Box>
    </Container>
    <ContactModal isModalOpen={isModalOpen} onClose={closeModal}/>
    <Footer/>
    </VStack>
    </ChakraProvider>
  );
}

export default About;