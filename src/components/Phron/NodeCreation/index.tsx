import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  VStack,
  Text,
  Image as CImage,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function NodeCreation() {
  return (
    <Box
      pos="relative"
      overflow="hidden"
      mt={{ base: "-150px", md: "0px" }}
      pb="100px"
      zIndex="10"
    >
      <Container maxW="1160px">
        <VStack>
          <Fade bottom>
            <Text
              as="h2"
              fontSize={{ base: "4xl", md: "6xl", "3000px": "7xl" }}
              lineHeight={{ base: "40px", md: "60px", "3000px": "70px" }}
              fontWeight={500}
              mb={{ base: "3", "3000px": "5" }}
            >
              Node Creation
            </Text>
            <Text
              maxW="700px"
              mx="auto"
              textAlign="center"
              mb="50px"
              fontSize={{ base: "lg", "3000px": "xl" }}
            >
              Creating a Node with PHRON allows you to take part on 50% of the
              profit generated from the revenue stream of the platform
            </Text>
          </Fade>

          <Fade bottom>
            <Image
              src="/assets/phron/bag-with-coins.png"
              width={400}
              height={410}
              alt="an open bag with coins"
              className="infinit-move-1"
            />
          </Fade>
        </VStack>
      </Container>
    </Box>
  );
}
