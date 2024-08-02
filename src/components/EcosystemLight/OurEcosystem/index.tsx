import {
  Box,
  VStack,
  Text,
  Image as CImage,
  Container,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const Fade = require("react-reveal/Fade");
const Ecosystem = () => {
  return (
    <>
      <Box
        overflowX="hidden"
        mt={{ base: "0px", md: "50px", lg: "-50px" }}
        backgroundImage="/assets/ecosystemlight/bgsection2.png"
        bgSize="cover"
        bgPos="center"
        // h="90vh"
      >
        <Container maxW="1240px">
          <Fade bottom>
            <Stack
              direction={{ base: "column", lg: "row" }}
              py="20"
              justifyContent="center"
              spacing="20"
            >
              <VStack
                display="flex"
                justifyContent="center"
                alignItems={{ base: "center", lg: "start" }}
                textAlign="start"
                // width="full"
                // height="full"
              >
                <Text
                  lineHeight="50px"
                  fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
                  fontWeight="600"
                >
                  Phron Explorer
                </Text>
                <Text fontSize="sm" textAlign={{ base: "center" }}>
                  Check out all the information our blockchain provides
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight={600}
                  display="flex"
                  lineHeight="50px"
                  alignItems="center"
                  gap="10px"
                  as="a"
                  target="_blank"
                  href="https://testnet.phronscan.io/"
                  _hover={{
                    textDecor: "underline !important",
                  }}
                >
                  Explorer live <IoArrowForwardCircleOutline size={30} />
                </Text>
              </VStack>

              <Image
                width={600}
                height={400}
                src="/assets/ecosystemlight/section2.png"
                alt="section2"
                style={{
                  margin: "0 auto",
                }}
              />
            </Stack>
          </Fade>
        </Container>
      </Box>
      <Box
        overflowX="hidden"
        // mt="-70px"
        py={{ base: "50px", md: "100px", lg: "100px" }}
        backgroundImage="/assets/ecosystemlight/bgsection33.png"
        bgSize="cover"
        justifyContent="center"
        bgPos="center"
        height="full"
        // h={{ lg: "90vh" }}
      >
        <Container maxW="1240px">
          <Fade bottom>
            <Stack
              direction={{ base: "column-reverse", lg: "row" }}
              py="10px"
              justifyContent="center"
              alignItems="center"
              spacing="20"
            >
              <Image
                width={600}
                height={500}
                src="/assets/ecosystemlight/section3.png"
                alt="section3"
              />
              <VStack
                display="flex"
                justifyContent="center"
                alignItems={{ base: "center", lg: "start" }}
                textAlign="start"
              >
                <Text
                  lineHeight="1.2"
                  fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
                  fontWeight="600"
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Phron AI Cross
                  <Box as="br" display={{ base: "none", lg: "block" }} /> Chain
                  Bridge
                </Text>
                <Text
                  fontSize={{ md: "sm", lg: "sm" }}
                  textAlign={{ base: "center", lg: "left" }}
                >
                  Bridge your assets with ease from <br />
                  one chain to another
                </Text>
                <Text
                  fontSize="xl"
                  fontWeight={600}
                  display="flex"
                  lineHeight="50px"
                  alignItems="center"
                  gap="10px"
                >
                  {/* Bridge live <IoArrowForwardCircleOutline size={30} /> */}
                  Coming Soon
                </Text>
              </VStack>
            </Stack>
          </Fade>
        </Container>
      </Box>
      <Box
        // h={{ md: "0px", lg: "90vh" }}
        overflowX="hidden"
        overflowY="hidden"
        // mt="-50px"
        py={{ base: "50px", md: "100px", lg: "100px" }}
        backgroundImage="/assets/ecosystemlight/bgsection4.png"
        bgSize="cover"
        bgPos="center"
      >
        <Container maxW="1240px">
          <Fade bottom>
            <Box
              pl={{ xl: "80px" }}
              mt={{ lg: "-50px" }}
              display={{ base: "grid", md: "grid", lg: "flex" }}
              justifyContent={{ base: "center", md: "center" }}
              gap={{ base: "10px", md: "0px", lg: "20px" }}
              height="full"
              width="full"
              color="#000"
            >
              <Stack
                direction={{ base: "column", lg: "row" }}
                justifyContent="center"
                alignItems="center"
                pt={{ lg: "10" }}
                mt={{ lg: "12" }}
                spacing="32"
                // w="100%"
              >
                <VStack
                  alignItems={{ base: "center", lg: "start" }}
                  textAlign="start"
                >
                  <Text
                    lineHeight="1.2"
                    fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }}
                    fontWeight="600"
                    textAlign={{ base: "center", md: "center", lg: "start" }}
                  >
                    Phron AI
                    <Box as="br" display={{ base: "none", lg: "block" }} />
                    Decentralized Exchange
                  </Text>
                  <Text
                    fontSize="sm"
                    textAlign={{ base: "center", lg: "start" }}
                  >
                    Enjoy a seamless transition between PHRON and your favorite
                    token
                  </Text>
                  <Text
                    fontSize="xl"
                    fontWeight={600}
                    display="flex"
                    lineHeight="50px"
                    alignItems="center"
                    gap="10px"
                  >
                    {/* Exchange live <IoArrowForwardCircleOutline size={30} /> */}
                    Coming Soon
                  </Text>
                </VStack>
                <Image
                  width={550}
                  height={450}
                  src="/assets/ecosystemlight/section423.png"
                  alt="section4"
                />
              </Stack>
            </Box>
          </Fade>
        </Container>
      </Box>
    </>
  );
};

export default Ecosystem;
