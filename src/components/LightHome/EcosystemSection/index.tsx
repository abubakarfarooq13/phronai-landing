import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Fade = require("react-reveal/Fade");

export default function ExploreEcosystem() {
  return (
    <Container maxW="1240px" py="50px">
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        minH="850px"
        gap="20px"
      >
        <GridItem
          colSpan={{ base: 1, md: 2 }}
          rowSpan={{ base: 1, md: 2 }}
          bgColor="#9CADFF"
          rounded="20px"
        >
          <Box
            bgImage="/assets/light-theme-home/telemetry-bg.png"
            w="full"
            h="full"
            bgSize="cover"
            bgPos={{ base: "right", lg: "center" }}
            position="relative"
            py={{ base: "10px", md: "30px" }}
            minH="350px"
            px="30px"
            rounded="20px"
          >
            <Text color={{ base: "#000", md: "#fff" }} fontSize="4xl">
              Telemetry
            </Text>
            <Text color={{ base: "#000", md: "#fff" }} fontSize="sm">
              Witness The first Live AI Nodes Ranking
            </Text>

            <HStack
              className="arrow-btn"
              position="absolute"
              // left={{ md: "30px" }}
              right="30px"
              bottom="25px"
              as={Link}
              href="/ecosystem"
            >
              <Text fontSize="14px" fontWeight={500}>
                Explore Ecosystem
              </Text>
              <IoArrowForwardCircleOutline fontSize="18px" />
            </HStack>
          </Box>
        </GridItem>

        <GridItem bgColor="#EFF3F7" rounded="20px">
          <Box
            bgImage="/assets/light-theme-home/layers-bg.png"
            w="full"
            h="full"
            bgSize={{ base: "cover", lg: "100% 100%" }}
            bgPos={{ base: "right", lg: "center" }}
            position="relative"
            p="30px"
            rounded="20px"
            minH="200px"
          >
            <Text fontSize="2xl" lineHeight="130%">
              Explore Layer 0 / Layer 1
            </Text>
            <Text fontSize="sm">Introducing the first AI Layers Zero</Text>

            <HStack
              className="arrow-btn"
              position="absolute"
              left="30px"
              bottom="25px"
              as={Link}
              href="/ecosystem"
            >
              <Text fontSize="14px" fontWeight={500}>
                Explore Ecosystem
              </Text>
              <IoArrowForwardCircleOutline fontSize="18px" />
            </HStack>
          </Box>
        </GridItem>

        <GridItem bgColor="#EFE4FF" rounded="20px">
          <Box
            bgImage="/assets/light-theme-home/phronscan-bg.png"
            w="full"
            h="full"
            bgSize="cover"
            bgPos={{ base: "right", lg: "center" }}
            position="relative"
            px="30px"
            py="10px"
            minH="250px"
            rounded="20px"
          >
            <Text fontSize="2xl">Explore PhronScan</Text>
            <Text fontSize="sm">Explore PhronAI Network</Text>

            <HStack
              className="arrow-btn"
              position="absolute"
              left={{ base: undefined, lg: "30px" }}
              right={{ base: "30px", lg: undefined }}
              bottom="25px"
              as="a"
              target="_blank"
              href="https://testnet.phronscan.io/"
            >
              <Text fontSize="14px" fontWeight={500}>
                Explore Ecosystem
              </Text>
              <IoArrowForwardCircleOutline fontSize="18px" />
            </HStack>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 3 }} bgColor="#DEC6FF" rounded="20px">
          <Box
            bgImage="/assets/light-theme-home/ai-staking-bg.png"
            w="full"
            h="full"
            bgSize={{ base: "cover", lg: "100% 100%" }}
            bgPos={{ base: "right", lg: "center" }}
            position="relative"
            p="30px"
            minH="300px"
            rounded="20px"
          >
            <Text fontSize="4xl" lineHeight="120%">
              Adaptive AI Staking
            </Text>
            <Text
              fontSize="base"
              mt="4"
              textAlign={{ base: "right", md: "left" }}
              lineHeight={{ base: "150%", md: "30px" }}
            >
              Staking to the most efficient nodes. <br />
              Creating the best value of stakers and node providers.
            </Text>

            <HStack
              className="arrow-btn"
              position="absolute"
              bottom="25px"
              left={{ md: "30px" }}
              right={{ base: "30px", md: "auto" }}
              as={Link}
              href="/ecosystem"
            >
              <Text fontSize="14px" fontWeight={500}>
                Explore Ecosystem
              </Text>
              <IoArrowForwardCircleOutline fontSize="18px" />
            </HStack>
          </Box>
        </GridItem>

        <GridItem
          colSpan={{ base: 1, md: 3 }}
          // bgImage="linear-gradient(145deg, rgba(176,255,231,1) 0%, rgba(121,247,209,1) 40%)"
          bgImage="/assets/hacken-bg.png"
          bgPos="center"
          bgSize="cover"
          rounded="20px"
          position="relative"
          // minH="300px"
          p="30px"
        >
          <Box
            position="absolute"
            maxW={{ base: "150px", sm: "200px", md: "280px", lg: "330px" }}
            right="0px"
            top="0px"
          >
            <Image
              src="/assets/hacken-cube.png"
              alt="hacken-cube"
              width={350}
              height={350}
            />
          </Box>
          <VStack
            spacing="4"
            align="flex-start"
            zIndex={99}
            position="relative"
          >
            <Image
              src="/assets/new-home/Hacken.png"
              alt="Hacken logo"
              width={90}
              height={55}
              // className="logo-image"
              style={{
                maxWidth: "50px",
                filter: "brightness(0%)",
              }}
            />

            <Divider
              borderColor="#000"
              borderWidth={{ base: "1px", md: "1.5px" }}
              maxW={{ base: "100%", sm: "60%" }}
              opacity="1"
            />

            <Text
              fontSize={{ base: "22px", md: "32px" }}
              fontWeight={400}
              lineHeight="120%"
            >
              Protocol and Tokenomics Audit{" "}
              <Box as="br" display={{ base: "none", md: "block" }} /> of
              PhronAI&apos;s AI-Powered Layer 0 / Layer 1
              <Box as="br" display={{ base: "none", md: "block" }} /> Blockchain
            </Text>
          </VStack>
          <HStack
            className="arrow-btn"
            position="absolute"
            bottom="25px"
            right={{ base: "30px" }}
            as={Link}
            href="/ecosystem"
          >
            <Text fontSize="14px" fontWeight={500}>
              Explore Ecosystem
            </Text>
            <IoArrowForwardCircleOutline fontSize="18px" />
          </HStack>
        </GridItem>
      </Grid>
    </Container>
  );
}
