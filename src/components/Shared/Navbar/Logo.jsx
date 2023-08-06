import React from "react";
import { Link, Box, Image } from "@chakra-ui/react";

function Logo({z_index, left, top, position}) {
  return (
    <Box zIndex={z_index} as= {Link} boxSize={"fit-content"} href="/" position={position} left={left} top={top} padding={2}>
        <Image src = {require ("../../../resources/logo.png")} h= "7vh"></Image>
    </Box>
  );
};

export default Logo;