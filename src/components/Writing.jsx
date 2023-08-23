import React from "react";
import { ChakraProvider, Container, VStack, Box, Heading } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme";
import Navbar from "./Shared/Navbar/Navbar";
import { useState } from "react";
import { ContactModal, Footer } from ".";

function Writing() {
  const theme = CreateTheme("#F78888");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChakraProvider theme = {theme}>
      <VStack>
        <Navbar backgroundColor={"#F78888"} setIsModalOpen={setIsModalOpen}/>
        <Container minWidth = "100%" display= "flex" flexDirection= "column" top = "15vh" paddingTop={"10vh"} position = "relative" textAlign= "center" alignItems={"center"} justifyContent={"center"} margin={0}>
          <Box border="4px solid rgba(0, 0, 0, 0.2)" borderRadius="10px" padding={0} margin={0} textAlign={"center"} justifyContent={"center"}>
        <Heading paddingLeft={10} paddingRight={10} paddingBottom={4} fontSize={240} textColor= "black" opacity={.15}>WRITING</Heading>
      </Box>
    </Container>
    <ContactModal isModalOpen={isModalOpen} onClose={closeModal}/>
      <Footer/>
      </VStack>
    </ChakraProvider>
  );
}

export default Writing;