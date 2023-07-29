import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

function Work() {
  return (
  <Container bg="#90CCF4" minWidth="100%" minHeight="100vh" display="flex" flexDirection="column" position= {"relative"} margin={0} padding={0}>
    <Container bg="#000000" minWidth= "100%" minHeight= "10vh" display= "flex" flexDirection= "column" position= "absolute" opacity={.5}/>
    <Container minWidth= "100%" display= "flex" flexDirection= "column" position = "absolute" textAlign= "center" paddingTop=  "10vh">
      <Heading fontSize={200} textColor=  "black" opacity={.2}>W O R K</Heading>
    </Container>
  </Container>
  );
}

export default Work;