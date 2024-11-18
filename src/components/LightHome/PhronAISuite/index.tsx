import React from "react";
import { Box, Grid, GridItem, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import AnimatedLines from "./AnimatedLines";
import AnimatedZigzag from "./AnimatedZigzag";

const Fade = require("react-reveal/Fade");

export default function PhronAISuite() {
  return (
    <Box mt="20" px="4">
      {/* <AnimatedZigzag /> */}

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

      <Fade bottom>
        <VStack
          mb="6"
          maxW="320px"
          mx="auto"
          position="relative"
          display={{ base: "flex", md: "none" }}
        >
          <Box position="relative">
            <Image
              src="/assets/light-theme-home/decentralised-text-img.png"
              alt="open decentralised graph"
              width={190}
              height={100}
              style={{
                zIndex: 5,
                position: "relative",
              }}
            />
            <Box
              position="absolute"
              bottom="-60%"
              right="8%"
              transform="scaleX(-1)"
            >
              <AnimatedZigzag height={80} width={60} />
            </Box>
            <Box position="absolute" bottom="-60%" left="8%">
              <AnimatedZigzag height={80} width={60} />
            </Box>
          </Box>
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
          <Box
            position="absolute"
            bottom={{ base: "35%", lg: "40%" }}
            right={{ base: "8%", lg: "12%" }}
            transform="scaleX(-1)"
          >
            <AnimatedZigzag height={80} width={60} />
          </Box>
          <Box
            position="absolute"
            bottom={{ base: "35%", lg: "40%" }}
            left={{ base: "8%", lg: "12%" }}
          >
            <AnimatedZigzag height={80} width={60} />
          </Box>
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
            left="30%"
            bottom="20%"
          >
            <AnimatedLines />
            <AnimatedLines />
          </Stack>
          <Stack
            direction="row"
            spacing="2"
            h="40%"
            position="absolute"
            right="30%"
            bottom="20%"
          >
            <AnimatedLines />
            <AnimatedLines />
          </Stack>
        </VStack>
      </Fade>

      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={{ base: "6", md: "0" }}
        mb="10"
        maxW='1260px'
        mx='auto'
      >
        <Fade bottom>
          <Box position="relative" mt={{ base: "0", md: "10" }}>
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
            <Box position="absolute" bottom="35%" left="10%">
              <AnimatedZigzag height={80} width={60} />
            </Box>
            <Box
              position="absolute"
              bottom="35%"
              right="10%"
              transform="scaleX(-1)"
            >
              <AnimatedZigzag height={80} width={60} />
            </Box>

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
        </Fade>

        <Box mt="-100px" ml='10'>
          <Image
            src="/assets/light-theme-home/arrow-left.png"
            alt="arrow left"
            width={140}
            height={140}
            style={{
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
        </Box>

        <Fade bottom>
          <VStack position="relative" display={{ base: "none", md: "flex" }}>
            <Box position="relative">
              <Image
                src="/assets/light-theme-home/decentralised-text-img.png"
                alt="open decentralised graph"
                width={190}
                height={100}
                style={{
                  zIndex: 5,
                  position: "relative",
                }}
              />
              <Box
                position="absolute"
                bottom="-50%"
                right="24%"
                transform="scaleX(-1)"
              >
                <AnimatedZigzag height={70} width={40} />
              </Box>
              <Box position="absolute" bottom="-50%" left="24%">
                <AnimatedZigzag height={70} width={40} />
              </Box>
            </Box>
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
            <Box
              position="absolute"
              bottom={{ base: "35%", lg: "40%" }}
              right={{ base: "8%", lg: "12%" }}
              transform="scaleX(-1)"
            >
              <AnimatedZigzag height={80} width={60} />
            </Box>
            <Box
              position="absolute"
              bottom={{ base: "35%", lg: "40%" }}
              left={{ base: "8%", lg: "12%" }}
            >
              <AnimatedZigzag height={80} width={60} />
            </Box>
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
              left="30%"
              bottom="20%"
            >
              <AnimatedLines />
              <AnimatedLines />
            </Stack>
            <Stack
              direction="row"
              spacing="2"
              h="40%"
              position="absolute"
              right="30%"
              bottom="20%"
            >
              <AnimatedLines />
              <AnimatedLines />
            </Stack>
          </VStack>
        </Fade>

        <Box mt="-100px" mr='10'>
          <Image
            src="/assets/light-theme-home/arrow-right.png"
            alt="arrow left"
            width={140}
            height={140}
            style={{
              marginLeft: "20px",
              marginRight: "20px",
            }}
          />
        </Box>

        <Fade bottom>
          <Box position="relative" mt={{ base: "0", md: "10" }}>
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
            <Box position="absolute" bottom="35%" left="10%">
              <AnimatedZigzag height={80} width={60} />
            </Box>
            <Box
              position="absolute"
              bottom="35%"
              right="10%"
              transform="scaleX(-1)"
            >
              <AnimatedZigzag height={80} width={60} />
            </Box>
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
        </Fade>
      </Stack>
    </Box>
  );
}
