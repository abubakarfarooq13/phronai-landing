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
  GridItem,
  Image as CImage,
  Link,
} from "@chakra-ui/react";
import { BsShieldFillCheck } from "react-icons/bs";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { ImSun } from "react-icons/im";
import { PHRON_INFO_EMAIL } from "@/constant";

const Fade = require("react-reveal/Fade");

export default function WhyTrustUs() {
  return (
    <Box id="why-us">
      <Box pos="relative">
        <Container maxW="1160px" pt="100px" pb="100px">
          <Fade top>
            <Text
              as="h2"
              fontSize={{ base: "5xl", md: "6xl" }}
              lineHeight={{ base: "60px", md: "60px" }}
              fontWeight={500}
              textAlign="center"
            >
              Why Trust Us?
            </Text>
          </Fade>

          {/* 1 */}
          <Stack
            mt="70px"
            direction={{ base: "column", md: "row" }}
            alignItems="center"
          >
            <Box w={{ base: "full", md: "50%" }} pos="relative" px="50px">
              <Fade left>
                <VStack
                  align={{ base: "center", md: "start" }}
                  className="infinit-move-1"
                >
                  <Image
                    src="/assets/cube-shadow.png"
                    width={600}
                    height={600}
                    alt="cube-shadow"
                    style={{
                      position: "absolute",
                      zIndex: -1,
                      bottom: "-60px",
                      left: "60px",
                    }}
                  />
                  <Image
                    src="/assets/why-us/cube.png"
                    alt="cube"
                    width={350}
                    height={300}
                  />
                </VStack>
              </Fade>
            </Box>
            <VStack
              w={{ base: "full", md: "50%" }}
              align={{ base: "center", md: "start" }}
              spacing="5"
              pr={{ md: "100px" }}
              mt={{ base: "5", md: "0" }}
            >
              <Fade right>
                <Text
                  as="h3"
                  fontWeight={500}
                  fontSize={{ base: "2xl", md: "3xl", "3000px": "4xl" }}
                  textAlign={{ base: "center", md: "start" }}
                  lineHeight={{ base: "28px", md: "40px" }}
                >
                  As decentralized as possible
                </Text>
                <Text
                  textAlign={{ base: "center", md: "start" }}
                  color="#777"
                  fontSize={{ base: "base", "3000px": "xl" }}
                >
                  With your NFT, you decide. Trade them without complications in
                  a safe environment.
                </Text>
                <Button
                  variant="primary-outline"
                  fontWeight={400}
                  rounded="full"
                  px="8"
                  py="4"
                  as={Link}
                  href={`mailto:${PHRON_INFO_EMAIL}`}
                >
                  Contact Us
                </Button>
              </Fade>
            </VStack>
          </Stack>

          {/* 2 */}
          <Stack
            mt="70px"
            direction={{ base: "column-reverse", md: "row" }}
            alignItems="center"
          >
            <VStack
              w={{ base: "full", md: "50%" }}
              align={{ base: "center", md: "start" }}
              spacing="5"
              pr={{ md: "100px" }}
              mt={{ base: "5", md: "0" }}
            >
              <Fade left>
                <Text
                  as="h3"
                  fontWeight={500}
                  fontSize={{ base: "3xl", "3000px": "4xl" }}
                  lineHeight="40px"
                  textAlign={{ base: "center", md: "start" }}
                >
                  It&apos;s all about the
                  <br /> smart contract
                </Text>
                <Text
                  color="#777"
                  fontSize={{ base: "base", "3000px": "xl" }}
                  textAlign={{ base: "center", md: "start" }}
                >
                  NFTs will be the key to games, and the method for in-game
                  items. Always yours, until you decide to change.
                </Text>
                {/* <Button
                  variant="primary-outline"
                  fontWeight={400}
                  rounded="full"
                  px="8"
                  py="4"
                >
                  Contact Us
                </Button> */}
              </Fade>
            </VStack>
            <Box w={{ base: "full", md: "50%" }} pos="relative" px="50px">
              <Fade right>
                <VStack
                  align={{ base: "center", md: "start" }}
                  className="infinit-move-2"
                >
                  <Image
                    src="/assets/why-us/notepad.png"
                    alt="cube"
                    width={450}
                    height={400}
                  />
                </VStack>
              </Fade>
            </Box>
          </Stack>
        </Container>
        <CImage
          src="/assets/purple-shadow-left.png"
          pos="absolute"
          top="0px"
          right="0px"
          display={{ base: "none", xl: "flex" }}
          alt="purle-shadow"
          transform="scaleX(-1)"
        />
      </Box>
    </Box>
  );
}
