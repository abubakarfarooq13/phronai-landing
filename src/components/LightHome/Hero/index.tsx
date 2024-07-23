import React from "react";
import {
  Box,
  VStack,
  Text,
  Container,
  HStack,
  Stack,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import ConnectWalletButton from "../../Shared/ConnectWalletButton";

// import { Fade, Slide } from "react-awesome-reveal";

const Fade = require("react-reveal/Fade");

const stats = [
  {
    id: 1,
    iconSrc: "/assets/light-theme-home/box.png",
    label: "31k",
    description: "Transactions Per Second",
  },
  {
    id: 2,
    iconSrc: "/assets/light-theme-home/clock.png",
    label: "0.9",
    description: "Faster Than Ever Before",
  },
  {
    id: 3,
    iconSrc: "/assets/light-theme-home/dollar-sign.png",
    label: "0.0001",
    description: "Low Cost Forever",
  },
];

export default function Hero() {
  return (
    <Box
      bgImage="/assets/light-theme-home/hero-background-cropped.png"
      bgRepeat="no-repeat"
      bgPosition="bottom"
      overflowX="hidden"
      position="relative"
    >
      <Container
        maxW="1240px"
        pt={{ base: "50px", md: "160px" }}
        position="relative"
      >
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={{ base: "0", lg: "10" }}
          w="full"
        >
          <VStack
            zIndex={1}
            pt={{ md: "20px", lg: "100px" }}
            w={{ base: "full", lg: "60%" }}
            align={{ base: "center", lg: "start" }}
            // pos="relative"
            minH="200px"
            textAlign={{ base: "center", lg: "left" }}
            spacing="4"
          >
            <Fade left>
              <Text
                fontSize="2xl"
                lineHeight="130%"
                letterSpacing="1px"
                fontWeight={600}
                // mb="2"
                ml="1"
              >
                Proof of Learning
              </Text>
              <Text
                // fontSize={{ base: "3xl", sm: "4xl", "2340px": "60px" }}
                fontSize={{
                  base: "3xl",
                  sm: "3xl",
                  lg: "45px",
                  "2340px": "60px",
                }}
                lineHeight="115%"
                letterSpacing="1px"
                fontWeight={600}
                // mb="2"
                as="h1"
              >
                {/* From Static to Dynamic{" "}
              <Box as="br" display={{ base: "none", md: "block" }} /> with
              AI-Powered Consensus. */}
                Build your Layer 1{" "}
                <Box as="br" display={{ base: "none", xl: "block" }} /> in
                minutes
              </Text>
              <Text mb="5" fontSize={{ base: "17px", "2340px": "18px" }}>
                From Static to Dynamic with the first{" "}
                <Box as="br" display={{ base: "none", md: "block" }} /> Layer 0
                and Layer 1 AI-Powered Consensus
              </Text>

              <Box>
                <ConnectWalletButton
                  label="Try Sophia AI consensus"
                  gradientButton
                />
              </Box>
            </Fade>
          </VStack>

          <Fade right>
            <Box position="relative" mt="10">
              <Image
                src="/assets/light-theme-home/sophia-robot.png"
                alt="sophia robot image"
                width={800}
                height={754}
                style={
                  {
                    // marginLeft: "-14px",
                  }
                }
              />
              <Text
                pos="absolute"
                top="40%"
                left="0%"
                bgColor="#fff"
                px="5"
                py="2"
                rounded="full"
                fontSize="14px"
                lineHeight="110%"
              >
                Proof of Learning
              </Text>
              <Text
                pos="absolute"
                right="10%"
                top="10%"
                bgColor="#fff"
                px="5"
                py="2"
                rounded="full"
                fontSize="14px"
                lineHeight="110%"
              >
                Dynamic Node <br />
                Ranking LTFM Protocol
              </Text>
              <Text
                pos="absolute"
                top="50%"
                right="30%"
                bgColor="#fff"
                px="5"
                py="2"
                rounded="full"
                fontSize="14px"
                lineHeight="110%"
              >
                EVM
              </Text>
            </Box>
          </Fade>
        </Stack>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3,1fr)",
          }}
          w="full"
          gap="4"
          marginTop="18px"
          zIndex={1}
          position={{ base: "relative", md: "absolute" }}
          bottom="30px"
          maxW="1240px"
          px={{ base: "0", md: "4" }}
          left={{ md: "50%" }}
          transform={{ md: "translateX(-50%)" }}
        >
          {stats.map((stat, i) => (
            <GridItem
              key={stat.id}
              colSpan={{
                base: 1,
                md: i === 2 ? 2 : 1,
                lg: 1,
              }}
            >
              <Fade delay={i * 300} bottom>
                <HStack
                  bgColor="#fff"
                  px="6"
                  py="4"
                  rounded="xl"
                  spacing="4"
                  w="full"
                  maxW={{
                    base: "full",
                    md: `${i === 2 ? "50%" : "full"}`,
                    lg: "full",
                  }}
                  mx="auto"
                >
                  <Box bgColor="#d8ddfd" px="3" py="2" rounded="lg">
                    <Image
                      src={stat.iconSrc}
                      alt="box"
                      width={20}
                      height={20}
                    />
                  </Box>
                  <Box>
                    <Text fontSize="2xl" lineHeight="110%" fontWeight={700}>
                      {stat.label}
                    </Text>
                    <Text
                      textTransform="uppercase"
                      fontSize="12px"
                      color="#9a9a9a"
                    >
                      {stat.description}
                    </Text>
                  </Box>
                </HStack>
              </Fade>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
