"use client";

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  Card,
  CardBody,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContractsTable from "./ContractDeployed";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const data = [
  {
    id: 1,
    imageUrl: "/assets/simplified/check.png",
    title: "Create Smart Contract on Leading Blockchains",
    description: "No Code needed with openPhron",
    width: 30,
    height: 30,
  },
  {
    id: 2,
    imageUrl: "/assets/simplified/code.png",
    title: "Build Trust Instantly",
    description:
      "openPhron Verifies Your Smart Contract On-Chain for full Transparency!",
    width: 35,
    height: 30,
  },
  {
    id: 3,
    imageUrl: "/assets/simplified/audit.png",
    title: "Audit Your Smart Contract for just $495",
    description: "Powered by SolidProof. Exclusively on openPhron's Dashboard!",
    width: 30,
    height: 30,
  },
  {
    id: 4,
    imageUrl: "/assets/simplified/robo-face.png",
    title: "Unlock Smart Contract Success with openPhron's AI Agent",
    description: "Your Personal Guide and Advisor!",
    width: 35,
    height: 30,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function SimplifiedSection() {
  const bgGradient = useColorModeValue(
    "linear(to-b, white, gray.50)",
    "linear(to-b, gray.900, gray.800)"
  );
  const iconBgColor = useColorModeValue("blue.50", "blue.900");
  const cardBgColor = useColorModeValue("whiteAlpha.800", "blackAlpha.700");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box as="section" py={10}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={12}>
          <Text
            as="h2"
            color="#321c75"
            lineHeight="50px"
            fontSize={{ base: "30px", md: "50px" }}
            fontWeight="500"
            mb={2}
          >
            Smart Contracts, Audits & AI{" "}
            <Box as="br" display={{ base: "none", md: "block" }} />
            Simplified with openPhron
          </Text>
          <Text
            color="#321c75"
            fontSize={{ base: "13px", md: "15px" }}
            maxW="md"
            mx="auto"
          ></Text>
        </Box>

        <Stack
          direction={{ base: "column", lg: "row" }}
          // justifyContent="center"
          gap={{ base: "50px", md: "20px", lg: "50px" }}
          borderRadius="40px"
          shadow="0px 0px 25px 1px #cad2fd"
          py={{ base: "10px", md: "20px" }}
          px={{ base: "0px", md: "20px" }}
        >
          <Box position="relative" borderRadius="lg" overflow="hidden">
            <ContractsTable />
          </Box>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            pt={{ base: "0px", md: "40px" }}
          >
            <Stack spacing={9}>
              {data.map((item) => (
                <MotionFlex
                  key={item.id}
                  variants={itemVariants}
                  gap={6}
                  alignItems="flex-start"
                  mx={{ base: "25px", md: "50px", lg: "0px" }}
                  mb={{ base: "20px", md: "0px" }}
                >
                  <Box pt={2} borderRadius="lg" width="35px" height="40px">
                    <Box>
                      <Image
                        src={item.imageUrl}
                        alt=""
                        width={item.width}
                        height={item.height}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Text
                      as="h3"
                      color="#321c75"
                      fontSize="20px"
                      fontWeight="semibold"
                      mb={1}
                      maxW="300px"
                    >
                      {item.title}
                    </Text>
                    <Text color="#321c75" fontWeight="medium" maxW="400px">
                      {item.description}
                    </Text>
                  </Box>
                </MotionFlex>
              ))}
            </Stack>
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  );
}
