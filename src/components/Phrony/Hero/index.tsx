import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function PhronyHero() {
  return (
    <Box
      pb="60px"
      bgSize="contain"
      bgPos="top"
      bgRepeat="no-repeat"
      pt={{ base: "50px", sm: "100px" }}
      mt={{ base: "0px", sm: "155px" }}
      position="relative"
      minH="600px"
      maxW="1500px"
      bgImage="/assets/phrony/hero-bg.png"
      mx="auto"
    >
      <Container
        maxW="1240px"
        bgImage="/assets/phrony/header-bg.jpg"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        rounded="40px"
        display="flex"
        flexDir={{ base: "column", xl: "row" }}
        alignItems="center"
        justifyContent="space-between"
        pl={{ base: "16px", lg: "80px", xl: "80px" }}
        pr={{ base: "16px", lg: "80px", xl: "160px" }}
        pt={{ base: "26px", lg: "80px", xl: "0px" }}
      >
        <VStack spacing="8" maxW="500px" w="full">
          {/* <Image
            src="/placeholder.svg?height=100&width=200"
            alt="Phrony Logo"
            mb={6}
          /> */}

          <Image
            src="/assets/phrony/phrony-logo.png"
            alt="phrony logo"
            width={300}
            height={150}
          />
          <Box
            as="a"
            href="https://t.me/phron_bot"
            target="_blank"
            w="full"
            maxW="240px"
            className="btn-grad"
          >
            Try it now!
          </Box>
        </VStack>

        <Box
          mt={{ base: "30px", lg: "40px", xl: "-100px" }}
          mb={{ base: "-23px", lg: "-32px" }}
        >
          <Fade right>
            <Image
              src="/assets/phrony/header-cat-image.png"
              alt="header cat image"
              width={450}
              height={450}
            />
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}
