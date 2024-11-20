import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
const Fade = require("react-reveal/Fade");
const SectionTwo = () => {
  return (
    <Box>
      <Box mt={"20px"}>
        <Container maxWidth="1240px">
          <Fade bottom>
          <Grid
            py="50px"
            gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)",lg:"repeat(2, 1fr)" }}
            gap="6"
          >
            <GridItem
              bgImage="/assets/open-phron/development.png"
              bgPos={{base:"bottom",md:"bottom",lg:"center"}}
              bgSize={{base:"110% 120%",md:"110% 120%",lg:"cover"}}
              bgRepeat="no-repeat"
              colSpan={{ base: 2, lg: 1 }}
          rowSpan={{ base: 2, md: 2 }}
          borderRadius={{base:"23px",md:"23px"}}
            >
              <Box p="20px" height={{base:"350px",lg:"300px"}}>
                <Text lineHeight="30px" fontWeight="600" fontSize={{base:"25px",md:"25px"}}>
                  Everything AI for Blockchain
                  <br />
                  Development
                </Text>
                <Text fontSize={{base:"14px",md:"16px"}} mt="20px" color="#666c88">
                  {" "}
                  An aggregator for AI applications for Web 3.0 products.
                  <Box as='span' display={{base:"none",md:"block"}}></Box>
                  Creating a Centralized space for Decentralized AI results.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              bgImage="/assets/open-phron/libraries.png"
              bgPos={{base:"right",md:"center"}}
              bgSize={{base:"120% 100%",md:"100% 100%",lg:"cover"}}
              colSpan={{ base: 2, lg: 1 }}
              rowSpan={{ base: 2, md: 1 }}
              borderRadius={{base:"23px",md:"23px"}}
            >
              <Box p="20px">
                <Text fontWeight="600" fontSize="25px">
                  Libraries
                </Text>
                <Text mt="20px" fontSize={{base:"14px",md:"16px"}} color="#666c88">
                  Gathering all the major vendors <br />
                  of AI Models and developments in <br />a single place.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              bgImage="/assets/open-phron/subscription.png"
              bgPos={{base:"right",md:"center"}}
              bgSize={{base:"120% 100%",md:"100% 100%",lg:"cover"}}
              colSpan={{ base: 2, lg: 1 }}
              rowSpan={{ base: 2, md: 1 }}
              borderRadius={{base:"23px",md:"23px"}}
            >
              <Box p="20px">
                <Text fontWeight="600" fontSize="25px">
                  Subscriptions
                </Text>
                <Text fontSize={{base:"14px",md:"16px"}} mt="20px" color="#666c88">
                  Monetize your AI Smart Contracts <br />
                  without jeopardizing your intellectual <br />
                  property.
                </Text>
              </Box>
            </GridItem>
            <GridItem
              bgImage="/assets/open-phron/collaborations.png"
              bgPos={{base:"center",md:"center"}}
              bgSize={{base:"200% 100%",md:"cover",lg:"cover"}}
              colSpan={{ base: 2,}}
              rowSpan={{ base: 1,}}
              borderRadius={{base:"23px",md:"23px"}}
            >
              <Box p="20px">
                <Text fontWeight="600" fontSize="25px">
                  Collaborations
                </Text>
                <Text fontSize={{base:"14px",md:"16px"}} mt="20px" color="#666c88">
                  Open AI smart contracts<Box display={{base:"block",md:"none"}} as="span"></Box> provided by individuals,
                  organizations, <br />
                  projects and universities for a collaborative<Box display={{base:"block",md:"none"}}  as="span"></Box> progress of AI
                  technology in Blockchain.
                </Text>
              </Box>
            </GridItem>
          </Grid></Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default SectionTwo;
