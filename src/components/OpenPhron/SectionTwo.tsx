import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Fade = require("react-reveal/Fade");
const SectionTwo = () => {
  return (
    <Box>
      <Box mt={"20px"}>
        <Container maxWidth="1240px">
          <Fade>
            <Grid
              py="50px"
              gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(1, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap="6"
            >
              <GridItem
                bgImage="/assets/open-phron/bgdiscover.png"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                colSpan={{ base: 2, lg: 1 }}
                rowSpan={{ base: 2, md: 2 }}
                borderRadius={{ base: "23px", md: "23px" }}
                overflow="hidden"
                // bg="#daf1fe"
                // h={{ base: "310px", md: "full" }}
                boxShadow="0 0px 50px -12px rgba(0, 0, 0, 0.1)"
              >
                <VStack px="20px" pt="8" justifyContent="space-between" h="full">
                  <Box>
                    <Text
                      lineHeight="120%"
                      fontWeight="600"
                      fontSize={{ base: "25px", md: "25px" }}
                    >
                      Everything AI for Blockchain Development
                    </Text>
                    <Text
                      fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                      mt="20px"
                      color="#666c88"
                    >
                      {" "}
                      An aggregator for AI applications for Web 3.0 products.
                      <Box
                        as="span"
                        display={{ base: "none", md: "block", lg: "none" }}
                      ></Box>
                      Creating a Centralized space for Decentralized AI results.
                    </Text>
                  </Box>
                  <Flex justifyContent="center" w={{ base: "", md: "full" }}>
                    <Box
                      mt={{ base: "32px", md: "10px", lg: "25px" }}
                      borderRadius="15px 15px 0px 0px"
                      overflow="hidden"
                      maxW="700px"
                    >
                      <Image
                        src="/assets/open-phron/discover1.png"
                        alt="openphron"
                        width={500}
                        height={400}
                      />
                    </Box>
                  </Flex>
                </VStack>
              </GridItem>
              <GridItem
                // bgImage="/assets/open-phron/libraries.png"
                // bgPos={{base:"right",md:"center"}}
                // bgSize={{base:"120% 100%",md:"100% 100%",lg:"cover"}}
                // minH={{lg:"160px"}}
                // maxH="160px"
                colSpan={{ base: 2, lg: 1 }}
                rowSpan={{ base: 2, md: 1 }}
                borderRadius={{ base: "23px", md: "23px" }}
                bg="#e6f9fc"
                overflow="hidden"
                h={{ lg: "160px" }}
                boxShadow="0 0px 50px -12px rgba(0, 0, 0, 0.1)"
              >
                <Flex
                  h="full"
                  flexDir={{ base: "column", sm: "row" }}
                  justifyContent={{ base: "center", md: "space-between" }}
                  alignItems="center"
                >
                  <Box w="full" p="20px">
                    <Text fontWeight="600" fontSize="25px">
                      Libraries
                    </Text>
                    <Text
                      mt="10px"
                      fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                      color="#666c88"
                    >
                      Gathering all the major vendors of AI Models and
                      developments in a single place.
                    </Text>
                  </Box>
                  <Flex
                    h="full"
                    alignItems={{ base: "center", md: "end", lg: "end" }}
                    maxW="180px"
                  >
                    <Image
                      src="/assets/open-phron/libraries0.png"
                      alt="openphron"
                      height={250}
                      width={250}
                    />
                  </Flex>
                </Flex>
              </GridItem>
              <GridItem
                // bgImage="/assets/open-phron/subscription.png"
                // bgPos={{base:"right",md:"center"}}
                // bgSize={{base:"120% 100%",md:"100% 100%",lg:"cover"}}
                //  minH="160px"
                maxH={{ lg: "160px" }}
                colSpan={{ base: 2, lg: 1 }}
                rowSpan={{ base: 2, md: 1 }}
                borderRadius={{ base: "23px", md: "23px" }}
                bg="#ede4fd"
                overflow="hidden"
                boxShadow="0 0px 50px -12px rgba(0, 0, 0, 0.1)"
              >
                <Flex
                  flexDir={{ base: "column", sm: "row" }}
                  justifyContent={{ base: "center", md: "space-between" }}
                  alignItems="center"
                >
                  <Box p="20px">
                    <Text fontWeight="600" fontSize="25px">
                      Subscriptions
                    </Text>
                    <Text
                      fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                      mt="10px"
                      color="#666c88"
                    >
                      Monetize your AI Smart Contracts without jeopardizing your
                      intellectual property.
                    </Text>
                  </Box>{" "}
                  <Flex
                    // display={{ base: "block", md: "none" }}
                    overflow="hidden"
                    alignItems={{ base: "center", md: "end" }}
                  >
                    <Image
                      src="/assets/open-phron/robot0.png"
                      alt="openphron"
                      height={200}
                      width={200}
                    />
                  </Flex>
                  {/* <Flex
                    display={{ base: "none", md: "block" }}
                    overflow="hidden"
                    alignItems={{ base: "center", md: "end" }}
                    w={{ base: "160px", md: "full" }}
                    maxW="160px"
                  >
                    <Image
                      src="/assets/open-phron/subscription0.png"
                      alt="openphron"
                      height="1000"
                      width="1000"
                    />
                  </Flex> */}
                </Flex>
              </GridItem>
              <GridItem
                bgImage={{ lg: "/assets/open-phron/collaborations.png" }}
                bgPos={{ lg: "center" }}
                bgSize={{ lg: "cover" }}
                minH="160px"
                colSpan={{ base: 2 }}
                rowSpan={{ base: 1 }}
                borderRadius={{ base: "23px", md: "23px" }}
                bg="#efd4ff"
                overflow="hidden"
                boxShadow="0 0px 50px -12px rgba(0, 0, 0, 0.1)"
              >
                <Flex
                  flexDir={{ base: "column", md: "row" }}
                  justifyContent={{ base: "center", md: "space-between" }}
                  alignItems={{ base: "center", lg: "normal" }}
                  position="relative"
                >
                  <Flex
                    position="absolute"
                    mr={{ base: "-180px", md: "-60px" }}
                    top={{ base: "0px", md: "-80px" }}
                    display={{ base: "block", md: "none", lg: "none" }}
                    alignItems={{ base: "center", md: "start" }}
                    w={{ base: "150px" }}
                    maxW="530px"
                  >
                    <Image
                      src="/assets/open-phron/ringup.png"
                      alt="openphron"
                      height="1000"
                      width="1000"
                    />
                  </Flex>
                  <Box zIndex="10" p="20px">
                    <Text fontWeight="600" fontSize="25px">
                      Collaborations
                    </Text>
                    <Text
                      fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                      mt="10px"
                      color="#666c88"
                    >
                      Open AI smart contracts
                      <Box
                        display={{ base: "block", md: "none" }}
                        as="span"
                      ></Box>{" "}
                      provided by individuals, organizations, projects{" "}
                      <Box
                        display={{ base: "none", md: "none", lg: "block" }}
                        as="span"
                      ></Box>
                      and universities for a collaborative
                      <Box
                        display={{ base: "block", md: "none" }}
                        as="span"
                      ></Box>{" "}
                      progress of AI technology in Blockchain.
                    </Text>
                  </Box>
                  <Flex
                    ml={{ base: "-150px" }}
                    mb={{ base: "0px", md: "-80px" }}
                    display={{ base: "block", md: "none", lg: "none" }}
                    alignItems={{ base: "center", md: "start" }}
                    w={{ base: "150px" }}
                    maxW="530px"
                  >
                    <Image
                      src="/assets/open-phron/ringdown.png"
                      alt="openphron"
                      height="1000"
                      width="1000"
                    />
                  </Flex>
                  {/* <Flex display={{base:"none",md:"none",lg:"block"}}  alignItems={{base:"center",md:"normal"}}  w={{base:"full",md:"full",lg:"full"}}  maxW="530px">
              <Image src="/assets/open-phron/collaborations0.png" alt="openphron" height="1000" width="1000"/>
              </Flex> */}
                  <Flex
                    mr={{ md: "-60px" }}
                    mt={{ md: "-80px" }}
                    display={{ base: "none", md: "block", lg: "none" }}
                    alignItems={{ base: "center", md: "start" }}
                    w={{ base: "full" }}
                    maxW="530px"
                  >
                    <Image
                      src="/assets/open-phron/ringup.png"
                      alt="openphron"
                      height="1000"
                      width="1000"
                    />
                  </Flex>
                </Flex>
              </GridItem>
            </Grid>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
};

export default SectionTwo;
