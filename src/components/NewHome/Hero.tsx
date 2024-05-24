import React from "react";
import {
  Box,
  VStack,
  Text,
  Container,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

// import { Fade, Slide } from "react-awesome-reveal";
const Fade = require("react-reveal/Fade");

export default function Hero() {
  return (
    <Box
    //   bgImage="/assets/new-home/hero-image.png"
    //   bgRepeat="no-repeat"
    //   bgPosition="right"
    >
      <Container maxW="1300px" pt="100px" mb="100px">
        <Stack
          direction={{ base: "column-reverse", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ base: "20", lg: "10" }}
        >
          <VStack
            zIndex={1}
            pt={{ md: "20px", lg: "100px" }}
            w={{ base: "full", lg: "60%" }}
            align={{ base: "center", lg: "start" }}
            pos="relative"
            minH="200px"
            textAlign="center"
          >
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              lineHeight="130%"
              letterSpacing="1px"
              fontWeight={600}
              mb="2"
            >
              From Static to Dynamic{" "}
              <Box as="br" display={{ base: "block", md: "none" }} /> with
              AI-Powered Consensus.
            </Text>
            <Text mb="5" fontSize="17px" color="#ebebeb">
              Introducing the First Layer 0 and Layer 1 Blockchain.
            </Text>
            <Button
              fontFamily="inherit"
              rightIcon={<GoArrowRight fontSize="20px" />}
              rounded="full"
              fontWeight={400}
            >
              Start for free
            </Button>
          </VStack>
          <Box position="absolute" top="0" right="0">
            <Image
              src="/assets/new-home/hero-image.png"
              alt="marketplace-img"
              width={1200}
              height={1054}
              style={{
                marginLeft: "-14px",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
