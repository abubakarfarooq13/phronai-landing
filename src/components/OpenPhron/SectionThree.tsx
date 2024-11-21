import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
const Fade = require("react-reveal/Fade");
const SectionThree = () => {
  return (
    <Box mb="5rem">
      <Box>
        <Container alignItems="center" maxWidth="1240px">
            <Fade bottom>
          <Box textAlign="center" my="50px">
            <Text lineHeight={{base:"30px",md:"45px"}} fontWeight="700" fontSize={{base:"21px",md:"35px",lg:"40px"}}>
              From imagination to implementation:
              <Box as="span" display={{base:"none",md:"block"}}></Box>
              The road towards the future
            </Text>
            <Text fontSize={{base:"14px",md:"16px"}} mt="20px" color="#666c88">
              Carved from the concept, we applied the concept of having a<Box as="span" display={{base:"none",md:"block"}}></Box>
              long-lasting technology embedded with utility and accessibility.
            </Text>
          </Box></Fade>
          <Fade bottom>
          <Box my="50px"
            bgImage="/assets/open-phron/aiagents.png"
            bgPos="center"
            bgSize={{base:"cover",lg:"100% 100%"}}
            // bg="red"
            height="400px"
            borderRadius="25px"
          >
            <Fade left>
            <Box pl={{base:"50px",lg:"100px"}} pt={{base:"70px",md:"80px"}}>
              <Text fontSize="30px" fontWeight="500" color="#ffffff">
                AI Agents
              </Text>
              <Text maxW={{base:"200px",md:"300px",lg:"350px"}} mt="10px" mb="20px" color="#ffffff">
                Power your everyday tasks with AI agents.
                
                Gatherings the best solutions in the market in
                a single place.
              </Text>
              <button className="btn-grad">Explore Phronesis</button>
            </Box></Fade>
          </Box></Fade>
          <Fade bottom>
          <Flex mt="50px"
            bgImage="/assets/open-phron/cloud.png"
            bgPos={{base:"left",md:"center"}}
            bgSize={{base:"cover",md:"cover",lg:"100% 100%"}}
            height="400px"
            alignItems="end"
            flexDir="column"
            mb="100px"
            borderRadius="25px"
          ><Fade right>
            <Box pl={{base:"50px"}}  pr={{md:"50px",lg:"100px"}} pt={{base:"70px",md:"80px"}}>
             <Text maxW={{base:"full",md:"300px",lg:"full"}} fontSize="30px" fontWeight="500" color="#000000">
              Decentralized Cloud  Services
            </Text>
            <Text  maxW={{base:"230px",md:"300px",lg:"350px"}} mt="10px" mb="20px" color={{base:"#ffffff",md:"#666c88"}}>
              From GPU to Storage, find the most suitable
             
              solution provided by different renders
              
              in a decentralized scale.
            </Text>
            <button className="btn-grad">Explore PhronZero</button>    
            </Box></Fade>
           
          </Flex></Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default SectionThree;
