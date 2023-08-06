import React from "react";
import { ChakraProvider, Container } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme";

function Writing(bg) {
  const theme = CreateTheme("#F78888");
  return (
    <ChakraProvider theme = {theme}>
      <Container bg="#F78888" minWidth="100%" minHeight="100vh" display="flex" flexDirection="column">
        <text>WRITING</text>
      </Container>
    </ChakraProvider>
  );
}

export default Writing;