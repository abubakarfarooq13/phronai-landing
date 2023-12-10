import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function CPhronZero() {
  return (
    <>
      <Container maxW="1160px" py="100px">
        <Fade bottom>
          <VStack spacing="2" align="start">
            <Text
              textTransform="uppercase"
              fontSize={{ base: "xs", md: "sm", lg: "lg" }}
              lineHeight="15px"
              pl="1"
              fontWeight={300}
              letterSpacing="2px"
              textAlign={{ base: "center", lg: "left" }}
              mb="2"
            >
              Phronesis
            </Text>

            <Text
              as="h1"
              textAlign={{ base: "center", lg: "left" }}
              fontSize={{ base: "5xl", md: "6xl", "3000px": "7xl" }}
              fontWeight={500}
              lineHeight={{ base: "50px", md: "60px", "3000px": "70px" }}
            >
              PhronZero
            </Text>

            <Text
              pt="3"
              fontSize={{ base: "sm", md: "lg", "3000px": "xl" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              From Static to Dynamic <br />
              One Step Beyond
            </Text>
          </VStack>
        </Fade>
      </Container>
    </>
  );
}
