import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
// import Image from "next/image";

const companiesone = [
  {
    id: 1,
    imageUrl: "/assets/companies/ethereum.png",
    alt: "ethereum logo",
    width: 150,
    height: 80,
  },
  {
    id: 2,
    imageUrl: "/assets/companies/arbitrum.png",
    alt: "arbitrum logo",
    width: 140,
    height: 80,
  },
  {
    id: 24,
    imageUrl: "/assets/companies/phronai-blue.png",
    alt: "phronai logo",
    width: 110,
    height: 70,
  },
  {
    id: 25,
    imageUrl: "/assets/companies/boba.png",
    alt: "boba logo",
    width: 110,
    height: 70,
  },
  {
    id: 3,
    imageUrl: "/assets/companies/aurora.png",
    alt: "aurora logo",
    width: 110,
    height: 70,
  },
  {
    id: 4,
    imageUrl: "/assets/companies/avalanche.png",
    alt: "avalanche logo",
    width: 140,
    height: 70,
  },
  {
    id: 5,
    imageUrl: "/assets/companies/base.png",
    alt: "base logo",
    width: 90,
    height: 50,
  },
  {
    id: 6,
    imageUrl: "/assets/companies/binance-smart-chain.png",
    alt: "binance-smart-chain logo",
    width: 130,
    height: 50,
  },
  {
    id: 7,
    imageUrl: "/assets/companies/celo.png",
    alt: "celo logo",
    width: 100,
    height: 50,
  },
  {
    id: 77,
    imageUrl: "/assets/companies/berachain.png",
    alt: "celo logo",
    width: 130,
    height: 50,
  },
  {
    id: 8,
    imageUrl: "/assets/companies/cronos.png",
    alt: "celo logo",
    width: 130,
    height: 50,
  },
  {
    id: 9,
    imageUrl: "/assets/companies/evmos.png",
    alt: "evmos logo",
    width: 130,
    height: 50,
  },
  // {
  //   id: 10,
  //   imageUrl: "/open-phron/companies-logo/evmos.png",
  //   alt: "evmos logo",
  //   width: 130,
  //   height: 50,
  // },
];
const companiestwo = [
  {
    id: 11,
    imageUrl: "/assets/companies/fantom.png",
    alt: "fantom logo",
    width: 130,
    height: 50,
  },
  {
    id: 12,
    imageUrl: "/assets/companies/gnosis.png",
    alt: "gnosis logo",
    width: 130,
    height: 50,
  },
  {
    id: 13,
    imageUrl: "/assets/companies/harmony.png",
    alt: "harmony logo",
    width: 130,
    height: 50,
  },
  {
    id: 14,
    imageUrl: "/assets/companies/hyperledger-besu.png",
    alt: "hyperledger-besu logo",
    width: 130,
    height: 50,
  },
  {
    id: 15,
    imageUrl: "/assets/companies/klaytn.png",
    alt: "klaytn logo",
    width: 130,
    height: 50,
  },
  {
    id: 16,
    imageUrl: "/assets/companies/metis.png",
    alt: "metis logo",
    width: 130,
    height: 50,
  },
  {
    id: 166,
    imageUrl: "/assets/companies/moonbeam.png",
    alt: "moonbeam logo",
    width: 130,
    height: 50,
  },
  {
    id: 17,
    imageUrl: "/assets/companies/optimism.png",
    alt: "optimism logo",
    width: 130,
    height: 50,
  },
  {
    id: 18,
    imageUrl: "/assets/companies/polygon-zkevm.png",
    alt: "polygon-zkevm logo",
    width: 150,
    height: 50,
  },
  {
    id: 19,
    imageUrl: "/assets/companies/polygon.png",
    alt: "polygon logo",
    width: 130,
    height: 50,
  },
  {
    id: 20,
    imageUrl: "/assets/companies/starknet.png",
    alt: "starknet logo",
    width: 130,
    height: 50,
  },
  {
    id: 21,
    imageUrl: "/assets/companies/syscoin.png",
    alt: "syscoin logo",
    width: 130,
    height: 50,
  },
  {
    id: 22,
    imageUrl: "/assets/companies/telos-evm.png",
    alt: "telos-evm logo",
    width: 130,
    height: 50,
  },
  {
    id: 23,
    imageUrl: "/assets/companies/zk-sync.png",
    alt: "zk-sync logo",
    width: 150,
    height: 50,
  },
];

