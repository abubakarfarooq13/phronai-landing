import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Text,
  Stack,
  VStack,
  Button,
  HStack,
  Grid,
  WrapItem,
  Image as CImage,
  Wrap,
} from "@chakra-ui/react";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { ImSun } from "react-icons/im";

const Fade = require("react-reveal/Fade");

export default function WhyUs() {
  return (
    <Box id="why-us">
      <Box pos="relative" pt={{ base: "100px", lg: "200px" }} pb="100px">
        <CImage
          src="/assets/purple-shadow-left.png"
          pos="absolute"
          top="0px"
          left="0px"
          display={{ base: "none", xl: "flex" }}
          alt="purle-shadow"
        />
        <Container maxW="1160px" pb="100px">
          <Fade top>
            <Text
              as="h2"
              fontSize={{ base: "5xl", md: "6xl" }}
              lineHeight={{ base: "50px", md: "60px" }}
              fontWeight={500}
              textAlign="center"
              mb="10"
            >
              Why Trust Us?
            </Text>
          </Fade>

          <VStack mb="10">
            <Fade bottom>
              <HStack>
                <Image
                  src="/assets/low-cost-icon.png"
                  alt="low-cost-icon"
                  width={10}
                  height={10}
                />
                <Text fontSize="2xl" lineHeight="10px">
                  Low cost, forever
                </Text>
              </HStack>
              <Text fontSize="sm" color="#777">
                less than
              </Text>
              <Text
                background="linear-gradient(180deg, #8644c8 0%, #1f0935 100%)"
                backgroundClip="text"
                fontSize={{ base: "7xl", md: "9xl" }}
                lineHeight="114px"
                fontWeight={700}
                textAlign="center"
              >
                0.00001 $
              </Text>
            </Fade>
          </VStack>
          <VStack>
            <Fade bottom>
              {/* <HStack justifyContent="center" w="full"> */}
              <Text
                textAlign="center"
                fontSize="2xl"
                lineHeight={{ base: "24px", md: "10px" }}
              >
                <Image
                  src="/assets/speed-meter-icon.png"
                  alt="speed-meter-icon"
                  width={20}
                  height={10}
                  style={{
                    display: "inline-flex",
                    marginRight: "10px",
                  }}
                />
                <Text as="span">Faster than ever before</Text>
              </Text>
              {/* </HStack> */}
              <Text
                background="linear-gradient(180deg, #8644c8 0%, #1f0935 100%)"
                backgroundClip="text"
                fontSize={{ base: "4xl", md: "7xl" }}
                lineHeight={{ base: "50px", md: "114px" }}
                fontWeight={500}
                textAlign="center"
              >
                31,000+ TPS, 0.9 seconds
              </Text>
            </Fade>
          </VStack>

          <Fade bottom>
            <Wrap w="full" spacing="5" justify={{ base: "center" }}>
              <WrapItem w="full" maxW={{ base: "full", md: "340px" }}>
                <VStack
                  backgroundImage="linear-gradient(148deg, rgba(41,20,82,1) 0%, #1f0935 94%);"
                  rounded="27px"
                  border="3px solid #261250"
                  py="10"
                  px="8"
                  alignItems="center"
                  spacing="5"
                  w="full"
                >
                  <HStack justifyContent="center" alignItems="flex-start">
                    <Box mt="1">
                      <BsShieldFillCheck />
                    </Box>
                    <Text fontSize="2xl" lineHeight="28px" textAlign="center">
                      Making security our priority
                    </Text>
                  </HStack>
                  {/* <Text
                    color="#c1c1c1"
                    fontSize={{ base: "sm", "3000px": "lg" }}
                    textAlign="center"
                  >
                    We promise your assets are safe with us.
                  </Text> */}
                </VStack>
              </WrapItem>
              <WrapItem w="full" maxW={{ base: "full", md: "340px" }}>
                <VStack
                  backgroundImage="linear-gradient(148deg, rgba(41,20,82,1) 0%, #1f0935 94%);"
                  rounded="27px"
                  border="3px solid #261250"
                  py="10"
                  px="8"
                  alignItems="center"
                  spacing="5"
                  w="full"
                >
                  <HStack justifyContent="center" alignItems="flex-start">
                    <Box mt="1">
                      <AiTwotoneThunderbolt />
                    </Box>
                    <Text fontSize="2xl" lineHeight="28px" textAlign="center">
                      Transactions: Faster than ever
                    </Text>
                  </HStack>
                  {/* <Text
                    color="#c1c1c1"
                    fontSize={{ base: "sm", "3000px": "lg" }}
                    textAlign="center"
                  >
                    Processed within a human breath.
                  </Text> */}
                </VStack>
              </WrapItem>
              <WrapItem w="full" maxW={{ base: "full", md: "340px" }}>
                <VStack
                  backgroundImage="linear-gradient(148deg, rgba(41,20,82,1) 0%, #1f0935 94%);"
                  rounded="27px"
                  border="3px solid #261250"
                  py="10"
                  px="8"
                  alignItems="center"
                  spacing="5"
                  w="full"
                >
                  <HStack justifyContent="center" alignItems="flex-start">
                    <Box mt="1">
                      <ImSun />
                    </Box>
                    <Text fontSize="2xl" lineHeight="28px" textAlign="center">
                      Decentralized and unstoppable
                    </Text>
                  </HStack>
                  {/* <Text
                    color="#c1c1c1" 
                    fontSize={{ base: "sm", "3000px": "lg" }}
                    textAlign="center"
                  >
                    censorship resistant.
                  </Text> */}
                </VStack>
              </WrapItem>
            </Wrap>
          </Fade>
        </Container>
      </Box>
    </Box>
  );
}
