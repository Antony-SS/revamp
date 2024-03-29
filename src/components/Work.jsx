import { Box, ChakraProvider, Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./Work/ProjectCard";
import React, {useState} from "react";
import Navbar from "./Shared/Navbar/Navbar";
import CreateTheme from "../ChakraStyles/CreateTheme";
import { ContactModal, Footer } from ".";


function Work() {
  const theme = CreateTheme("#90CCF4");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
  <ChakraProvider theme={theme}>
  <VStack background="#90CCF4" width= "100%" margin={0} padding={0} alignItems={"center"} position={"absolute"} flexGrow={1}>
    <Navbar backgroundColor={"#90CCF4"} setIsModalOpen={setIsModalOpen}/>
    <Container minWidth = "100%" display= "flex" flexDirection= "column" top = "15vh" paddingTop={"10vh"} position = "relative" textAlign= "center" alignItems={"center"} justifyContent={"center"} margin={0}>
      <Box border="4px solid rgba(0, 0, 0, 0.2)" borderRadius="10px" padding={0} margin={0} textAlign={"center"} justifyContent={"center"}>
        <Heading paddingLeft={10} paddingRight={10} paddingBottom={4} fontSize={{base: 80, md: 200, lg: 240}} textColor= "black" opacity={.15}>W O R K</Heading>
      </Box>
    </Container>
    <Container
          minWidth="100%"
          display="flex"
          flexDirection="column"
          top="15vh"
          paddingTop="10vh"
          position="relative"
          alignItems="center"
          justifyContent="center"
          margin={0}
          padding={0}
          flexGrow={1}
    >

    <SimpleGrid position={"relative"} spacing={16} width = "100%" margin={0} top = {{base: "5vh", md: "8vh", lg: "12vh"}} minChildWidth={275} justifyItems={"center"} paddingLeft={"10%"} paddingRight={"10%"}>
      <ProjectCard title={"Digital ID"} 
        description = {"Project exploring decentralized identity management and passwordless auth leveraging modified ERC721 NFTs. Created as part of a summer internship. Includes whitepaper and my MVP."} 
        imageUrl={"DID.png"} 
        technologies={["JS", "Solidity"]}
        links= {[["https://github.com/Antony-SS/Decentralized-Digital-Identifier", "gh"], ["https://antony-ss.notion.site/Digital-Identity-Blockchain-ERC721-NFTs-for-Digital-Identity-Management-and-Passwordless-Authenti-024e10e4b1d048b18133b5c7bfc0e6a9", "web"]]}/>
      <ProjectCard title={"Mosaics"}
        description = {"Favorite DSA proejct. Created a mosaic, swapping tiles of base image with nearest neighbor from an image database based on pixel color. Implemented a KD tree to optimize NN search from n^2 to Log n."}
        imageUrl={"mosaic.png"} 
        technologies={["C++"]}
        links= {[["https://github.com/Antony-SS/release-f22_final/tree/main/mp_mosaics/src", "gh"]]}/>
      <ProjectCard title={"Song Vote"}
        description = {"A comprehensive tutorial for developers to create a voting dapp on the Algorand blockchain. Created for a Gitcoin bounty, published to the Algorand developer docs, and voted best community tutorial."}
        imageUrl={"algorand.png"} 
        technologies={["pyTEAL", "JSX"]}
        links= {[["https://github.com/Antony-SS/Song-Vote-on-Algorand-Tutorial", "gh"], ["https://developer.algorand.org/tutorials/song-vote-on-algorand-create-and-deploy-a-fully-functioning-dapp/", "web"]]}/>
      <ProjectCard title={"Song Share"}
        description = {"A dapp built on the Rinkeby ethereum testnet to exchange and browse music reccomendations.  Doesn't need to be decentralized, but was good intro to blockchain development."}
        imageUrl={"songshare.png"} 
        technologies={["JS", "Solidity"]}
        links= {[["https://github.com/Antony-SS/Song-Share-Frontend", "gh"], ["https://song-share.netlify.app/", "web"]]}/>
      <ProjectCard title={"RecipEats"}
        description = {"Find recipes to cook based on ingredients you have in your fridge. Utilizes webscraping to find recipes.  Maintains a shopping list that lasts beyond the runtime of the program. Written in C++."}
        imageUrl={"recipeats.png"} 
        technologies={["C++", "cURL"]}
        links= {[["https://github.com/Antony-SS/RecipEats", "gh"]]}/>
      <ProjectCard title={"Pathfinder"}
        description = {"Takes data representing elevations in a region, generates contour map, and highlights the path of least elevation change in green.  Could be improved with recursive backtracking."}
        imageUrl={"pathfinder.png"}
        technologies={["C++"]}
        links= {[["https://github.com/Antony-SS/EasiestPathFinder", "gh"]]}/>
    </SimpleGrid>
    <Footer top={"15vh"}/>
    </Container>
]
 
    <ContactModal isModalOpen={isModalOpen} onClose={closeModal}/>
    </VStack>
    </ChakraProvider>
  );
}

export default Work;