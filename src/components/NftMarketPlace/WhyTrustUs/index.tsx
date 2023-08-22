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
                <Box className="infinit-move-1">
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
                </Box>
              </Fade>
            </Box>
            <VStack
              w={{ base: "full", md: "50%" }}
              align="start"
              spacing="5"
              pr={{ md: "100px" }}
            >
              <Fade right>
                <Text as="h3" fontWeight={500} fontSize="3xl">
                  As decentralized as possible
                </Text>
                <Text color="#777">
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
              align="start"
              spacing="5"
              pr={{ md: "100px" }}
            >
              <Fade left>
                <Text as="h3" fontWeight={500} fontSize="3xl" lineHeight="40px">
                  It&apos;s all about the
                  <br /> smart contract
                </Text>
                <Text color="#777">
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
                <Box className="infinit-move-2">
                  <Image
                    src="/assets/why-us/notepad.png"
                    alt="cube"
                    width={450}
                    height={400}
                  />
                </Box>
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
