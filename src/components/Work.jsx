import { Box, Center, Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./Work/ProjectCard";
import React from "react";
import Navbar from "./Shared/Navbar/Navbar";

function Work() {
  return (
  <VStack bg="#90CCF4" width= "100%" height= "100%" margin={0} padding={0} alignItems={"center"} position={"relative"} zIndex={500}>
    <Navbar backgroundColor={"#90CCF4"} zIndex={10}/>
    <Container zIndex={-1} minWidth = "100%" display= "flex" flexDirection= "column" paddingTop = "25vh" position = "fixed" textAlign= "center" alignItems={"center"} justifyContent={"center"} margin={0}>
      <Box border="4px solid rgba(0, 0, 0, 0.2)" borderRadius="10px" padding={0} margin={0} textAlign={"center"} justifyContent={"center"}>
        <Heading zIndex={-4} paddingLeft={10} paddingRight={10} paddingBottom={4} fontSize={240} textColor= "black" opacity={.15}>W O R K</Heading>
      </Box>
    </Container>
    <SimpleGrid position={"relative"} spacing={16} width = "80%" paddingTop= "75vh" margin={0} minChildWidth={275} justifyItems={"center"}>
      <ProjectCard title={"DIGITAL ID"} 
        description = {"Project exploring decentralized identity management and passwordless auth leveraging modified ERC721 NFTs. Created as part of a summer internship. Includes whitepaper and my MVP."} 
        imageUrl={"DID.png"} 
        technologies={["JS", "Solidity", "REST API"]}/>
      <ProjectCard title={"MOSAICS"}
        description = {"Favorite DSA proejct. Created a mosaic, swapping tiles of base image with nearest neighbor from an image database based on pixel color. Implemented a KD tree to optimize NN search from n^2 to Log n."}
        imageUrl={"mosaic.png"} 
        technologies={["JS", "Solidity", "REST API"]}/>
      <ProjectCard title={"SONG VOTE"}
        description = {"A comprehensive tutorial for developers to create a voting dapp on the Algorand blockchain. Created for a Gitcoin bounty, published to the Algorand developer docs, and voted 2nd best community tutorial."}
        imageUrl={"algorand.png"} 
        technologies={["pyTEAL", "JSX"]}/>
      <ProjectCard title={"SONGSHARE"}
        description = {"A dapp built on the Rinkeby ethereum testnet to exchange and browse music reccomendations.  Doesn't need to be decentralized, but was good intro to blockchain development."}
        imageUrl={"songshare.png"} 
        technologies={["JS", "Solidity"]}/>
      <ProjectCard title={"RECIPEATS"}
        description = {"A terminal app to find recipes to cook based on ingredients you have in your fridge. Utilizes webscraping to find recipes.  Maintains a shopping list that lasts beyond the runtime of the program. Written in C++."}
        imageUrl={"recipeats.png"} 
        technologies={["C++, cURL"]}/>
      <ProjectCard title={"PATHFINDER"}
        description = {"Takes an array of data representing elevations in a region, generates a ppm image representing the area's elevations, highlights the path of least elevation change in green. Could be improved with recursive backtracking."}
        imageUrl={"pathfinder.png"} 
        technologies={["C++"]}/>
    </SimpleGrid>

    </VStack>
  );
}

export default Work;