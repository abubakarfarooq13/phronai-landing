import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowRight } from "react-icons/lu";
import PartnerCards from "./Cards";
const Partners = [
  {
    id: 9,
    image: "/assets/newPartners/aethir.png",
    width: 100,
    height: 10,
  },
  {
    id: 1,
    image: "/assets/newPartners/coingecko.png",
    width: 130,
    height: 40,
  },
  {
    id: 2,
    image: "/assets/newPartners/luna.png",
    width: 85,
    height: 30,
  },
  {
    id: 3,
    image: "/assets/newPartners/hacken-new.png",
    width: 30,
    height: 30,
  },
  {
    id: 4,
    image: "/assets/newPartners/solidproof.png",
    width: 120,
    height: 40,
  },
  // {
  //   id: 5,
  //   image: "/assets/newPartners/ibc.png",
  //   width: 120,
  //   height: 40,
  // },
  {
    id: 6,
    image: "/assets/newPartners/metabrand.png",
    width: 120,
    height: 40,
  },
  {
    id: 7,
    image: "/assets/newPartners/bitmart.png",
    width: 110,
    height: 40,
  },
  {
    id: 8,
    image: "/assets/newPartners/masterblox.png",
    width: 150,
    height: 10,
  },
];

const Hero = () => {
  return (
    <Box>
      <Container
        maxW="1240px"
        overflow="hidden"
        pt={{ base: "50px", md: "160px" }}
        position="relative"
        pb="50px"
      >
        {" "}
        <video autoPlay loop muted className="hero" playsInline>
          <source src="/assets/holographic.webm" type="video/webm" />
        </video>
        <Flex
          flexDir="column"
          position="relative"
          zIndex="2"
          w="full"
          mt={{ base: "0px", md: "80px" }}
          textAlign="center"
          color="#321b7a"
        >
          <Text
            as="h1"
            lineHeight="110%"
            fontSize={{ base: "32px", md: "60px", lg: "70px" }}
            fontWeight="500"
          >
            AI-Powered for Builders.
            <Box as="br" /> One Prompt for Everyone.
          </Text>
          <Text mt="10px" fontSize={{ base: "16px", md: "24px" }}>
            Train AI models and earn from the network. Launch dApps, deploy
            smart contract,
            <Box as="br" display={{ base: "none", lg: "block" }} />
            leverage AI Agents to manage your contract, and create AI-powered
            Oracles.
            <Box as="br" display={{ base: "none", lg: "block" }} /> All with
            just a prompt.
          </Text>
          <Flex
            gap="20px"
            flexDir={{ base: "column", md: "row" }}
            mt="20px"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              as={Link}
              href="https://app.openphron.ai"
              target="_blank"
              gap="60px"
              bg="#321b7a"
              borderRadius="20px"
              color="#ffffff"
              fontWeight={500}
              px="8"
              py="5"
              border="2px solid #321b7a"
              _hover={{
                bg: "transparent",
                color: "#321b7a",
                fontWeight: 500,
              }}
            >
              Start Building <LuArrowRight />
            </Button>
            <Button
              as={Link}
              href="https://docs.phron.ai"
              target="_blank"
              gap="60px"
              bg="transparent"
              borderRadius="20px"
              fontWeight={500}
              color="#321b7a"
              px="8"
              py="5"
              minW="213px"
              border="2px solid #321b7a"
              _hover={{
                bg: "#321b7a",
                color: "#ffffff",
                fontWeight: 500,
              }}
            >
              Resources
              <LuArrowRight />
            </Button>
          </Flex>
        </Flex>
        <Box
          w="full"
          mt={{ base: "50px", md: "100px" }}
          position="relative"
          zIndex="2"
        >
          <Text
            textAlign={{ base: "center", xl: "left" }}
            as="p"
            color="#321b7a"
            fontSize="20px"
            fontWeight={500}
          >
            Trusted Partners
          </Text>
          <Wrap
            w="full"
            justify={{ base: "center", xl: "space-between" }}
            py="20px"
            spacing="20px"
          >
            {Partners.map((partner) => (
              <WrapItem alignItems="center" key={partner.id}>
                <Image
                  objectFit="contain"
                  objectPosition="center"
                  src={partner.image}
                  alt="partner"
                  width={partner.width}
                  height={partner.height}
                />
              </WrapItem>
            ))}
          </Wrap>
        </Box>
        <PartnerCards />
      </Container>
    </Box>
  );
};

export default Hero;
