
import { Box, VStack, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <VStack
      
      py={4} // Adjust the padding as needed
      textAlign="center"
      spacing={4}
      position={"relative"}
      top={"15vh"}
      width={"100%"}
    >
    <Box width={"85%"} height= "1px" margin={0} padding={0} backgroundColor={"white"} opacity={.5}></Box>
    <Box width={"50%"} textAlign={"center"}>
        <Heading textColor={"white"} fontSize={14} fontWeight={"light"}>Copyright © 2023 Antony Silvetti-Schmitt</Heading>
    </Box>
    <Box alignContent={"center"}>
      <HStack>
        <Link href = "https://github.com/Antony-SS" isExternal>
        <Image height={25} src = {require("../../resources/gh.png")}/>
        </Link>
        <Link href="https://twitter.com/Johann_Antony" isExternal>
        <Image height = {30} src = {require("../../resources/twitterwhite.png")}/>
        </Link>
        <Link href = "https://www.linkedin.com/in/antony-silvetti-schmitt/" isExternal>
        <Image height = {30} src = {require("../../resources/linkedin.png")}/>
        </Link>
      </HStack>
    </Box>

    </VStack>
  );
}

export default Footer;