import React from "react";
import { Box, Container, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function RoadTowardsTheFuture() {
  return (
    <Box my="20" px="4">
      <Container maxW="1240px">
        <Text
          fontSize={{
            base: "2xl",
            lg: "4xl",
          }}
          fontWeight={700}
          textAlign="center"
          color="brand.darkGray"
          mb="5"
          as="h2"
          lineHeight="120%"
        >
          From imagination to implementation: <br /> The road towards the future
        </Text>

        <Text textAlign="center" color="#5d6380" mb="10">
          Carved from the concept, we applied the concept of having a <br />
          long-lasting technology embedded with utility and accessibility.
        </Text>

        {/* 1 */}
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0px 50px -12px rgba(0, 0, 0, 0.1)"
          rounded="3xl"
          pr={{ xl: "50px" }}
          fontSize={{ md: "10px", lg: "16px" }}
          mb="10"
        >
          <Box>
            <Fade left>
              <Image
                src="/assets/light-theme-home/brain-img-new.png"
                alt="brain image"
                width={500}
                height={500}
              />
            </Fade>
          </Box>

          <Fade right>
            <VStack
              align="flex-start"
              bgColor="#fff"
              px="10"
              py="5"
              rounded="3xl"
              maxW="640px"
              ml="auto"
              pl={{ md: "90px" }}
              position="relative"
              pb="10"
            >
              <Box
                position="absolute"
                left={{ md: "5" }}
                right={{ base: "5", md: "auto" }}
                top={{ base: "0", md: "5" }}
              >
                <Image
                  src="/assets/light-theme-home/phronesis-icon.png"
                  alt="star-icon"
                  width={50}
                  height={50}
                />
              </Box>
              <Text
                as="h3"
                fontSize={{
                  base: "lg",
                  lg: "2xl",
                }}
                fontWeight={700}
                color="brand.darkGray"
                lineHeight="120%"
              >
                Phronesis Consensus
              </Text>
              <Text mb={{base:'5',md:"2", lg:'5'}}>
                Combining our statistical algorithm for the appliance of
                different types of nodes in a network alongside the engine of
                the Convolutional Neural Network supplied, scalability stops
                being an issue.
              </Text>
              <Box
                as="a"
                href="https://docs.phron.ai"
                maxW="200px"
                w="full"
                target="_blank"
                className="btn-grad"
                py="3"
              >
                Explore Phronesis
              </Box>
            </VStack>
          </Fade>
        </Stack>

        {/* 2 */}
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0px 50px -12px rgba(0, 0, 0, 0.1)"
          rounded="3xl"
          pl={{ xl: "50px" }}
          fontSize={{ md: "10px", lg: "16px" }}
          mb="10"
        >
          <Fade left>
            <VStack
              align="flex-start"
              bgColor="#fff"
              px="10"
              py="5"
              rounded="3xl"
              maxW="640px"
              mr="auto"
              pl={{ md: "90px" }}
              position="relative"
              pb="10"
            >
              <Box
                position="absolute"
                left={{ md: "5" }}
                right={{ base: "5", md: "auto" }}
                top={{ base: "5", md: "5" }}
              >
                <Image
                  src="/assets/light-theme-home/layers-icon.png"
                  alt="star-icon"
                  width={50}
                  height={50}
                />
              </Box>
              <Text
                as="h3"
                fontSize={{
                  base: "lg",
                  lg: "2xl",
                }}
                fontWeight={700}
                color="brand.darkGray"
                lineHeight="120%"
              >
                Phron AI Layer 1: <br />
                Proof-of-Concept
              </Text>
              <Text mb={{base:'5',md:"2", lg:'5'}}>
                A seamless transition between Blockchain Technology and AI,
                introduced through our operational Layer 1. Breaking a paradigm
                of scalability towards continues growth and efficiency.
              </Text>
              <Box
                as="a"
                href="https://docs.phron.ai"
                maxW="240px"
                w="full"
                target="_blank"
                className="btn-grad"
                py="3"
              >
                Explore PhronAI Layer 1
              </Box>
            </VStack>
          </Fade>

          <Box>
            <Fade right>
              <Image
                src="/assets/light-theme-home/layers.png"
                alt="brain image"
                width={540}
                height={540}
              />
            </Fade>
          </Box>
        </Stack>

        {/* 3 */}
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0px 50px -12px rgba(0, 0, 0, 0.1)"
          rounded="3xl"
          pr={{ xl: "50px" }}
          fontSize={{ md: "10px", lg: "16px" }}
          mb="10"
        >
          <Box>
            <Fade left>
              <Image
                src="/assets/light-theme-home/3d-box-new.png"
                alt="brain image"
                width={500}
                height={500}
              />
            </Fade>
          </Box>

          <Fade right>
            <VStack
              align="flex-start"
              bgColor="#fff"
              px="10"
              py="5"
              rounded="3xl"
              maxW="640px"
              ml="auto"
              pl={{ md: "90px" }}
              position="relative"
              pb="10"
            >
              <Box
                position="absolute"
                left={{ md: "5" }}
                right={{ base: "5", md: "auto" }}
                top={{ base: "5", md: "5" }}
              >
                <Image
                  src="/assets/light-theme-home/3d-box-icon.png"
                  alt="star-icon"
                  width={50}
                  height={50}
                />
              </Box>
              <Text
                as="h3"
                fontSize={{
                  base: "lg",
                  lg: "2xl",
                }}
                fontWeight={700}
                color="brand.darkGray"
                lineHeight="120%"
              >
                PhronZero: <br />
                AI-driven Blockchain <br />
                Infrastructure
              </Text>
              <Text mb={{base:'5',md:"2", lg:'5'}}>
                The next approach towards a truly decentralized technology. From
                making your new Layer 1 in minutes to including AI
                implementations in your chain, embrace the future with
                groundbreaking technology.
              </Text>
              <Box
                as="a"
                // href="https://docs.phron.ai"
                maxW="200px"
                w="full"
                target="_blank"
                className="btn-grad"
                py="3"
              >
                Coming Soon
              </Box>
            </VStack>
          </Fade>
        </Stack>
      </Container>
    </Box>
  );

  //   0 0px 50px -12px rgba(0, 0, 0, 0.1)
}
