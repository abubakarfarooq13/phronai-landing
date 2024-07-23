import { Box, Container, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Fade = require("react-reveal/Fade");

export default function Benchmark() {
  return (
    <Box
      bg="red"
      pb="70px"
      pt="50px"
      bgImage="/assets/light-theme-home/benchmark-section-bg.png"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container maxW="1240px">
        <Fade bottom>
          <Text as="h2" fontSize="3xl" textAlign="center" pb="20px">
            Benchmark
          </Text>
        </Fade>

        {/* <Image
          src="/assets/light-theme-home/benchmark-table.png"
          alt="benchmark table"
          width={1240}
          height={1000}
          style={{
            margin: "0 auto",
          }}
        /> */}
        <Fade bottom>
          <VStack spacing="4" display={{ base: "none", md: "flex" }}>
            <Image
              src="/assets/light-theme-home/benchmark-heading.png"
              alt="benchmark table"
              width={1240}
              height={100}
              style={{
                margin: "0 auto",
              }}
            />
            <Image
              src="/assets/light-theme-home/benchmark-body.png"
              alt="benchmark table"
              width={1240}
              height={1000}
              style={{
                margin: "0 auto",
                borderRadius: "20px",
              }}
            />
            <Image
              src="/assets/light-theme-home/benchmark-footer.png"
              alt="benchmark table"
              width={1240}
              height={100}
              style={{
                margin: "0 auto",
                borderRadius: "20px",
              }}
            />
          </VStack>

          <VStack
            display={{
              base: "flex",
              md: "none",
            }}
          >
            <Image
              src="/assets/light-theme-home/mobile-benchmark.png"
              alt="mobile benchmark"
              width={1000}
              height={1715}
            />
          </VStack>
        </Fade>
      </Container>
    </Box>
  );
}
