import React from "react";
import { Text, CardHeader, Heading, CardBody, Link} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";


function WritingCard({ title, description, date, type, link }) {
    return (
        <Card variant={"filled"} backgroundColor={"#F78888"} textColor={"white"} width= {{base: "75%", md: "55%"}}>
            <CardHeader paddingBottom={0}>
                <Link href= {link} isExternal><Heading>{title}</Heading></Link>
            </CardHeader>
            <CardBody paddingTop={3} textColor={"blackAlpha.600"}> 
                <Heading paddingBottom = {2} fontWeight={"light"} fontSize={14}>{type} | {date}</Heading>
                <Text fontSize={16}>{description}</Text>
            </CardBody>
        </Card>
    );
}


export default WritingCard;