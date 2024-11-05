import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { FaLink, FaWallet } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";

const BuiltProjectCard = ({ name, description, icon }: any) => (
  <VStack
    bg={useColorModeValue("white", "gray.800")}
    // boxShadow="md"
    borderRadius="lg"
    p={6}
    transition="all 0.3s"
    borderWidth="1px"
    borderColor="gray.100"
    _hover={{
      transform: "translateY(-10px)",
    }}
    align="center"
    spacing="2"
    textAlign="center"
  >
    <Box mb="0">{icon}</Box>
    <Text
      as="h3"
      size="2xl"
      fontWeight={700}
      color={useColorModeValue("blue.900", "blue.200")}
    >
      {name}
    </Text>
    <Text fontSize="sm" color={useColorModeValue("blue.700", "blue.300")}>
      {description}
    </Text>
  </VStack>
);

const BuildingProjectCard = ({ name, description, icon }: any) => (
  <VStack
    align="center"
    spacing={4}
    transition="all .3s"
    textAlign="center"
    _hover={{
      transform: "translateY(-10px)",
    }}
  >
    <Flex
      w={14}
      h={14}
      bg={useColorModeValue("blue.200", "blue.700")}
      borderRadius="full"
      align="center"
      justify="center"
    >
      <Image
        src={icon}
        alt={`${name} icon`}
        width={50}
        height={50}
        style={{
          borderRadius: "50%",
        }}
      />
    </Flex>
    <Heading
      as="h3"
      size="sm"
      textAlign="center"
      color={useColorModeValue("blue.900", "blue.200")}
    >
      {name}
    </Heading>
    <Text
      fontSize="sm"
      textAlign="center"
      color={useColorModeValue("blue.700", "blue.300")}
    >
      {description}
    </Text>
  </VStack>
);

