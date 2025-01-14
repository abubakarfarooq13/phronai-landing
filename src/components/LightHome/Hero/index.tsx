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
  Wrap,
  WrapItem,
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

const trustedByLogos = [
  {
    id: 1,
    name: "CoinGecko Logo",
    logoUrl: "/assets/light-theme-home/coingecko-logo.png",
    width: 160,
    height: 100,
  },
  {
    id: 2,
    name: "Alibaba Cloud Logo",
    logoUrl: "/assets/light-theme-home/alibaba-cloud-logo.png",
    width: 140,
    height: 100,
  },
  {
    id: 3,
    name: "Pyth Logo",
    logoUrl: "/assets/light-theme-home/pyth-logo.png",
    width: 100,
    height: 60,
  },
  {
    id: 4,
    name: "QuickNodes Logo",
    logoUrl: "/assets/light-theme-home/quick-node-logo.png",
    width: 150,
    height: 70,
  },
  {
    id: 5,
    name: "AWS Logo",
    logoUrl: "/assets/light-theme-home/aws-logo.png",
    width: 70,
    height: 70,
  },
];

export default function Hero() {
  return (
    <Box
      bgImage="/assets/light-theme-home/hero-image-new.png"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
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
              {/* <Text
                fontSize="2xl"
                lineHeight="130%"
                letterSpacing="1px"
                fontWeight={600}
                // mb="2"
                ml="1"
              >
                Proof of Learning
              </Text> */}
              <Text
                fontSize={{ base: "22px" }}
                lineHeight="100%"
                letterSpacing="1px"
                fontWeight={600}
                color="brand.purple"
                // mb="2"
                // as="h1"
              >
                {/* From Static to Dynamic{" "}
              <Box as="br" display={{ base: "none", md: "block" }} /> with
              AI-Powered Consensus. */}
                Proof of Learning
              </Text>
              <Text
                fontSize={{
                  base: "4xl",
                  lg: "55px",
                }}
                fontWeight={700}
                lineHeight="110%"
                color="brand.darkGray"
              >
                From Static <br /> to Dynamic
              </Text>
              <Text color="#5d6380">
                with the first AI-driven Dynamic Consensus
              </Text>

              <Box>
                <ConnectWalletButton
                  label="Try Phronesis AI consensus"
                  gradientButton
                />
                {/* <Box
                  as="a"
                  whiteSpace="nowrap"
                  href="https://app.openphron.ai"
                  // maxW="200px"
                  w="full"
                  target="_blank"
                  className="btn-grad"
                  py="3"
                >
                  Try Phronesis AI consensus
                </Box> */}
              </Box>
            </Fade>
          </VStack>

          <VStack position="relative" mt="10" w="full">
            <Fade right>
              <Image
                src="/assets/light-theme-home/sophia-robot.png"
                alt="Phronesis Robot Image"
                width={800}
                height={754}
              />
            </Fade>
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
          </VStack>
        </Stack>

        {/* <Grid
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
        </Grid> */}

        <Box>
          {/* <Fade bottom>
            <Text
              fontSize={{ base: "lg", "2340px": "30px" }}
              letterSpacing="2px"
              as="h3"
              mt="20"
              fontWeight={700}
              textAlign="center"
              mb="8"
            >
              Audited By
            </Text>
          </Fade>

          <HStack spacing="14" justifyContent="center">
            <Fade bottom>
              <Box
                _hover={{
                  transform: "translateY(-8px)",
                }}
                transition="all .3s"
              >
                <Image
                  src="/assets/light-theme-home/hacken-logo.png"
                  alt="solid proof"
                  width={50}
                  height={55}
                  // className="logo-image"
                />
              </Box>
            </Fade>

            <Fade bottom>
              <Box
                _hover={{
                  transform: "translateY(-8px)",
                }}
                transition="all .3s"
              >
                <Image
                  src="/assets/light-theme-home/solid-proof.png"
                  alt="solid proof"
                  width={65}
                  height={45}
                  // className="logo-image"
                />
              </Box>
            </Fade>
          </HStack> */}
        </Box>

        {/* <Box>
          <Fade bottom>
            <Text
              fontSize={{ base: "lg", "2340px": "30px" }}
              letterSpacing="2px"
              as="h3"
              mt="20"
              fontWeight={700}
              textAlign="center"
              mb="8"
            >
              Trusted By
            </Text>
          </Fade>
          <Wrap justify="center" align="center" spacing='10'>
            {trustedByLogos.map((logo,i) => (
              <WrapItem key={logo.id}>
                <Fade bottom delay={i*100}>
                  <Box>
                    <Image
                      src={logo.logoUrl}
                      alt={`${logo.name} name`}
                      width={logo.width}
                      height={logo.height}
                    />
                  </Box>
                </Fade>
              </WrapItem>
            ))}
          </Wrap>
        </Box> */}
      </Container>
    </Box>
  );
}
