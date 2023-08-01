import React from "react";
import { Box, Image, Text, Flex, Badge } from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

function ProjectCard({ title, description, imageUrl, technologies }) {
  return (
    <Card borderWidth="1px">
      <Image src={imageUrl} alt={title} w="100%" h="200px" objectFit="cover" />

      <Box p="4">
        <Text fontSize="xl" fontWeight="bold" mb="2">
          {title}
        </Text>
        <Text fontSize="md" mb="4">
          {description}
        </Text>

        <Flex flexWrap="wrap">
          {technologies.map((tech, index) => (
            <Badge key={index} colorScheme="blue" mr="2" mb="2">
              {tech}
            </Badge>
          ))}
        </Flex>
      </Box>
    </Card>
  );
}

export default ProjectCard;