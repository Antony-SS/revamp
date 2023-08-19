import React from "react";
import {Box, HStack } from "@chakra-ui/react";
import Logo from "./Logo";
import Contact from "./Contact";

function Navbar({backgroundColor, zIndex, navItems, setIsModalOpen}) {
  return (
    <HStack width= "100%" position={"absolute"} top={0} left={0} background={backgroundColor} zIndex={zIndex} height={"15vh"}>
        <Box width= "50%" justifyContent={"flex-end"} textAlign={"right"} padding={0} position={"relative"} background={backgroundColor} height={"15vh"}>
            <Logo position = "absolute" left = {{base: 6, md: 10}} top= {{base: 2, md: 6}}/>
        </Box>
        <Box width= "50%" position={"relative"} height={"15vh"}>
            <Contact position = "absolute" right = {{base: 8, md: 12}} top= {{base: "20px", md: "35px"}} setIsModalOpen={setIsModalOpen}/>
        </Box>
    </HStack>
  );
};

export default Navbar;