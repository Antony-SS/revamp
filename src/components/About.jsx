import React from "react";
import { Container, ChakraProvider, Stack, Box, Heading, Image, Text, Link } from "@chakra-ui/react";
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
              Hi, I'm Antony, a senior studying engineering at UIUC.  I'm interested in building technology to make our world a better place.
            </Text>
            <Text fontSize={{base: 12, md: 14}}>
              I'm majoring in Industrial Engineering and Minoring in Computer Science.  I was born in Germany and raised in ( a suburb of ) Chicago.
              <br/><br/>
              Currently I'm diving into robotics & autonomy.  I'm taking a class on mobile robotics and doing research on autonomous vehicles.  I see real potential for this technology to improve the human condition, and this is the most excited I've ever been about engineering.  
              <br/><br/>
              Previously, I spent ~ 3 years in the blockchain space.  I've worked internships at two fortune 500 companies, completed bounties, and led a smart contract security team at <Link textColor={"grey"} href="https://illiniblockchain.com/" isExternal>Illini Blockchain</Link>.  The technology interests me to this day and I believe it has the power to revolutionize underdeveloped economies.
              <br/><br/>
              On a less serious note, I play soccer, <Link textColor={"grey"} href="https://www.goodreads.com/user/show/159524269-antony-silvetti-schmitt" isExternal>read</Link> fiction, love the outdoors, and am attempting to learn guitar.
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