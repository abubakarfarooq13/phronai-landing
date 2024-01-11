import React from "react";
import Image from "next/image";
import {
  Container,
  Text,
  VStack,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function CPhronZero() {
  return (
    <>
      <Box bgImage="linear-gradient(180deg, rgba(0,0,0,0) 33%, rgba(99,23,254,0.2) 70%)">
        <Container maxW="1160px" pt={{ base: "50px", md: "100px" }} mb="100px">
          <VStack spacing="2" align="center">
            <Text
              textTransform="uppercase"
              fontSize={{ base: "xs", md: "sm", lg: "lg" }}
              lineHeight="15px"
              pl="1"
              fontWeight={400}
              letterSpacing="2px"
              textAlign={{ base: "center", lg: "left" }}
              mb="2"
              color="#5b28ac"
            >
              <Fade bottom>Phron AI</Fade>
            </Text>
            <Text
              as="h1"
              textAlign={{ base: "center", lg: "left" }}
              fontSize={{ base: "5xl", md: "6xl", "3000px": "7xl" }}
              fontWeight={900}
              lineHeight={{ base: "50px", md: "60px", "3000px": "70px" }}
            >
              <Fade bottom>PhronZero</Fade>
            </Text>

            <Text
              fontSize={{ base: "sm", md: "lg", "3000px": "xl" }}
              textAlign="center"
            >
              <Fade bottom>
                <span>
                  From Static to Dynamic <br />
                  One Step Beyond
                </span>
              </Fade>
            </Text>

            <Box>
              <Fade bottom>
                <Image
                  src="/assets/phronzero/header-img.jpg"
                  alt="header-img"
                  width={600}
                  height={400}
                  style={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    marginTop: "50px",
                    boxShadow: "0px 0px 144px 0px rgba(0, 0, 0, 0.39)",
                  }}
                />
              </Fade>
            </Box>
          </VStack>
        </Container>
      </Box>

      <Container maxW="1160px" pb="100px">
        <Fade bottom>
          <Text fontSize="4xl" fontWeight={700} textAlign="center">
            Concept
          </Text>
        </Fade>

        <Fade bottom>
          <Text textAlign="center">
            Applying the AI concept used for Phron AI Chain, an infrastructure
            has been designed to unveil the power{" "}
            <Box as="br" display={{ base: "none", md: "block" }} />
            provided from dynamic Layer Zero, to the chains that are beneath it.
            The concept allows multiple chains to gain advantage{" "}
            <Box as="br" display={{ base: "none", md: "block" }} /> from the
            technology in a simpler way.
          </Text>
        </Fade>
      </Container>

      <Container maxW="1160px" pb="100px">
        <Fade bottom>
          <Text fontSize="4xl" fontWeight={700} textAlign="center">
            Infrastructure
          </Text>
        </Fade>
        <Fade bottom>
          <Text textAlign="center">
            This type of structure provides the communication,{" "}
            <Box as="br" display={{ base: "none", md: "block" }} /> transaction
            and security to establish the link between multiple Zero Chain.
          </Text>
        </Fade>
      </Container>

      <Container maxW="1160px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList
            w="full"
            justifyContent={{ md: "center" }}
            overflow="auto"
            p="2"
          >
            <Tab
              // px="10"
              minW={{ base: "200px", md: "auto" }}
              _selected={{
                bgColor: "#5b28ac",
                color: "#fff",
              }}
              textAlign="center"
            >
              Internal Infrastructure
            </Tab>
            <Tab
              // px="10"
              minW={{ base: "200px", md: "auto" }}
              _selected={{
                bgColor: "#5b28ac",
                color: "#fff",
              }}
              textAlign="center"
            >
              External Infrastructure
            </Tab>
            <Tab
              // px="10"
              minW={{ base: "200px", md: "auto" }}
              _selected={{
                bgColor: "#5b28ac",
                color: "#fff",
              }}
              textAlign="center"
            >
              Zero Chains
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel px="0" pt={{ base: "5", md: "10" }}>
              <VStack>
                <Box>
                  <Fade bottom>
                    <Image
                      src="/assets/phronzero/1-infrastructure.jpg"
                      alt="infrastructure"
                      width={900}
                      height={400}
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />
                  </Fade>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel px="0" pt={{ base: "5", md: "10" }}>
              <VStack>
                <Box>
                  <Fade bottom>
                    <Image
                      src="/assets/phronzero/2-external-infrastructure.jpg"
                      alt="infrastructure"
                      width={900}
                      height={400}
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />
                  </Fade>
                </Box>
              </VStack>
            </TabPanel>
            <TabPanel px="0" pt={{ base: "5", md: "10" }}>
              <VStack>
                <Box>
                  <Fade bottom>
                    <Image
                      src="/assets/phronzero/3-zero-chains.jpg"
                      alt="infrastructure"
                      width={900}
                      height={400}
                      style={{
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                      }}
                    />
                  </Fade>
                </Box>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
}
