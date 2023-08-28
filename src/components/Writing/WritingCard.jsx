import React from "react";
import { Text, CardHeader, Heading, CardBody, Link} from "@chakra-ui/react";
import { Card } from "@chakra-ui/react";


function WritingCard({ title, description, date, type, link }) {
    return (
        <Card variant={"filled"} backgroundColor={"#F78888"} textColor={"blackAlpha.800"} width= {{base: "75%", md: "65%"}}>
            <CardHeader paddingBottom={0}>
                <Link href= {link} isExternal><Heading fontSize = {{base: 24, md: 30 }}>{title}</Heading></Link>
            </CardHeader>
            <CardBody paddingTop={4}> 
                <Heading textColor={"blackAlpha.500"} paddingBottom = {2} fontWeight={"light"} fontSize={14}>{type} | {date}</Heading>
                <Text textColor={"blackAlpha.700"} fontSize={16}>{description}</Text>
            </CardBody>
        </Card>
    );
}


export default WritingCard;