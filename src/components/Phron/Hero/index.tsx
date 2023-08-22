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
    <Box id="nft-marketplace" pos="relative" overflow="hidden">
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
              pt={{ base: "40px", md: "200px" }}
              w={{ base: "full", md: "50%" }}
              align="start"
            >
              <Fade left>
                <Text
                  as="h1"
                  fontSize={{ base: "4xl", md: "5xl" }}
                  lineHeight={{ base: "40px", md: "60px" }}
                  fontWeight={500}
                  mb="1"
                >
                  PHRON: The Coin
                </Text>

                <Text textTransform="uppercase" mb="3" fontWeight={300}>
                  Fastest EVM Layer 1 Blockchain in the World
                </Text>

                <Text color="#c1c1c1">
                  The main fuel for Phron. Buy games, transfer In-game items,
                  make a simple transaction, and so on.
                </Text>

                <Button
                  as={Link}
                  href={`mailto:${PHRON_INFO_EMAIL}`}
                  variant="primary"
                  px="8"
                  py="4"
                  rounded="full"
                >
                  Contact Us
                </Button>
              </Fade>
            </VStack>

            {/* <CImage
              src="/assets/marketplace-bg-shadow.png"
              pos="absolute"
              top="0"
              left={{ base: "0px", md: "100px" }}
              h={{ base: "full", md: "auto" }}
            /> */}

            <Box>
              <Fade right>
                <Image
                  className="infinit-move-1"
                  src="/assets/phron/coin.png"
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
