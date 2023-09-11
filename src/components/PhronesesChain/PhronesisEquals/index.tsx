import React from "react";
import Image from "next/image";
import { Box, Text, Container, Grid, GridItem, VStack } from "@chakra-ui/react";

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
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          placeContent="space-between"
          rowGap="50px"
        >
          <GridItem>
            <Fade bottom>
              <VStack spacing="10">
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
                  Sophia: Artificial Intelligence StaAsAcal Consensus Mechanism
                </Text>
              </VStack>
            </Fade>
          </GridItem>
          <GridItem>
            <Fade bottom delay={200}>
              <VStack spacing="10">
                <Box pt="5">
                  <Image
                    src="/assets/chain/protocol.png"
                    width={208}
                    height={228}
                    alt="protol image"
                  />
                </Box>
                <Text fontWeight={500} textAlign="center" fontSize="lg">
                  Indirect <br /> - LTFM Protocol
                </Text>
              </VStack>
            </Fade>
          </GridItem>
          <GridItem>
            <Fade bottom delay={300}>
              <VStack spacing="10">
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
              </VStack>
            </Fade>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
