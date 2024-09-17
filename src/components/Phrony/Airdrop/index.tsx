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

export default function Airdrop() {
  return (
    <Container
      maxW="1240px"
      bgImage="/assets/phrony/airdrop-bg.jpg"
      bgSize="cover"
      bgPos={{ base: "left", md: "center" }}
      minH="440px"
      bgRepeat="no-repeat"
      rounded="40px"
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      pl={{ base: "40px", md: "80px" }}
      pr={{ base: "40px", md: "80px", xl: "160px" }}
      _after={{
        content: `''`,
        background: "#000",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "0px",
        top: "0px",
        bottom: "0px",
        right: "0px",
        opacity: ".4",
        display: { base: "block", md: "none" },
      }}
      position="relative"
      overflow="hidden"
    >
      <VStack
        color={{ base: "#fff", md: "#000" }}
        zIndex={1}
        position="relative"
        maxW={{ base: "full", md: "400px" }}
      >
        <Text as="h2" fontSize="34px" lineHeight="120%" mb={4}>
          The common airdrop, but funnier than ever
        </Text>
        <Text fontSize="lg">
          Enjoy earning $PHRON through a gamified system that provides an
          interactive and easy way to earn tokens and have fun!
        </Text>
      </VStack>
    </Container>
  );
}
