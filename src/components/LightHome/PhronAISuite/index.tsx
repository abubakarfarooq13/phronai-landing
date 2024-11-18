import React from "react";
import { Box, Grid, GridItem, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AnimatedLines from "./AnimatedLines";
import AnimatedZigzag from "./AnimatedZigzag";

export default function PhronAISuite() {
  return (
    <Box mt="20" px="4">
      <AnimatedZigzag />

      <Text
        fontSize={{
          base: "2xl",
          lg: "4xl",
        }}
        fontWeight={700}
        textAlign="center"
        color="brand.darkGray"
        mb="10"
      >
        PhronAI Blockchain Suite
      </Text>

      <VStack mb="6" display={{ base: "block", md: "none" }}>
        <Image
          src="/assets/light-theme-home/openPhron.png"
          alt="open phron graph"
          width={420}
          height={400}
        />
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing="6"
        mb="10"
      >
        <Box position="relative" mt={{ base: "0", md: "14" }}>
          <Image
            src="/assets/light-theme-home/suite-graph-1.png"
            alt="open phron graph"
            width={290}
            height={400}
            style={{
              zIndex: 5,
              position: "relative",
            }}
          />
          <Stack
            direction="row"
            h="70%"
            position="absolute"
            bottom="0"
            left="51%"
            transform="translateX(-50%)"
            spacing="12px"
          >
            <AnimatedLines />
            <AnimatedLines />
          </Stack>
        </Box>
        <Box position="relative" display={{ base: "none", md: "block" }}>
          <Image
            src="/assets/light-theme-home/suite-graph-2.png"
            alt="open phron graph"
            width={420}
            height={400}
            style={{
              zIndex: 5,
              position: "relative",
            }}
          />
          <Stack
            direction="row"
            h="70%"
            position="absolute"
            bottom="0"
            left="49.5%"
            transform="translateX(-50%)"
            spacing="12px"
          >
            <AnimatedLines />
            <AnimatedLines />
          </Stack>
          <Stack
            direction="row"
            spacing="2"
            h="40%"
            position="absolute"
            left="32"
            bottom="24"
          >
            <AnimatedLines />
            <AnimatedLines />
          </Stack>
          <Stack
            direction="row"
            spacing="2"
            h="40%"
            position="absolute"
            right="32"
            bottom="24"
          >
            <AnimatedLines />
            <AnimatedLines />
          </Stack>
        </Box>
        <Box position="relative" mt={{ base: "0", md: "14" }}>
          <Image
            src="/assets/light-theme-home/suite-graph-3.png"
            alt="open phron graph"
            width={290}
            height={400}
            style={{
              zIndex: 5,
              position: "relative",
            }}
          />
          <Stack
            direction="row"
            h="70%"
            position="absolute"
            bottom="0"
            left="48.7%"
            transform="translateX(-50%)"
            spacing="12px"
          >
            <AnimatedLines />
            <AnimatedLines />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
