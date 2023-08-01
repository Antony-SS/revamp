import { Box, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./Work/ProjectCard";
import React from "react";

function Work() {
  return (
  <Container bg="#90CCF4" minWidth="100%" minHeight="100vh" display="flex" flexDirection="column" position= {"relative"} margin={0} padding={0} alignItems={"center"}>
    <Container bg="#000000" minWidth= "100%" minHeight= "10vh" display= "flex" flexDirection= "column" position= "absolute" opacity={.5}/>
    <Container minWidth= "100%" display= "flex" flexDirection= "column" position = "absolute" textAlign= "center" paddingTop= "10vh" alignItems={"center"} justifyContent={"center"} margin={0}>
      <Heading fontSize={200} textColor= "black" opacity={.3}>W O R K</Heading>
      {/* <Box position="relative" bottom={-2} left={0} w= "75%" h="2px" bg="#000000" opacity={.3}/> thinking about this */}
    </Container>
    <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} position={"relative"} spacing={20} maxWidth= "75%" paddingTop= "45vh" margin={0}>
      <ProjectCard title={"Testing"} description={"A basic Dapp built on the Georli testnetork to share song reccomednations"} imageUrl={"https://cdn.midjourney.com/492a4dcb-f41f-4fe2-bbbd-34bbc01e5dbe/0_2.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"Testing"} description={"A basic Dapp built on the Georli testnetork to share song reccomednations"} imageUrl={"https://cdn.midjourney.com/492a4dcb-f41f-4fe2-bbbd-34bbc01e5dbe/0_2.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"Testing"} description={"A terminal app to find recipes to cook based on ingredients you have in your fridge. Utilizes webscraping to find recipes and text file manipulation to maintain a shopping list that lasts beyond the runtime of the program. Written in pure C++. "} imageUrl={"https://cdn.midjourney.com/492a4dcb-f41f-4fe2-bbbd-34bbc01e5dbe/0_2.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"Testing"} description={"A basic Dapp built on the Georli testnetork to share song reccomednations"} imageUrl={"https://cdn.midjourney.com/492a4dcb-f41f-4fe2-bbbd-34bbc01e5dbe/0_2.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"Testing"} description={"A basic Dapp built on the Georli testnetork to share song reccomednations"} imageUrl={"https://cdn.midjourney.com/492a4dcb-f41f-4fe2-bbbd-34bbc01e5dbe/0_2.png"} technologies={["jsx", "java", "python"]}/>
      <ProjectCard title={"Testing"} description={"A basic Dapp built on the Georli testnetork to share song reccomednations"} imageUrl={"https://cdn.midjourney.com/492a4dcb-f41f-4fe2-bbbd-34bbc01e5dbe/0_2.png"} technologies={["jsx", "java", "python"]}/>
    </SimpleGrid>

    {/* </Container> */}
  </Container>
  );
}

export default Work;