export default function BuildingOnUs() {
  const builtProjects = [
    {
      name: "LendLand",
      description:
        "LendLand a next-gen blockchain platform on the PhronAI Network, transforming DeFi lending and borrowing with user-friendly tools and secure measures",
      icon: (
        <Image
          src="/assets/ecosystemlight/lendland-logo.png"
          alt={`lendland icon`}
          width={40}
          height={40}
        />
      ),
    },
    {
      name: "PhronAI Dex",
      description:
        "Trade assets securely within the PhronAI network with our user-friendly decentralized exchange.",
      icon: (
        <Image
          src="/assets/brand-assets/logo-icon.svg"
          alt={`phronai token icon`}
          width={40}
          height={40}
        />
      ),

      // icon: <FaLink fontSize="40px" color="#c34bfb" />,
      // icon: "🔄"
    },
    {
      name: "PhronAI Bridge",
      description:
        "Effortlessly transfer assets between networks with PhronAI's reliable cross-chain bridge.",
      icon: (
        <Image
          src="/assets/brand-assets/logo-icon.svg"
          alt={`phronai token icon`}
          width={40}
          height={40}
        />
      ),
      // icon: <FiBarChart2 fontSize="40px" color="#c34bfb" />,
      // icon: "🌉"
    },
    {
      name: "Phron AI Wallet",
      description:
        "Manage and secure your assets on the PhronAI network with ease and convenience.",
      icon: (
        <Image
          src="/assets/brand-assets/logo-icon.svg"
          alt={`phronai token icon`}
          width={40}
          height={40}
        />
      ),
      // icon: <FaWallet fontSize="40px" color="#c34bfb" />,
      // icon: "👛"
    },
  ];

  const buildingProjects = [
    {
      name: "Dexe",
      icon: "/assets/partners/dexe.png",
      description:
        "An infrastructure for creating and governing DAOs. 50+ smart-contracts for your web-3 product.",
    },
    {
      name: "Wow Max",
      icon: "/assets/partners/wowmax-logo.jpg",
      description:
        "WOWMAX is the next generation DEX aggregation protocol that uses slippage as an additional source of optimization.",
    },
    {
      name: "Kredly",
      icon: "/assets/partners/kredly-logo.svg",
      description:
        "AI-powered adjustments for rock-solid security. Dynamic fees, rewards & insurance keep the platform smooth & protected!",
    },
    {
      name: "Power AI",
      icon: "/assets/partners/powerai-logo.jpg",
      description:
        "Power AI: Democratizing AI computing with global idle GPUs. Affordable, sustainable, and decentralized solutions.",
    },
  ];

  return (
    <Box bg="white" pb="96px" pt={{ base: "10", md: "0" }} overflow="hidden">
      <Container position="relative" maxW="1240px">
        {/* Hero Section */}
        <VStack
          spacing={4}
          textAlign="center"
          mb={20}
          position="relative"
          zIndex={10}
        >
          <Text
            as="h1"
            fontSize={{ base: "3xl", md: "4xl", "3000px": "5xl" }}
            // color={useColorModeValue("blue.900", "blue.100")}
            letterSpacing="1px"
          >
            Building the Future of Web3
          </Text>
          <Text
            fontSize="xl"
            color={useColorModeValue("gray.700", "blue.300")}
            mb="4"
          >
            Empowering developers and projects in the decentralized ecosystem
          </Text>
          <Box
            as="a"
            href="https://docs.phron.ai"
            maxW="200px"
            w="full"
            target="_blank"
            className="btn-grad"
          >
            Get Started
          </Box>
        </VStack>

        {/* Built Projects Section */}
        <Box mb={20} position="relative" zIndex={10}>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", "3000px": "5xl" }}
            textAlign="center"
            mb={10}
            // color={useColorModeValue("blue.900", "blue.100")}
            letterSpacing="1px"
          >
            Built Projects
          </Text>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {builtProjects.map((project) => (
              <BuiltProjectCard key={project.name} {...project} />
            ))}
          </Grid>
        </Box>

        {/* Building on Us Section */}
        <Box mb={20} position="relative" zIndex={10}>
          <Text
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", "3000px": "5xl" }}
            textAlign="center"
            mb={10}
            // color={useColorModeValue("blue.900", "blue.100")}
            letterSpacing="1px"
          >
            Building on Us
          </Text>
          <Box bg={"#3182ce14"} borderRadius="lg" p={8}>
            <Wrap justify="center" spacing={8}>
              {buildingProjects.map((project) => (
                <WrapItem maxW="256px" key={project.name}>
                  <BuildingProjectCard key={project.name} {...project} />
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Box>

        {/* Call to Action */}
        <VStack spacing={4} textAlign="center" position="relative" zIndex={10}>
          <Heading
            as="h2"
            size="xl"
            // color={useColorModeValue("blue.900", "blue.100")}
            letterSpacing="1px"
          >
            Ready to Build the Future?
          </Heading>
          <Text
            fontSize="xl"
            // color={useColorModeValue("gray.700", "blue.300")}
            letterSpacing="1px"
            mb="4"
          >
            Join our ecosystem and start building today
          </Text>

          <Box
            as="a"
            href="https://docs.phron.ai"
            maxW="200px"
            w="full"
            target="_blank"
            className="btn-grad"
          >
            Start Building
          </Box>
        </VStack>

        {/* Decorative Elements */}
        <Box
          position="absolute"
          top="20"
          left="10"
          w="64"
          h="64"
          bg="blue.200"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(70px)"
          opacity={0.7}
          animation="blob 7s infinite"
        />
        <Box
          position="absolute"
          top="40"
          right="20"
          w="72"
          h="72"
          bg="purple.200"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(70px)"
          opacity={0.7}
          animation="blob 7s infinite 2s"
        />
        <Box
          position="absolute"
          bottom="20"
          left="50%"
          w="80"
          h="80"
          bg="pink.200"
          borderRadius="full"
          mixBlendMode="multiply"
          filter="blur(70px)"
          opacity={0.7}
          animation="blob 7s infinite 4s"
        />
      </Container>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </Box>
  );
}
