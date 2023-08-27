import React from "react";
import { ChakraProvider, Container, VStack, Box, Heading } from "@chakra-ui/react";
import CreateTheme from "../ChakraStyles/CreateTheme";
import Navbar from "./Shared/Navbar/Navbar";
import { useState } from "react";
import { ContactModal, Footer, WritingCard } from ".";

function Writing() {
  const theme = CreateTheme("#F78888");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ChakraProvider theme = {theme}>
      <Navbar backgroundColor={"#F78888"} setIsModalOpen={setIsModalOpen}/>
      <VStack position={"absolute"} top={"25vh"} spacing={{base: "10px", md: "20px"}} alignItems={"center"} justifyContent={"center"} width={"100%"}>
        <Container minWidth = "100%" display= "flex" flexDirection= "column"  textAlign= "center" alignItems={"center"} justifyContent={"center"} margin={0} paddingBottom={{base: "10px", md: "25px"}}>
          <Box border="4px solid rgba(0, 0, 0, 0.2)" borderRadius="10px" padding={0} margin={0} textAlign={"center"} justifyContent={"center"}>
        <Heading paddingLeft={10} paddingRight={10} paddingBottom={4} fontSize={{base: 80, md: 200, lg: 240}} textColor= "black" opacity={.15}>WRITING</Heading>
      </Box>
    </Container>
    <WritingCard position = "absolute" title={"Personal Website Revamp Logs"} 
    description={"I didn't like my old personal website, so I decided to redo it using React, Chakra UI, and Midjourney for graphics.  I wrote logs every so often to track my progress."}
    link={"https://antony-ss.notion.site/Personal-Website-Revamp-Logs-92eb52bcbc654b9997a1a698186f9490?pvs=4"}
    type = {"Developer Logs"}
    date={"Summer 2023"}/>
        <WritingCard position = "absolute" title={"Personal Website Revamp Logs"} 
    description={"I didn't like my old personal website, so I decided to redo it using React, Chakra UI, and Midjourney.  I wrote logs every so often to track my progress."}
    link={"https://antony-ss.notion.site/Personal-Website-Revamp-Logs-92eb52bcbc654b9997a1a698186f9490?pvs=4"}
    type = {"Developer Logs"}
    date={"Summer 2023"}/>
    <ContactModal isModalOpen={isModalOpen} onClose={closeModal}/>
    <Footer/>
      </VStack>
    </ChakraProvider>
  );
}

export default Writing;