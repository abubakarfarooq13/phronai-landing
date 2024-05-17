import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  Stack,
  Image as CImage,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function OurEcosystem() {
  return (
    <Box bgImage="/assets/blockchain-network-bg.jpg">
      <Container
        id="ecosystem"
        maxW="1160px"
        pt={{ base: "70px", md: "100px" }}
        pb="100px"
      >
        <VStack>
          <Fade top>
            <Text
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", "3000px": "6xl" }}
              lineHeight={{ base: "50px", md: "60px", "3000px": "70px" }}
              fontWeight={500}
              textAlign="center"
            >
              Phron AI Ecosystem
            </Text>
          </Fade>

          <VStack
            w="full"
            bgImage="/assets/our-ecosystem/section-bg.png"
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            pt="10"
            pb="14"
            px={{ base: "4", lg: "20" }}
            textAlign="center"
            mt="10"
            spacing="10"
          >
            <Box ml={{ base: "0px", md: "-30px" }} mb="-50px">
              <Fade top>
                <Image
                  src="/assets/our-ecosystem/chain.png"
                  alt="chain icon"
                  width={200}
                  height={150}
                  className="infinit-move-1"
                />
              </Fade>
            </Box>
            <Box>
              <Fade top>
                <Text as="h3" fontSize="2xl" fontWeight={500}>
                  Phron AI Decentralized Exchange
                </Text>

                <Text fontWeight={300} color="#c1c1c1">
                  Enjoy a seamless transition between PHRON and your favorite
                  token
                </Text>
              </Fade>
            </Box>

            <Box>
              <Fade bottom>
                <Image
                  src="/assets/our-ecosystem/swap-new.png"
                  alt="our ecosystem swap"
                  width={900}
                  height={500}
                  style={{ borderRadius: "20px" }}
                />
              </Fade>
            </Box>
            {/* <Fade bottom>
              <Button variant="primary-outline" rounded="full" px="10">
                Learn More
              </Button>
            </Fade> */}
          </VStack>

          <Box
            w="full"
            bgImage="/assets/our-ecosystem/section-2-bg.png"
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            px={{ base: "4", md: "20" }}
            pt="60px"
            pb="10"
            mt="10"
          >
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: "10", lg: "150px" }}
              alignItems="center"
            >
              <VStack spacing="6">
                <Box>
                  <Fade left>
                    <Image
                      src="/assets/our-ecosystem/bridge-new.png"
                      alt="Phron AI bridge"
                      width={400}
                      height={600}
                      style={{
                        borderRadius: "20px",
                      }}
                    />
                  </Fade>
                </Box>
              </VStack>

              <VStack
                align={{ base: "center", lg: "start" }}
                textAlign={{ base: "center", lg: "start" }}
              >
                <Box ml={{ base: "0px", lg: "-65px" }}>
                  <Fade right>
                    <Image
                      src="/assets/our-ecosystem/cube.png"
                      alt="chain icon"
                      width={250}
                      height={150}
                      className="infinit-move-1"
                    />
                  </Fade>
                </Box>

                <Fade right>
                  <Text as="h3" fontSize="2xl" fontWeight={500}>
                    {/* View your transactions{" "} */}
                    {/* <Box as="br" display={{ base: "none", lg: "block" }} />{" "} */}
                    Phron AI Cross Chain Bridge
                  </Text>
                  <Text color="#c1c1c1">
                    Bridge your assets with ease from{" "}
                    <Box as="br" display={{ base: "none", lg: "block" }} /> one
                    chain to another
                  </Text>
                </Fade>
              </VStack>
            </Stack>
            {/* <Fade right>
              <VStack align={{ base: "center", lg: "flex-end" }} mt="10">
                <Button variant="primary-outline" px="10" rounded="full">
                  Learn More
                </Button>
              </VStack>
            </Fade> */}
          </Box>

          <Box
            w="full"
            bgImage="/assets/our-ecosystem/section-3-bg.png"
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            mt="10"
            pb="10"
          >
            {/* <Box display={{ base: "block", lg: "none" }}>
              <Fade left>
                <Image
                  src="/assets/our-ecosystem/phronesis-explorer.jpg"
                  alt="phronesis bridge"
                  width={600}
                  height={600}
                  style={{
                    borderRight: "20px solid #05010c",
                    borderTop: "20px solid #05010c",
                  }}
                />
              </Fade>
            </Box> */}
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={{ base: "5", lg: "100px" }}
              alignItems="center"
              pl={{ base: "4", md: "20", lg: "0" }}
              pt={{ base: "5", lg: "10" }}
              pb={{ base: "5", lg: "10" }}
              pr={{ base: "4", md: "20" }}
              overflow="hidden"
            >
              <Box mt="10">
                <Fade left>
                  <Box ml={{ lg: "-20px" }}>
                    <Image
                      src="/assets/our-ecosystem/_phronesis-explorer-new.jpg"
                      alt="Phron AI bridge"
                      width={1920}
                      height={800}
                      style={{
                        borderLeft: "20px solid #05010c",
                        borderRight: "20px solid #05010c",
                        borderTop: "20px solid #05010c",
                        maxWidth: "600px",
                      }}
                    />
                  </Box>
                </Fade>
              </Box>

              <VStack
                align={{ base: "center", lg: "start" }}
                textAlign={{ base: "center", lg: "start" }}
                pr={{ base: "0", md: "0", lg: "20" }}
              >
                <Box ml={{ base: "0px", lg: "-35px" }} mb="15px">
                  <Fade right>
                    <Image
                      src="/assets/our-ecosystem/phronesis-explorer-side-img.png"
                      alt="chain icon"
                      width={250}
                      height={150}
                      className="infinit-move-1"
                    />
                  </Fade>
                </Box>

                <Fade right>
                  <Text as="h3" fontSize="2xl" fontWeight={500}>
                    Phron Explorer
                  </Text>
                  <Text color="#c1c1c1">
                    Check out all the information{" "}
                    <Box as="br" display={{ base: "none", md: "block" }} /> our
                    blockchain provides
                  </Text>
                </Fade>
              </VStack>
            </Stack>

            {/* <Fade right>
              <VStack
                align={{ base: "center", lg: "flex-end" }}
                mt="10"
                pr={{ lg: "20" }}
              >
                <Button variant="primary-outline" px="10" rounded="full">
                  Learn More
                </Button>
              </VStack>
            </Fade> */}
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
