import React from "react";
import Image from "next/image";
import {
  Box,
  Text,
  Container,
  Grid,
  WrapItem,
  VStack,
  Wrap,
  HStack,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function PhronesisEquals() {
  return (
    <Box
      pt={{ base: "150px", lg: "10" }}
      pb={{ base: "150px", lg: "20" }}
      _after={{
        content: `''`,
        backgroundImage: {
          base: "linear-gradient(180deg, rgba(0,0,0,0) 10%, #03020b 80%)",
          lg: "linear-gradient(180deg, rgba(0,0,0,0) 40%, #03020b 80%)",
        },
        position: "absolute",
        bottom: 0,
        h: "full",
        w: "full",
      }}
    >
      <Container maxW="1160px" zIndex={1} position="relative">
        <Fade bottom>
          <Text
            as="h2"
            fontSize={{ base: "5xl", md: "6xl" }}
            lineHeight={{ base: "50px", md: "60px" }}
            fontWeight={500}
            textAlign="center"
            mb={{ base: "20", lg: "10" }}
          >
            Phronesis=
          </Text>
        </Fade>
        <Wrap
          w="full"
          spacing={{ base: "28", md: "9" }}
          justify={{ base: "center", md: "space-between" }}
        >
          <WrapItem w="full" maxW={{ base: "full", md: "220px", lg: "296px" }}>
            <VStack spacing="10" w="full" justify="center" pos="relative">
              <Fade bottom>
                <Box maxH="210px" overflow="hidden">
                  <Image
                    src="/assets/chain/shophia.png"
                    width={214}
                    height={230}
                    alt="sophia image"
                  />
                </Box>
                <Text
                  fontWeight={500}
                  textAlign="center"
                  fontSize="lg"
                  maxW="260px"
                >
                  Sophia: Artificial Intelligence Statistical Consensus
                  Mechanism
                </Text>
              </Fade>
              <Box
                pos="absolute"
                right={{ base: "47%", md: "-70px" }}
                top={{ base: "110%", md: "70px" }}
              >
                <Image
                  src="/assets/chain/plus-icon.png"
                  width="30"
                  height="30"
                  alt="plus icon"
                />
              </Box>
            </VStack>
          </WrapItem>
          <WrapItem w="full" maxW={{ base: "full", md: "220px", lg: "296px" }}>
            <VStack spacing="10" w="full" justify="center" pos="relative">
              <Fade bottom delay={200}>
                <Box pt="5">
                  <Image
                    src="/assets/chain/protocol.png"
                    width={208}
                    height={228}
                    alt="protol image"
                  />
                </Box>
                <Text fontWeight={500} textAlign="center" fontSize="lg">
                  Indirect -<br /> LTFM Protocol
                </Text>
              </Fade>
              <Box
                pos="absolute"
                right={{ base: "50%", md: "-70px" }}
                transform={{ base: "translateX(50%)", lg: "auto" }}
                top={{ base: "115%", md: "70px" }}
                display={{
                  base: "none",
                  sm: "block",
                  md: "block",
                }}
              >
                <Image
                  src="/assets/chain/plus-icon.png"
                  width="30"
                  height="30"
                  alt="plus icon"
                />
              </Box>
            </VStack>
          </WrapItem>
          <WrapItem w="full" maxW={{ base: "full", md: "220px", lg: "296px" }}>
            <VStack spacing="10" w="full" justify="center" pos="relative">
              <Fade bottom delay={300}>
                <Box maxH="210px" overflow="hidden">
                  <Image
                    src="/assets/chain/hand.png"
                    width={200}
                    height={226}
                    alt="a hand with dollar icon in it"
                  />
                </Box>
                <Text fontWeight={500} textAlign="center" fontSize="lg">
                  Lucky Transactions <br /> Protocol
                </Text>
              </Fade>
              <Box
                pos="absolute"
                right={{ base: "50%" }}
                transform={{ base: "translateX(50%)" }}
                top="-60px"
                display={{ base: "block", sm: "none" }}
              >
                <Image
                  src="/assets/chain/plus-icon.png"
                  width="30"
                  height="30"
                  alt="plus icon"
                />
              </Box>
            </VStack>
          </WrapItem>
        </Wrap>
      </Container>
    </Box>
  );
}
