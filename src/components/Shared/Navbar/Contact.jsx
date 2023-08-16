import React from "react";
import {Box, Image } from "@chakra-ui/react";
import { useState } from "react";

function Contact({z_index, right, top, position, setIsModalOpen}) {

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Box zIndex={z_index} position={position} right={right} top={top} padding={0} display="inline-block" boxShadow= "0px 3px 1px 0px rgba(0, 0, 0, 0.3)" borderRadius={50} onClick={openModal}>
        <Image padding = {0} src = {require ("../../../resources/contactlogo.png")} h= "45px" transition="transform 0.2s ease-in-out" _hover={{ transform: 'scale(1.2)' }} ></Image>
    </Box>
  );
};

export default Contact;