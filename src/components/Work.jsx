import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./Work/ProjectCard";
import React from "react";

function Work() {
  return (
  <Container bg="#90CCF4" minWidth="100%" minHeight="100vh" display="flex" flexDirection="column" position= {"relative"} margin={0} padding={0} alignItems={"center"}>
    <Container bg="#1A202C" minWidth= "100%" minHeight= "10vh" display= "flex" flexDirection= "column" position= "absolute"/>
    <Container minWidth= "100%" display= "flex" flexDirection= "column" position = "absolute" textAlign= "center" paddingTop= "10vh" alignItems={"center"} justifyContent={"center"} margin={0}>
      <Heading fontSize={200} textColor= "#1A202C">W O R K</Heading>
      {/* <Box position="relative" bottom={-2} left={0} w= "75%" h="2px" bg="#000000" opacity={.3}/> thinking about this */}
    </Container>
    <SimpleGrid position={"relative"} spacing={16} width = "80%" paddingTop= "45vh" margin={0} minChildWidth={250}>
      <ProjectCard title={"SONG SHARE"} description={"Project exploring decentralized identity managment and passwordless authentication leveraging modified ERC721 NFTs. Created as part of a summer internship. Includes whitepaper and my final on the space."} imageUrl={"proj1.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"Testing"} description={"Project exploring decentralized identity managment and passwordless authentication leveraging modified ERC721 NFTs. Created as part of a summer internship. Includes whitepaper and my thoughts on the space."} imageUrl={"proj1.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"SONG SHARE"} description={"Project exploring decentralized identity managment and passwordless authentication leveraging modified ERC721 NFTs. Created as part of a summer internship. Includes whitepaper and my thoughts on the space."} imageUrl={"proj1.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"Testing"} description={"Project exploring decentralized identity managment and passwordless authentication leveraging modified ERC721 NFTs. Created as part of a summer internship. Includes whitepaper and my thoughts on the space."} imageUrl={"proj1.png"} technologies={["jsx", "java", "python"]}/>
    </SimpleGrid>

    {/* </Container> */}
  </Container>
  );
}

export default Work;