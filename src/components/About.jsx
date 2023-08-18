import React from "react";
import { Container, ChakraProvider } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme"

function About() {
  const theme = CreateTheme("#F3D250");
  return (
    <ChakraProvider theme={theme}>
      <Container bg="#F3D250" minWidth="100%" minHeight="10vh" display="flex" flexDirection="column">
        <text>ABOUT</text>
      </Container>
    </ChakraProvider>
  );
}

export default About;