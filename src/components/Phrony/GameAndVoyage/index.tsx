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
            bgImage="/assets/phrony/phrony-cat-bg.jpg"
            bgSize="cover"
            bgPos="left"
            borderRadius="2xl"
            rounded="40px"
            p={8}
            display="flex"
            flexDirection="column"
            position="relative"
            _after={{
              content: `''`,
              background: "#000",
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "0px",
              top: "0px",
              bottom: "0px",
              right: "0px",
              opacity: ".5",
              display: { base: "block", xl: "none" },
            }}
            overflow="hidden"
            minH="500px"
          >
            <Box
              position={{ md: "absolute" }}
              color={{ base: "#fff", xl: "#000" }}
              maxW={{ base: "286px" }}
              right={{ md: "10px" }}
              top={{ md: "84px" }}
              zIndex={1}
              ml={{ base: "auto" }}
            >
              <Text
                as="h3"
                fontSize="3xl"
                fontWeight={700}
                lineHeight="120%"
                mb={4}
              >
                Phrony <br />
                The Game
              </Text>
              <Text mb={4} fontSize={{ base: "lg", xl: "sm" }}>
                Our beloved mascot, Phrony, is here to play! Implement
                Phrony&apos;s challenges and earn $PHRON through our various
                dynamics and tasks!
              </Text>

              <Box
                as="a"
                href="https://t.me/phron_bot"
                target="_blank"
                mt="30px"
                w="full"
                maxW="195px"
                className="btn-grad"
                p="10px"
                position={{ md: "absolute" }}
                right="30px"
                bottom="45px"
                zIndex={1}
                display={{ base: "block", md: "none" }}
              >
                Explore Phrony
              </Box>
            </Box>
            <Box
              as="a"
              href="https://t.me/phron_bot"
              target="_blank"
              mt="30px"
              w="full"
              maxW="195px"
              className="btn-grad"
              p="10px"
              position={{ md: "absolute" }}
              display={{ base: "none", md: "block" }}
              right="30px"
              bottom="45px"
              zIndex={1}
            >
              Explore Phrony
            </Box>
          </GridItem>
        </Fade>

        <Fade right>
          <GridItem
            bgImage="/assets/phrony/voyage-cat-bg.jpg"
            bgSize="cover"
            bgPos="left"
            borderRadius="2xl"
            rounded="40px"
            p={8}
            display="flex"
            flexDirection="column"
            position="relative"
            _after={{
              content: `''`,
              background: "#000",
              position: "absolute",
              width: "100%",
              height: "100%",
              left: "0px",
              top: "0px",
              bottom: "0px",
              right: "0px",
              opacity: ".5",
              display: { base: "block", xl: "none" },
            }}
            overflow="hidden"
            minH="500px"
          >
            <Box
              position={{ md: "absolute" }}
              color={{ base: "#fff", xl: "#000" }}
              zIndex={1}
              maxW={{ base: "286px" }}
              right={{ md: "10px" }}
              top={{ md: "84px" }}
              ml={{ base: "auto" }}
            >
              <Text
                as="h3"
                fontSize="3xl"
                fontWeight={700}
                lineHeight="120%"
                mb={4}
              >
                Voyage
              </Text>
              <Text mb={4} fontSize={{ base: "lg", xl: "sm" }}>
                Our Web 3.0 task platform, designed specifically for the user
                experience. Complete tasks, earn points, and enjoy multiple
                perks alongside Phrony in your $PHRON.
              </Text>

              <Box
                mt="30px"
                w="full"
                maxW="195px"
                className="btn-grad"
                p="10px"
                display={{ base: "block", md: "none" }}
                right="30px"
                bottom="45px"
                as="a"
                href="https://voyage.phron.ai/"
                target="_blank"
                zIndex={1}
              >
                Explore Voyage
              </Box>
            </Box>

            <Box
              mt="30px"
              w="full"
              maxW="195px"
              className="btn-grad"
              p="10px"
              position={{ md: "absolute" }}
              display={{ base: "none", md: "block" }}
              right="30px"
              bottom="45px"
              as="a"
              href="https://voyage.phron.ai/"
              target="_blank"
              zIndex={1}
            >
              Explore Voyage
            </Box>
          </GridItem>
        </Fade>
      </Grid>
    </Container>
  );
}
