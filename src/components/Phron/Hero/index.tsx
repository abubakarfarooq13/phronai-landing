import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  VStack,
  Text,
  Image as CImage,
  Button,
  Link,
} from "@chakra-ui/react";
import { PHRON_INFO_EMAIL } from "@/constant";

const Fade = require("react-reveal/Fade");

export default function PhronesisMarketplace() {
  return (
    <Box id="nft-marketplace" pos="relative" pt="70px" overflow="hidden">
      <CImage
        src="/assets/header-left-shadow.png"
        pos="absolute"
        left="0px"
        display={{ base: "none", xl: "flex" }}
      />

      <CImage
        src="/assets/purple-shadow-left.png"
        pos="absolute"
        top="-100px"
        left="0px"
        display={{ base: "none", xl: "flex" }}
      />

      <CImage
        src="/assets/purple-shadow-header-top.png"
        pos="absolute"
        top="0px"
        left="0px"
        w="full"
        maxW="50%"
        display={{ base: "none", xl: "flex" }}
      />
      <Box id="phron">
        <Container maxW="1160px">
          <Stack
            direction={{ base: "column", md: "row" }}
            pb="200px"
            justifyContent="space-between"
            spacing="20"
          >
            <VStack
              zIndex={1}
              pt={{ base: "40px", xl: "200px" }}
              w={{ base: "full", md: "50%" }}
              align="start"
            >
              <Fade left>
                <Text
                  as="h1"
                  fontSize={{ base: "4xl", md: "5xl", "3000px": "7xl" }}
                  lineHeight={{ base: "40px", md: "60px", "3000px": "70px" }}
                  fontWeight={500}
                  mb={{ base: "1", "3000px": "3" }}
                >
                  PHRON: The Coin
                </Text>

                <Text
                  color="#c1c1c1"
                  fontSize={{ base: "base", "3000px": "xl" }}
                >
                  Phron AI introduces a new proprietary consensus layer
                  alongside Machine Learning Algorithms that aims to push
                  blockchain technology to a point of having no barriers.
                </Text>

                {/* <Button
                  as={Link}
                  href={`mailto:${PHRON_INFO_EMAIL}`}
                  variant="primary"
                  px="8"
                  py="4"
                  rounded="full"
                >
                  Contact Us
                </Button> */}
              </Fade>
            </VStack>

            {/* <CImage
              src="/assets/marketplace-bg-shadow.png"
              pos="absolute"
              top="0"
              left={{ base: "0px", md: "100px" }}
              h={{ base: "full", md: "auto" }}
            /> */}

            <Box w={{ base: "full", md: "50%", xl: "60%" }}>
              <Fade right>
                <Image
                  className="infinit-move-1"
                  src="/assets/phron/coin-new.png"
                  alt="marketplace-img"
                  width={800}
                  height={800}
                  priority
                />
              </Fade>
            </Box>
          </Stack>

          {/* Connecting NFT marketplace with Metaverse */}
        </Container>
      </Box>
    </Box>
  );
}
