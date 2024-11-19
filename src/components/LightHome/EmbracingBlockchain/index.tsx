import React from "react";
import { Box, Text, VStack, Container } from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function EmbracingBlock() {
  return (
    <Box my="20">
      <Container maxW="1240px">
        <Text
          fontSize={{
            base: "2xl",
            lg: "4xl",
          }}
          fontWeight={700}
          textAlign="center"
          color="brand.darkGray"
          mb="5"
          as="h2"
          lineHeight="120%"
        >
          Embracing Blockchain <br /> Technology, future-proof
        </Text>

        <Text textAlign="center" color="#5d6380" mb="10">
          Blockchain technology with a twist far from becoming obsolete, it
          evolves every day.
        </Text>

        <Box
          bgPos="center"
          bgSize="cover"
          style={{
            backgroundImage:
              "url('/assets/light-theme-home/embracing-blockchain-bg.png')",
          }}
          p={{ base: "4", sm: "10" }}
          rounded="3xl"
        >
          <Fade right>
            <VStack
              align="flex-start"
              bgColor="#fff"
              px="10"
              py="5"
              rounded="3xl"
              maxW="640px"
              ml="auto"
              mb="10"
              pl={{ sm: "90px" }}
              position="relative"
              pb="10"
            >
              <Box
                position="absolute"
                left={{ sm: "5" }}
                right={{ base: "5", sm: "auto" }}
                top="5"
              >
                <Image
                  src="/assets/light-theme-home/star-icon.png"
                  alt="star-icon"
                  width={50}
                  height={50}
                />
              </Box>
              <Text
                as="h3"
                fontSize={{
                  base: "xl",
                  lg: "2xl",
                }}
                fontWeight={700}
                color="brand.darkGray"
              >
                AI-Driven Consensus
              </Text>
              <Text mb="5">
                With the application of neural networks, Phronesis Consensus
                enhances chain efficiency. In contrast, creates an ever-evolving
                technology for incredible applications.
              </Text>
              <Box
                as="a"
                href="https://docs.phron.ai"
                maxW="200px"
                w="full"
                target="_blank"
                className="btn-grad"
                py="3"
              >
                Explore Phronesis
              </Box>
            </VStack>
          </Fade>

          <Fade right>
            <VStack
              align="flex-start"
              bgColor="#fff"
              px="10"
              py="5"
              rounded="3xl"
              maxW="640px"
              ml="auto"
              pl={{ sm: "90px" }}
              position="relative"
              pb="10"
            >
              <Box
                position="absolute"
                left={{ sm: "5" }}
                right={{ base: "5", sm: "auto" }}
                top="5"
              >
                <Image
                  src="/assets/light-theme-home/dart-icon.png"
                  alt="star-icon"
                  width={50}
                  height={50}
                />
              </Box>
              <Text
                as="h3"
                fontSize={{
                  base: "xl",
                  lg: "2xl",
                }}
                fontWeight={700}
                color="brand.darkGray"
              >
                AI-Driven Consensus
              </Text>
              <Text mb="5">
                With the application of neural networks, Phronesis Consensus
                enhances chain efficiency. In contrast, creates an ever-evolving
                technology for incredible applications.
              </Text>
              <Box
                as="a"
                href="https://docs.phron.ai"
                maxW="200px"
                w="full"
                target="_blank"
                className="btn-grad"
                py="3"
              >
                Explore Phronesis
              </Box>
            </VStack>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}
