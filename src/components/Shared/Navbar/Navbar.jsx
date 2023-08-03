import React from "react";
import { Link, Box, Image, HStack } from "@chakra-ui/react";
import Logo from "./Logo";

function Navbar({backgroundColor, zIndex}) {
  return (
    <HStack width= "100%" height= "15vh" position={"fixed"} top={0} left={0} background={backgroundColor} zIndex={zIndex}>
        <Box width= "50%" justifyContent={"flex-end"} textAlign={"right"} padding={0} height= "15vh">
            <Logo position = "fixed" left = {10} top = {6}/>
        </Box>
        <Box width= "50%">

        </Box>
    </HStack>

  );
};

export default Navbar;