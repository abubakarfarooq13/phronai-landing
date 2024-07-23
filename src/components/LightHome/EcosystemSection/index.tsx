import React from "react";
import { Box, Container, Grid, GridItem, HStack, Text } from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function ExploreEcosystem() {
  return (
    <Container maxW="1240px" py="50px">
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        minH="850px"
        gap="20px"
      >
        <GridItem colSpan={{ base: 1, md: 2 }} rowSpan={{ base: 1, md: 2 }}>
          <Box
            bgImage="/assets/light-theme-home/telemetry-bg.png"
            w="full"
            h="full"
            bgSize={{ base: "cover", md: "100% 100%" }}
            position="relative"
            py={{ base: "10px", md: "30px" }}
            minH="150px"
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
            >
              <Text fontSize="14px" fontWeight={500}>
                Explore Ecosystem
              </Text>
              <IoArrowForwardCircleOutline fontSize="18px" />
            </HStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            bgImage="/assets/light-theme-home/layers-bg.png"
            w="full"
            h="full"
            bgSize="100% 100%"
            position="relative"
            p="30px"
          >
            <Text fontSize="4xl">Layer 0 / Layer 1</Text>
            <Text fontSize="sm">Introducing the first AI Layers Zero</Text>

            <HStack
              className="arrow-btn"
              position="absolute"
              left="30px"
              bottom="25px"
            >
              <Text fontSize="14px" fontWeight={500}>
                Explore Ecosystem
              </Text>
              <IoArrowForwardCircleOutline fontSize="18px" />
            </HStack>
          </Box>
        </GridItem>
        <GridItem>
          <Box
            bgImage="/assets/light-theme-home/phronscan-bg.png"
            w="full"
            h="full"
            bgSize="100% 100%"
            position="relative"
            px="30px"
            py="20px"
            minH="150px"
          >
            <Text fontSize="4xl">PhronScan</Text>
            <Text fontSize="sm">Explore PhronAI Network</Text>

            <HStack
              className="arrow-btn"
              position="absolute"
              left="30px"
              bottom="25px"
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
            bgSize={{ base: "cover", md: "100% 100%" }}
            bgPos={{ base: "right", md: "center" }}
            position="relative"
            p="30px"
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
            >
              <Text fontSize="14px" fontWeight={500}>
                Explore Ecosystem
              </Text>
              <IoArrowForwardCircleOutline fontSize="18px" />
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}
