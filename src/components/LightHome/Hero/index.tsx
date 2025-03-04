import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowRight } from "react-icons/lu";
const Partners = [
  {
    id: 1,
    image: "/assets/newPartners/coinmarket.png",
    width: 120,
    height: 120,
  },
  {
    id: 2,
    image: "/assets/newPartners/luna.png",
    width: 90,
    height: 90,
  },
  {
    id: 3,
    image: "/assets/newPartners/hacken.png",
    width: 100,
    height: 100,
  },
  {
    id: 4,
    image: "/assets/newPartners/solidproof.png",
    width: 100,
    height: 100,
  },
  {
    id: 5,
    image: "/assets/newPartners/ibc.png",
    width: 100,
    height: 100,
  },
  {
    id: 6,
    image: "/assets/newPartners/metabrand.png",
    width: 100,
    height: 100,
  },
  {
    id: 7,
    image: "/assets/newPartners/bitmart.png",
    width: 100,
    height: 100,
  },
];
const index = () => {
  return (
    <Box>
      <Container
        maxW="1240px"
        pt={{ base: "50px", md: "160px" }}
        position="relative"
        pb="50px"
      >
        {" "}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            // display: "flex",
            // justifyContent: "center",

            position: "absolute",
            // top: "50%",
            transform: "translateY(-12%)",
            // left: "50%",
            width: "100%",
            height: "500px",
            zIndex: 1,
            objectFit: "contain",
            // transform: "translate(-50%, -50%)",
          }}
        >
          <source src="/assets/holographic.mp4" type="video/mp4" />
        </video>
        <Flex
          flexDir="column"
          position="relative"
          zIndex="2"
          w="full"
          mt="80px"
          textAlign="center"
          color="#321b7a"
        >
          <Text as="h1" lineHeight="50px" fontSize="50px" fontWeight="500">
            AI-Powered for Builders.
            <Box as="br" /> One Prompt for Everyone.
          </Text>
          <Text mt="10px" fontSize="15px">
            Train AI models and earn from the network. Launch L1s, deploy smart
            contract,
            <Box as="br" />
            leverage AI Agents to manage your contract, and create AI-powered
            Oracles.
            <Box as="br" /> All with just a promt.
          </Text>
          <Flex gap="20px" mt="20px" justifyContent="center">
            <Button
              gap="60px"
              bg="#321b7a"
              borderRadius="20px"
              color="#ffffff"
              fontWeight={500}
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
              gap="60px"
              bg="transparent"
              borderRadius="20px"
              fontWeight={500}
              color="#321b7a"
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
        <Box w="full" mt="100px" position="relative" zIndex="2">
          <Text as="p" color="#321b7a" fontSize="13px" fontWeight={500}>
            Trusted Partners
          </Text>
          <Grid w="full" py="20px" templateColumns="repeat(7, 1fr)">
            {Partners.map((partner) => (
              <GridItem alignItems="center" w="full" h="full" key={partner.id}>
                {" "}
                <Image
                  objectFit="contain"
                  objectPosition="center"
                  src={partner.image}
                  alt="partner"
                  width={partner.width}
                  height={partner.height}
                />{" "}
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Box w="full" position="relative" zIndex="2">
          <Grid w="full" gap="20px" templateColumns="repeat(3, 1fr)">
            <GridItem
              bgImage="linear-gradient(90deg, #ffffff 0%, #eff0fc 100%) "
              maxW="350px"
              borderRadius="25px"
              px="10px"
              _hover={{ boxShadow: "0px 3px 6px 4px #e3e1fe" }}
            >
              <Flex justifyContent="space-between" alignItems="center" p="20px">
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  color="#321b7a"
                  fontWeight={500}
                  h="full"
                >
                  <Box>
                    <Text fontSize="25px">OpenPhron</Text>
                  </Box>
                  <Flex alignItems="center" as={Link} href="" fontSize="12px">
                    Launch <FiArrowUpRight />
                  </Flex>
                </Flex>
                <Box h="full">
                  <Image
                    src="/assets/newPartners/atom.png"
                    width={100}
                    height={100}
                    alt=""
                  />
                </Box>
              </Flex>
            </GridItem>
            <GridItem
              bgImage="linear-gradient(90deg, #ffffff 0%, #eff0fc 100%) "
              maxW="350px"
              px="10px"
              borderRadius="25px"
              _hover={{ boxShadow: "0px 3px 6px 4px #e3e1fe" }}
            >
              <Flex justifyContent="space-between" alignItems="center" p="20px">
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  color="#321b7a"
                  fontWeight={500}
                >
                  <Text lineHeight="25px" fontSize="25px">
                    AI Layer 0
                    <Box as="br" />
                    Testnet
                  </Text>
                  <Flex alignItems="center" as={Link} href="" fontSize="12px">
                    Launch <FiArrowUpRight />
                  </Flex>
                </Flex>
                <Image
                  src="/assets/newPartners/box1.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </Flex>
            </GridItem>
            <GridItem
              bgImage="linear-gradient(90deg, #ffffff 0%, #eff0fc 100%) "
              maxW="350px"
              px="10px"
              borderRadius="25px"
              _hover={{ boxShadow: "0px 3px 6px 4px #e3e1fe" }}
            >
              <Flex justifyContent="space-between" alignItems="center" p="20px">
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  color="#321b7a"
                  fontWeight={500}
                >
                  <Text fontSize="25px">Nodes</Text>
                  <Flex alignItems="center" as={Link} href="" fontSize="12px">
                    Launch <FiArrowUpRight />
                  </Flex>
                </Flex>
                <Image
                  src="/assets/newPartners/layerbox1.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
