import { Box, VStack, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react"
import { Link } from "react-router-dom";

function Footer({top}) {
  return (
    <VStack
      
      py={4} // Adjust the padding as needed
      textAlign="center"
      spacing={4}
      position={"relative"}
      top={top}
      width={"100%"}
    >
    <Box width={"85%"} height= "1px" margin={0} padding={0} backgroundColor={"white"} opacity={.5}></Box>
    <Box width={"65%"} textAlign={"center"}>
        <Text fontSize="xs" color="gray.500" mt={2}>
          Calvin & Hobbes visuals © Bill Watterson · Site content © 2026 Antony Silvetti-Schmitt
        </Text>
    </Box>

    </VStack>
  );
}

export default Footer;