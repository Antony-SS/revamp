import React from "react";
import { Box, Image, Text, Badge, CardHeader, Heading, CardBody, VStack, HStack, CardFooter, Link} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";

function ProjectCard({ title, description, imageUrl, technologies }) {
  return (
    <Card paddingLeft={0} paddingRight={0} background="#90CCF4" maxWidth={350}>
        <CardHeader paddingBottom={0}>
            <Heading paddingBottom={2} color={"white"}>{title}</Heading>
        </CardHeader>
        <CardBody paddingTop={2} paddingLeft={0} paddingRight={0} paddingBottom={0}>
            <VStack>
                <Box paddingLeft={5} paddingRight={5} paddingBottom={2}>
                    <Text color = "#A1ADC0" fontSize={15}>{description}</Text>
                </Box>
                <Image padding = {0} src = {require(`../../resources/${imageUrl}`)} alt= {title} w="100%" h="190px" objectFit="fill"/>
                
            </VStack>
        </CardBody>
        <CardFooter paddingTop={3} paddingBottom={3}>
        <HStack width={"100%"}>
            <HStack width={"40%"} justifyContent={"flex-start"} padding={0}>
                <Link href = "https://github.com/Antony-SS/Song-Share-Frontend" isExternal>
                    <Image src= {require("../../resources/ghwhite.png")} height={6}/>
                </Link>
                <Link href = "https://github.com/Antony-SS/Song-Share-Frontend" isExternal>
                    <Image src= {require("../../resources/link.png")} height={6}/>
                </Link>
            </HStack>
            <Box width= "60%" justifyContent={"flex-end"} textAlign={"right"} padding={0}>
                    {technologies.map((tech, index) => (
                        <Badge variant = "solid" fontSize="small" colorScheme="yellow" mr="1" mb="1">
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

{/* <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    maxW="xs"
    mx="auto"
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    shadow="lg"
    rounded="lg"
  >
    <Box px={4} py={2}>
      <chakra.h1
        color="gray.800"
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
        fontSize="3xl"
        textTransform="uppercase"
      >
        NIKE AIR
      </chakra.h1>
      <chakra.p
        mt={1}
        fontSize="sm"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
        quidem sequi illum facere recusandae voluptatibus
      </chakra.p>
    </Box>

    <Image
      h={48}
      w="full"
      fit="cover"
      mt={2}
      src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
      alt="NIKE AIR"
    />

    <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      bg="gray.900"
      roundedBottom="lg"
    >
      <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
        $129
      </chakra.h1>
      <chakra.button
        px={2}
        py={1}
        bg="white"
        fontSize="xs"
        color="gray.900"
        fontWeight="bold"
        rounded="lg"
        textTransform="uppercase"
        _hover={{
          bg: "gray.200",
        }}
        _focus={{
          bg: "gray.400",
        }}
      >
        Add to cart
      </chakra.button>
    </Flex>
  </Box>
</Flex>; */}
