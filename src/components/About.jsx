import React from "react";
import { Container, ChakraProvider, VStack } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme"
import Navbar from "./Shared/Navbar/Navbar";
import { useState } from "react";
import { ContactModal } from ".";

function About() {
  const theme = CreateTheme("#F3D250");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Navbar backgroundColor={"#F3D250"} setIsModalOpen={setIsModalOpen}/>
        <Container bg="#F3D250" paddingTop = "20vh" minWidth="100%" minHeight="10vh" display="flex" flexDirection="column">
          <text>ABOUT</text>
        </Container>
      </VStack>
    <ContactModal isModalOpen={isModalOpen} onClose={closeModal}/>
    </ChakraProvider>
  );
}

export default About;