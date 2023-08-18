
import { Modal, ModalHeader, ModalOverlay, ModalContent, ModalBody, ModalFooter, ModalCloseButton, Button, Text, Heading, HStack } from "@chakra-ui/react"
import React from "react"


function ContactModal ({isModalOpen, onClose}) {
    return (
        <Modal isOpen = {isModalOpen} onClose = {onClose} isCentered = {true} size={'lg'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader><Heading fontSize={25}>CONTACT</Heading></ModalHeader>
                <ModalCloseButton />
                    <ModalBody>
                        
                        <Text fontSize={35}>antony@silvettischmitt.net</Text>
                        <HStack>
                            <Heading fontSize={28}>github</Heading>
                            <Heading fontSize={28}>twitter</Heading>
                            <Heading fontSize={28}>linkedin</Heading>
                        </HStack>
                    </ModalBody>
                <ModalFooter>
                    <Button colorScheme="blue" onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ContactModal;