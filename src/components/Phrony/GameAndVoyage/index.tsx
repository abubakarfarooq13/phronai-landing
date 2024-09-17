import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function GameAndVoyage() {
  return (
    <Container maxW="1240px" px="0" my={16}>
      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={8}
      >
        <Fade left>
          <GridItem
            backgroundColor="#EFEAF1"
            borderRadius="2xl"
            rounded="40px"
            px={8}
            pt={8}
            display="flex"
            flexDirection={{ base: "column-reverse", lg: "row" }}
            position="relative"
            overflow="hidden"
            minH="500px"
          >
            <Image
              src="/assets/phrony/tap-tap-bg.png"
              alt="tap tap bg"
              width={450}
              height={400}
              style={{
                marginTop: "auto",
                marginLeft: "-80px",
              }}
            />
            <VStack
              align={{ base: "center", lg: "start" }}
              mb={{ base: "5", lg: "0" }}
              textAlign={{ base: "center", lg: "left" }}
              color="#000"
              zIndex={1}
              ml={{ lg: "-120px", xl: "-100px" }}
              mt="10"
            >
              <Text as="h3" fontSize="3xl" fontWeight={700} lineHeight="120%">
                Phrony <br />
                The Game
              </Text>
              <Text fontSize={{ base: "lg", xl: "sm" }}>
                Our beloved mascot, Phrony, is here to play! Implement
                Phrony&apos;s challenges and earn $PHRON through our various
                dynamics and tasks!
              </Text>
            </VStack>

            <Box
              as="a"
              href="https://t.me/phron_bot"
              target="_blank"
              mt="30px"
              w="full"
              maxW="195px"
              className="btn-grad"
              p="10px"
              right="30px"
              bottom="45px"
              zIndex={1}
              position="absolute"
            >
              Explore Phrony
            </Box>
          </GridItem>
        </Fade>

        <Fade right>
          <GridItem
            backgroundColor="#f7f8f6"
            borderRadius="2xl"
            rounded="40px"
            px={8}
            pt={8}
            display="flex"
            flexDirection={{ base: "column-reverse", lg: "row" }}
            position="relative"
            overflow="hidden"
            minH="500px"
          >
            <Image
              src="/assets/phrony/phrony-cat.png"
              alt="tap tap bg"
              width={450}
              height={400}
              style={{
                marginTop: "auto",
                marginLeft: "-100px",
              }}
            />

            <VStack
              align={{ base: "center", lg: "start" }}
              mb={{ base: "5", lg: "0" }}
              textAlign={{ base: "center", lg: "left" }}
              color="#000"
              zIndex={1}
              ml={{ lg: "-100px", xl: "-90px" }}
              mt="10"
            >
              <Text as="h3" fontSize="3xl" fontWeight={700} lineHeight="120%">
                Voyage
              </Text>
              <Text fontSize={{ base: "lg", xl: "sm" }}>
                Our Web 3.0 task platform, designed specifically for the user
                experience. Complete tasks, earn points, and enjoy multiple
                perks alongside Phrony in your $PHRON.
              </Text>
            </VStack>

            <Box
              as="a"
              href="https://voyage.phron.ai/"
              target="_blank"
              mt="30px"
              w="full"
              maxW="195px"
              className="btn-grad"
              p="10px"
              right="30px"
              bottom="45px"
              zIndex={1}
              position="absolute"
            >
              Explore Voyage
            </Box>
          </GridItem>
        </Fade>
      </Grid>
    </Container>
  );
}
