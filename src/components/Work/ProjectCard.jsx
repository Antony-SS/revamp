import React from "react";
import { Box, Image, Text, Badge, CardHeader, Heading, CardBody, VStack, HStack, CardFooter, Link} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

function Helper(link, identifier) {

}

function ProjectCard({ title, description, imageUrl, technologies, links, zIndex }) {
  return (
    <Card variant={"fill"} paddingLeft={0} paddingRight={0} background="#658EAA" maxWidth={350} zIndex = {zIndex}>
        <CardHeader paddingBottom={0}>
            <Heading paddingBottom={1} color={"white"}>{title}</Heading>
        </CardHeader>
        <CardBody paddingTop={4} paddingLeft={0} paddingRight={0} paddingBottom={0}>
                <Image paddingLeft = {5} paddingRight = {5} paddingBottom={3} src = {require(`../../resources/${imageUrl}`)} alt= {title} w="100%" h="190px" objectFit="fill"/>
            <VStack>
                <Box paddingLeft={5} paddingRight={5} paddingBottom={2}>
                    <Text color = "white" fontSize={16}>{description}</Text>
                </Box>
            </VStack>
        </CardBody>
        <CardFooter paddingTop={3} paddingBottom={3}>
        <HStack width={"100%"}>
            <HStack width={"40%"} justifyContent={"flex-start"} padding={0}>
                {links.map((value, index) => (
                  <Link key = {index} href = {value[0]} isExternal>
                    <Image src= {require("../../resources/" + value[1] + ".png")} height={6}/>
                  </Link>
                ))}
            </HStack>
            <Box width= "60%" justifyContent={"flex-end"} textAlign={"right"} padding={0}>
                    {technologies.map((tech, index) => (
                        <Badge key = {index} variant = "solid" fontSize="small" colorScheme="yellow" mr="1" mb="1">
                    {tech}
                    </Badge>
                    ))}
            </Box>
                </HStack>
        </CardFooter>
    </Card>
  );
}

export default ProjectCard;

