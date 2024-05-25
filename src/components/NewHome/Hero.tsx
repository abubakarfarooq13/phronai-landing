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
// const Fade = require("react-reveal/Fade");

export default function Hero() {
  return (
    <Box
      //   bgImage="/assets/new-home/hero-image.png"
      //   bgRepeat="no-repeat"
      //   bgPosition="right"
      position="relative"
      overflowX="hidden"
      pb={{ md: "250px" }}
    >
      <Container maxW="1300px" pt={{ base: "130px", md: "100px" }} mb="100px">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
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
          >
            <Text
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="130%"
              letterSpacing="1px"
              fontWeight={600}
              mb="2"
            >
              From Static to Dynamic{" "}
              <Box as="br" display={{ base: "none", md: "block" }} /> with
              AI-Powered Consensus.
            </Text>
            <Text mb="5" fontSize="17px" color="#ebebeb">
              Introducing the First Layer 0 and Layer 1 Blockchain.
            </Text>
            {/* <Button
              fontFamily="inherit"
              rightIcon={<GoArrowRight fontSize="20px" />}
              rounded="full"
              fontWeight={400}
            >
              Start for free
            </Button> */}
          </VStack>
          <Box
            position={{ lg: "absolute" }}
            top="0"
            right={{ lg: "-30%", xl: "0px" }}
          >
            {/* <Image
              src="/assets/new-home/hero-image.png"
              alt="marketplace-img"
              width={1200}
              height={1054}
              style={{
                marginLeft: "-14px",
              }}
            /> */}
            <video width="1200" height="1054" autoPlay playsInline muted loop>
              <source
                src="/assets/new-home/neural-video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
