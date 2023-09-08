import React from "react";
import Image from "next/image";
import {
  Box,
  Button,
  Container,
  Stack,
  VStack,
  Text,
  Image as CImage,
  Link as CLink,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function Chain() {
  return (
    <Box id="nft-marketplace" pos="relative" overflow="hidden">
      <Box
        bgImage="/assets/chain/chain-bg.png"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="relative"
        id="phronesis-marketplace"
      >
        <Container maxW="1160px">
          <Stack
            direction={{ base: "column", md: "row" }}
            pt={{ base: "40px", md: "100px" }}
            pb="100px"
            justifyContent="space-between"
            spacing="20"
          >
            <VStack
              zIndex={1}
              pt={{ md: "100px" }}
              w={{ base: "full", md: "50%" }}
              align="start"
              spacing="6"
            >
              <Fade left>
                <Text
                  textTransform="uppercase"
                  fontSize="xs"
                  lineHeight={{ base: "15px", "3000px": "20px" }}
                  pl="1"
                  fontWeight={300}
                >
                  READY TO EMBRACE THE FUTURE
                </Text>

                <Text
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl", "3000px": "7xl" }}
                  lineHeight={{ base: "40px", md: "70px", "3000px": "70px" }}
                  fontWeight={500}
                >
                  Phronesis: <br /> The Chain
                </Text>

                <Text color="#c1c1c1" fontSize={{ "3000px": "20px" }}>
                  By applying AI statistical algorithms, Phronesis Chain
                  provides the fastest Layer 1 Blockchain with the best Web 3.0
                  infrastructure for developers.
                </Text>

                <Button
                  as={CLink}
                  href="https://phron.ai/whitepaper.pdf"
                  target="_blank"
                  variant="primary"
                  px="8"
                  py="4"
                  rounded="full"
                  fontSize={{ "3000px": "lg" }}
                >
                  Check our Whitepaper
                </Button>
              </Fade>
            </VStack>

            <Box>
              <Fade right>
                <Image
                  className="infinit-move-1"
                  src="/assets/chain/chain.png"
                  alt="marketplace-img"
                  width={500}
                  height={708}
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