export default function Companies() {
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  return (
    <Box
      bg="transparent"
      // data-aos="fade-up"
      pos="relative"
      //   mt="40px"
      //   className="relative mt-20"
      //   style={{
      //     backgroundImage:
      //   "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(207,229,245,1) 50%, rgba(244,224,238,1) 100%)",
      // filter: "blur(10px)", // Adds a blur effect to the background
      // width: "100%",
      // height: "100vh",
      // position: "relative",
      //   }}
    >
      {/* <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //   backgroundImage:
          //     "linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(207,229,245,1) 50%, rgba(244,224,238,1) 100%)",
          filter: "blur(100px)",
          zIndex: -1, // Ensures the background stays behind the content
        }}
      ></Box> */}

      <Container overflow="hidden" px="4" p={{ xl: "10" }} maxW="full">
        <Text
          as="h1"
          lineHeight="50px"
          fontSize={{ base: "30px", md: "40px" }}
          fontWeight={500}
          textAlign="center"
          // textTransform="uppercase"
          mb="20"
          pt="10"
          color="#321c75"
        >
          Deploy On
        </Text>

        {/* <Flex
          flexWrap="wrap"
          alignItems="center"
          justifyContent="center"
          gap="10"
        >
          {companies.map((company) => (
            <motion.div
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              key={company.id}
            >
              <motion.img
                style={company.id === 7 ? { filter: "grayscale(100%)" } : {}}
                // className="hue"
                src={company.imageUrl}
                width={company.width}
                height={company.height}
                alt={company.alt}
              />
            </motion.div>
          ))}
        </Flex> */}
        <Flex
          justifyContent="center"
          alignItems="center"
          maxW="1200px"
          mx="auto"
          position="relative"
          width="full"
          overflow="hidden"
          height="96px"
        >
          <Marquee style={{ overflow: "hidden" }} speed={70}>
            {/* Duplicate the logos to create a seamless loop */}
            {[...companiesone, ...companiesone].map((logo, index) => (
              <Flex
                key={`${logo.id}-${index}`}
                alignItems="center"
                justifyContent="center"
                mx={8}
              >
                <Box width="128px" height="64px" position="relative">
                  <Image
                    style={logo.id === 7 ? { filter: "grayscale(100%)" } : {}}
                    src={logo.imageUrl || "/placeholder.svg"}
                    alt={logo.alt}
                    objectFit="contain"
                    width={logo.width}
                    height={logo.height}
                  />
                </Box>
              </Flex>
            ))}
          </Marquee>
        </Flex>

        {/* Second row - moving left to right (opposite direction) */}
        <Flex
          justifyContent="center"
          alignItems="center"
          maxW="1200px"
          mx="auto"
          position="relative"
          width="full"
          overflow="hidden"
          height="96px"
        >
          <Marquee style={{ overflow: "hidden" }} speed={70} direction="right">
            {/* Duplicate the logos to create a seamless loop */}
            {[...companiestwo, ...companiestwo].map((logo, index) => (
              <Flex
                key={`${logo.id}-${index}`}
                alignItems="center"
                justifyContent="center"
                mx={8}
              >
                <Box width="128px" height="64px" position="relative">
                  <Image
                    src={logo.imageUrl || "/placeholder.svg"}
                    alt={logo.alt}
                    objectFit="contain"
                    width={logo.width}
                    height={logo.height}
                  />
                </Box>
              </Flex>
            ))}
          </Marquee>
        </Flex>
      </Container>
    </Box>
  );
}
