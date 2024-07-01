import React from "react";
import Image from "next/image";
import {
  Container,
  Box,
  HStack,
  Text,
  Grid,
  GridItem,
  Divider,
  VStack,
  Stack,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

const logos = [
  {
    id: 1,
    name: "PhronAI Logo White",
    logoSrc: "/assets/brand-assets/phronai-logo.svg",
    isBlack: false,
    pngDownloadLink: "/assets/brand-assets/phronai-logo.png",
    svgDownloadLink: "/assets/brand-assets/phronai-logo.svg",
    width: 200,
    height: 200,
  },

  {
    id: 3,
    name: "PhronAI Logo Black",
    logoSrc: "/assets/brand-assets/phronai-logo-black.svg",
    isBlack: true,
    pngDownloadLink: "/assets/brand-assets/phronai-logo-black.png",
    svgDownloadLink: "/assets/brand-assets/phronai-logo-black.svg",
    width: 200,
    height: 200,
  },
  {
    id: 2,
    name: "PhronZero Logo White",
    logoSrc: "/assets/brand-assets/phronzero-white.svg",
    isBlack: false,
    pngDownloadLink: "/assets/brand-assets/phronzero-white.png",
    svgDownloadLink: "/assets/brand-assets/phronzero-white.svg",
    width: 250,
    height: 200,
  },
  {
    id: 3,
    name: "PhronZero Logo Black",
    logoSrc: "/assets/brand-assets/phronzero-black.svg",
    isBlack: true,
    pngDownloadLink: "/assets/brand-assets/phronzero-black.png",
    svgDownloadLink: "/assets/brand-assets/phronzero-black.svg",
    width: 250,
    height: 200,
  },
];

const tokenIcons = [
  {
    id: 1,
    name: "PhronAI Token",
    logoSrc: "/assets/brand-assets/logo-icon.svg",
    pngDownloadLink: "/assets/brand-assets/logo-icon.png",
    svgDownloadLink: "/assets/brand-assets/logo-icon.svg",
  },
];

export default function CBrandAssets() {
  return (
    <>
      <Box pt={{ base: "100px", md: "150px" }}>
        <Text as="h1" id="logo" textAlign="center" fontSize="4xl" mb="7">
          Logo
        </Text>
        {/* <Text maxW="700px" mx="auto" textAlign="center" mb="20">
          The PhronAI logo displayed in the official colors and usage patterns.
          Do not place the logo on top of other objects and leave a reasonable
          amount of margin around the outside so the logo is clearly visible.
        </Text> */}

        <Container maxW="1060px">
          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap="14"
            mb="16"
          >
            {logos.map((logo) => (
              <GridItem key={logo.id}>
                <Box
                  bgColor={logo.isBlack ? "#fff" : ""}
                  rounded="lg"
                  px="4"
                  mb="3"
                >
                  <Box
                    // bgColor="red"
                    h="100px"
                    display="flex"
                    alignItems="center"
                    rounded="xl"
                    // px="10"
                    maxW="220px"
                  >
                    <Image
                      src={logo.logoSrc}
                      width={logo.width}
                      height={logo.height}
                      alt={logo.name + " logo"}
                    />
                  </Box>
                </Box>
                <HStack alignItems="flex-end" justifyContent="space-between">
                  <Text className="text-center" mt="2">
                    {logo.name}
                  </Text>
                  <HStack>
                    <Text
                      as="a"
                      href={logo.svgDownloadLink}
                      fontSize="xs"
                      bg="#6317fe"
                      px="1.5"
                      py="0.5"
                      rounded="sm"
                      download
                    >
                      SVG
                    </Text>
                    <Text
                      as="a"
                      href={logo.pngDownloadLink}
                      fontSize="xs"
                      bg="#6317fe"
                      px="1.5"
                      py="0.5"
                      rounded="sm"
                      download
                    >
                      PNG
                    </Text>
                  </HStack>
                </HStack>
              </GridItem>
            ))}
          </Grid>

          <Divider borderColor="rgba(255,255,255,0.2)" />

          <Text as="h2" textAlign="center" fontSize="4xl" mb="4" pt="14">
            Token Icon
          </Text>

          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            gap="14"
            mb="14"
          >
            {tokenIcons.map((logo) => (
              <GridItem key={logo.id}>
                <Box
                  h="100px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  rounded="xl"
                  maxW="70px"
                  mx="auto"
                  pb="5"
                >
                  <Image
                    src={logo.logoSrc}
                    width={70}
                    height={70}
                    alt={logo.name + " logo"}
                  />
                </Box>
                <HStack alignItems="flex-end" justifyContent="space-between">
                  <Text className="text-center" mt="2">
                    {logo.name}
                  </Text>
                  <HStack>
                    <Text
                      as="a"
                      href={logo.svgDownloadLink}
                      fontSize="xs"
                      bg="#6317fe"
                      px="1.5"
                      py="0.5"
                      rounded="sm"
                      download
                    >
                      SVG
                    </Text>
                    <Text
                      as="a"
                      href={logo.pngDownloadLink}
                      fontSize="xs"
                      bg="#6317fe"
                      px="1.5"
                      py="0.5"
                      rounded="sm"
                      download
                    >
                      PNG
                    </Text>
                  </HStack>
                </HStack>
              </GridItem>
            ))}
          </Grid>

          <Divider borderColor="rgba(255,255,255,0.2)" />

          <Box pt="14" id="colors">
            <Text as="h2" textAlign="center" fontSize="4xl" pb="10">
              Colors
            </Text>

            <Text textAlign="center" mb="4" fontSize="2xl">
              Primary
            </Text>
            <Box bgColor="#6317fe" py="6" w="full" rounded="xl">
              <Text textAlign="center" fontSize="lg">
                #6317fe
              </Text>
            </Box>
          </Box>

          <Divider borderColor="rgba(255,255,255,0.2)" />

          <Text
            as="h2"
            id="fonts"
            textAlign="center"
            fontSize="4xl"
            mb="8"
            mt="14"
          >
            Fonts
          </Text>

          <Stack
            direction={{ base: "column-reverse", sm: "row" }}
            w="full"
            justifyContent="center"
            spacing="5"
            alignItems="center"
            mb="10"
          >
            <VStack
              bgColor="#6317fe"
              spacing="0"
              px={{ base: "4", sm: "10" }}
              py="4"
              rounded="lg"
            >
              <Text fontSize="lg" fontWeight={700}>
                Formular Bold
              </Text>
              <Text fontSize="lg" fontWeight={500}>
                Formular Medium
              </Text>
              <Text fontSize="lg" fontWeight={400}>
                Formular Regular
              </Text>
            </VStack>
            <VStack
              align={{ base: "center", sm: "start" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Text fontSize="2xl">Formular</Text>
              <Text fontSize="lg">Formular is our primary font.</Text>
            </VStack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
