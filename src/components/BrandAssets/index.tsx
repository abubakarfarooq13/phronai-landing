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
  Button,
  useClipboard,
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
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const {
    onCopy: onCopySecondary,
    value: secondaryValue,
    setValue: setSecondaryValue,
    hasCopied: hasSecondaryCopied,
  } = useClipboard("");
  const {
    onCopy: onCopyGradient,
    value: gradientValue,
    setValue: setGradientValue,
    hasCopied: hasGradientCopied,
  } = useClipboard("");

  return (
    <>
      <Box pt={{ base: "20px", sm: "150px" }}>
        <Text as="h1" id="logo" textAlign="center" fontSize="4xl" mb="7">
          Logo
        </Text>
        {/* <Text maxW="700px" mx="auto" textAlign="center" mb="20">
          The PhronAI logo displayed in the official colors and usage patterns.
          Do not place the logo on top of other objects and leave a reasonable
          amount of margin around the outside so the logo is clearly visible.
        </Text> */}

        <Container maxW="1240px">
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
                  bgColor={logo.isBlack ? "#fff" : "#000"}
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
                      bg="#c34bfb"
                      px="1.5"
                      py="0.5"
                      rounded="sm"
                      color="#fff"
                      download
                    >
                      SVG
                    </Text>
                    <Text
                      as="a"
                      href={logo.pngDownloadLink}
                      fontSize="xs"
                      bg="#c34bfb"
                      px="1.5"
                      py="0.5"
                      rounded="sm"
                      color="#fff"
                      download
                    >
                      PNG
                    </Text>
                  </HStack>
                </HStack>
              </GridItem>
            ))}
          </Grid>

          <Divider borderColor="rgba(0,0,0,0.2)" />

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
                      bg="#c34bfb"
                      color="#fff"
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
                      bg="#c34bfb"
                      color="#fff"
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

          <Divider borderColor="rgba(0,0,0,0.2)" />

          <Box py="14" id="colors">
            <Text as="h2" textAlign="center" fontSize="4xl" pb="10">
              Colors
            </Text>

            {/* <Text textAlign="center" mb="4" fontSize="2xl">
              Primary
            </Text> */}
            <Stack direction={{ base: "column", md: "row" }}>
              <Box
                w="full"
                border="1px solid rgba(0,0,0,.2)"
                rounded="xl"
                pb="2"
              >
                <Box bgColor="#5756f4" py="6" w="full" rounded="xl">
                  <Text textAlign="center" fontSize="lg" color="#fff">
                    #5756f4
                  </Text>
                </Box>
                <Text
                  color="#000"
                  opacity=".8"
                  fontSize="17px"
                  textAlign="center"
                  fontWeight={500}
                  mt="2"
                  cursor="pointer"
                  onClick={() => {
                    setValue("#5756f4");
                    onCopy();
                  }}
                >
                  {hasCopied ? "Copied!" : "Copy"}
                </Text>
              </Box>
              <Box
                w="full"
                border="1px solid rgba(0,0,0,.2)"
                rounded="xl"
                pb="2"
              >
                <Box bgColor="#c34bfb" py="6" w="full" rounded="xl">
                  <Text textAlign="center" fontSize="lg" color="#fff">
                    #c34bfb
                  </Text>
                </Box>
                <Text
                  color="#000"
                  opacity=".8"
                  fontSize="17px"
                  textAlign="center"
                  fontWeight={500}
                  mt="2"
                  cursor="pointer"
                  onClick={() => {
                    setSecondaryValue("#c34bfb");
                    onCopySecondary();
                  }}
                >
                  {hasSecondaryCopied ? "Copied!" : "Copy"}
                </Text>
              </Box>

              <Box
                w="full"
                border="1px solid rgba(0,0,0,.2)"
                rounded="xl"
                pb="2"
              >
                <Box
                  bgImage="linear-gradient(to right, #5756f4, #c34bfb)"
                  py="6"
                  w="full"
                  rounded="xl"
                >
                  <Text textAlign="center" fontSize="lg" color="#fff">
                    #5756f4 - #c34bfb
                  </Text>
                </Box>
                <Text
                  color="#000"
                  opacity=".8"
                  fontSize="17px"
                  textAlign="center"
                  fontWeight={500}
                  mt="2"
                  cursor="pointer"
                  onClick={() => {
                    setGradientValue(
                      "linear-gradient(to right, #5756f4, #c34bfb)"
                    );
                    onCopyGradient();
                  }}
                >
                  {hasGradientCopied ? "Copied!" : "Copy"}
                </Text>
              </Box>
            </Stack>
          </Box>

          <Divider borderColor="rgba(0,0,0,0.2)" />

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
            alignItems="flex-start"
            mb="32"
          >
            {/* <VStack
              bgColor="#E3C6FE"
              spacing="0"
              px={{ base: "4", sm: "10" }}
              py="4"
              rounded="lg"
              w="full"
              maxW="250px"
            >
              <Text as="h4" fontSize="lg" fontWeight={700}>
                Ruberoid Bold
              </Text>
            </VStack> */}
            <VStack
              align={{ base: "center", sm: "start" }}
              textAlign={{ base: "center", sm: "left" }}
              w="full"
              maxW="350px"
            >
              <Text fontSize="2xl" as="h4">
                Ruberoid
              </Text>
              <Text
                fontSize="sm"
                style={{ fontFamily: "var(--font-ruberoid)" }}
              >
                Ruberoid is a squarish geometric sans-serif family reminiscent
                of Italian designs of 1950s and 1960s, but featuring
                considerably rounder shapes to give it a more contemporary feel.
              </Text>
            </VStack>
            <VStack
              align={{ base: "center", sm: "start" }}
              textAlign={{ base: "center", sm: "left" }}
              w="full"
              maxW="350px"
            >
              <Text fontSize="2xl">Inter</Text>
              <Text fontSize="base">
                Inter is a variable font family carefully crafted & designed for
                computer screens.
              </Text>
            </VStack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
