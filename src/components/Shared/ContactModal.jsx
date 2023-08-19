
import { Modal, ModalHeader, ModalOverlay, ModalContent, ModalBody, ModalFooter, ModalCloseButton, Text, Heading, HStack, Link } from "@chakra-ui/react"
import React from "react"


function ContactModal ({isModalOpen, onClose}) {
    return (
        <Modal isOpen = {isModalOpen} onClose = {onClose} isCentered = {true} size={{base: 'sm', md: 'lg'}}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader paddingBottom={0}><Heading fontSize={20}>CONTACT</Heading></ModalHeader>
                <ModalCloseButton />
                    <ModalBody>

                        <Link href="mailto:antony@silvettischmitt.net" isExternal><Text fontSize={{base: 26, md: 34 }}>antony@silvettischmitt.net</Text></Link>
                        <HStack paddingTop={0}>
                            <Link href="https://github.com/Antony-SS" isExternal><Heading fontSize={18}>github</Heading></Link>
                            <Heading fontSize={18}> | </Heading>
                            <Link href="https://twitter.com/Johann_Antony" isExternal><Heading fontSize={18}>twitter</Heading></Link>
                            <Heading fontSize={18}> | </Heading>
                            <Link href="https://www.linkedin.com/in/antony-silvetti-schmitt/" isExternal><Heading fontSize={18}>linkedin</Heading></Link>
                        </HStack>
                    </ModalBody>
                <ModalFooter>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ContactModal;