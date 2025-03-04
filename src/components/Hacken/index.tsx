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
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Fade = require("react-reveal/Fade");

export default function HackenSection() {
  return (
    <Box py={12} px={4} maxW="1200px" mx="auto">
      <Box
        // bgImage="linear-gradient(145deg, rgba(176,255,231,1) 0%, rgba(121,247,209,1) 40%)"
        bgImage="/assets/hacken-bg.png"
        bgPos="center"
        bgSize="100% 100%"
        rounded="30px"
        position="relative"
        minH={{ md: "300px" }}
        py="30px"
        px="60px"
        as="a"
        href="https://hacken.io/case-studies/phronai/?utm_source=hackenclub&utm_medium=post&utm_campaign=phronai-case-study"
        target="_blank"
        display="flex"
        overflow="hidden"
      >
        <Box
          position="absolute"
          maxW={{ base: "150px", sm: "200px", md: "240px", lg: "330px" }}
          right="0px"
          top="0px"
        >
          <Image
            src="/assets/hacken-cube.png"
            alt="hacken-cube"
            width={350}
            height={250}
          />
        </Box>
        <VStack
          spacing="4"
          align="flex-start"
          zIndex={99}
          position="relative"
          mb={{ base: "10", md: "0" }}
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

          {/* <Divider
            borderColor="#000"
            borderWidth={{ base: "1px", md: "1.5px" }}
            maxW={{ base: "100%", sm: "60%" }}
            opacity="1"
          /> */}

          <Text
            fontSize={{ base: "22px", md: "30px" }}
            fontWeight={400}
            lineHeight="120%"
          >
            Protocol and Tokenomics Audit{" "}
            <Box as="br" display={{ base: "none", md: "block" }} /> of
            PhronAI&apos;s AI-Powered Layer 0 / Layer 1
            <Box as="br" display={{ base: "none", lg: "block" }} /> Blockchain
          </Text>
        </VStack>
        <HStack
          className="arrow-btn"
          position="absolute"
          bottom="25px"
          left={{ base: "60px" }}
          // as={Link}
          // href="https://hacken.io/case-studies/phronai/?utm_source=hackenclub&utm_medium=post&utm_campaign=phronai-case-study"
          // target="_blank"
          _hover={{ textDecor: "none" }}
          zIndex={100}
          color="#fff"
          bgColor="#090909"
          py="10px"
          px="15px"
          rounded="full"
        >
          <Text fontSize="14px" fontWeight={500}>
            hacken.io
          </Text>
          <IoArrowForwardCircleOutline fontSize="18px" />
        </HStack>
      </Box>
    </Box>
  );
}
