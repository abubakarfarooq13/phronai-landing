import React from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
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
import CanvasContainer from "@/components/3d/Chain";

const Fade = require("react-reveal/Fade");

export default function Chain() {
  return (
    <Box id="nft-marketplace" pos="relative" overflow="hidden">
      <Box
        // bgImage="/assets/chain/chain-bg.png"
        // bgPos="center"
        // bgRepeat="no-repeat"
        // bgSize="cover"
        pos="relative"
        id="phronesis-marketplace"
      >
        <Container
          maxW="1160px"
          zIndex={1}
          position="relative"
          pb={{ base: "0px", md: "100px" }}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            pt={{ base: "40px", md: "100px" }}
            justifyContent="space-between"
            spacing="20"
          >
            <VStack
              zIndex={1}
              pt={{ md: "20px", lg: "100px" }}
              w={{ base: "full", md: "50%" }}
              align={{ base: "center", md: "start" }}
              spacing={{ base: "3", md: "6" }}
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
                  fontSize={{
                    base: "27px",
                    sm: "4xl",
                    md: "6xl",
                    "3000px": "7xl",
                  }}
                  lineHeight={{
                    base: "39px",
                    sm: "40px",
                    md: "70px",
                    "3000px": "70px",
                  }}
                  fontWeight={500}
                  textAlign={{ base: "center", md: "start" }}
                >
                  {/* Phronesis:{" "} */}
                  Phron AI:{" "}
                  <Box as="br" display={{ base: "none", md: "block" }} /> The
                  Chain
                </Text>

                <Text
                  mt={{ base: "3", md: "0" }}
                  textAlign={{ base: "center", md: "start" }}
                  color="#c1c1c1"
                  fontSize="20px"
                >
                  {/* Blockchain + AI = No barriers */}
                  From Static, to Dynamic
                </Text>

                <Button
                  mt={{ base: "5", md: "0" }}
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

            <Box
              h={{ base: "500px", md: "500px", xl: "800px" }}
              w={{ base: "full", md: "50%" }}
              // position="absolute"
              // top="100px"
              // right="0px"
              // className="infinit-move-1"
            >
              {/* <Fade right>
                <VStack align="center">
                  <Box maxW={{ base: "300px", md: "full" }}>
                    <Image
                      className="infinit-move-1"
                      src="/assets/chain/chain.png"
                      alt="marketplace-img"
                      width={500}
                      height={708}
                    />
                  </Box>
                </VStack>
              </Fade> */}
              <CanvasContainer />
            </Box>
          </Stack>
          <Text
            textAlign="center"
            color="#c1c1c1"
            maxW="700px"
            mx="auto"
            mt="40px"
            fontSize={{ base: "base", md: "lg" }}
          >
            Phron AI is the first EVM, Proof-of-Stake, Layer 1 blockchain that
            uses the Sophia Protocol (Artificial Intelligence Statistical
            Consensus Mechanism) and Indirect-LTFM (Low Transaction Fee
            Management) Protocol.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
