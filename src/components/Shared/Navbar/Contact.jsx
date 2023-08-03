import React from "react";
import { Link, Box, Image, Heading } from "@chakra-ui/react";

function Contact({z_index, right, top}) {
  return (
    <Box zIndex={z_index} as= {Link} href="/" position={"fixed"} right={right} top={top} padding={0} display="inline-block" boxShadow= "0px 3px 1px 0px rgba(0, 0, 0, 0.3)" borderRadius={50}>
        <Image padding = {0} src = {require ("../../../resources/contactlogo.png")} h= "45px" transition="transform 0.2s ease-in-out" _hover={{ transform: 'scale(1.2)' }} ></Image>
        {/* <Heading textColor = "white" paddingTop = {2} fontSize={28}>contact</Heading> */}
    </Box>
  );
};

export default Contact;