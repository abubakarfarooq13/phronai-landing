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
    width: 25,
    height: 25,
  },
  {
    id: 2,
    imageUrl: "/assets/simplified/code.png",
    title: "Build Trust Instantly",
    description:
      "openPhron Verifies Your Smart Contract On-Chain for full Transparency!",
    width: 30,
    height: 25,
  },
  {
    id: 3,
    imageUrl: "/assets/simplified/audit.png",
    title: "Audit Your Smart Contract for just $495",
    description: "Powered by SolidProof. Exclusively on openPhron's Dashboard!",
    width: 25,
    height: 25,
  },
  {
    id: 4,
    imageUrl: "/assets/simplified/robo-face.png",
    title: "Unlock Smart Contract Success with openPhron's AI Agent",
    description: "Your Personal Guide and Advisor!",
    width: 30,
    height: 25,
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
    <Box as="section" py={16} bgGradient={bgGradient}>
      <Container maxW="container.xl" px={{ base: 4, md: 6 }}>
        <Box textAlign="center" mb={12}>
          <Text as="h2" color="#321c75" fontSize="4xl" fontWeight="bold" mb={2}>
            Simplified
          </Text>
          <Text color="#321c75" fontSize="lg" maxW="md" mx="auto">
            AI-Powered Smart Contracts, Audit, and Agents
          </Text>
        </Box>

        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          gap={{ base: "50px", md: "20px", lg: "50px" }}
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
            <Stack spacing={6}>
              {data.map((item) => (
                <MotionFlex
                  key={item.id}
                  variants={itemVariants}
                  gap={4}
                  alignItems="flex-start"
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
                      fontSize="base"
                      fontWeight="semibold"
                      mb={1}
                      maxW="300px"
                    >
                      {item.title}
                    </Text>
                    <Text color="#321c75" maxW="400px">
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
