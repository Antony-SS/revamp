import React from "react";
import { Container, ChakraProvider, VStack } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme"
import Navbar from "./Shared/Navbar/Navbar";

function About() {
  const theme = CreateTheme("#F3D250");
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <Navbar backgroundColor={"#F3D250"}/>
        <Container bg="#F3D250" paddingTop = "20vh" minWidth="100%" minHeight="10vh" display="flex" flexDirection="column">
          <text>ABOUT</text>
        </Container>
      </VStack>
    </ChakraProvider>
  );
}

export default About;