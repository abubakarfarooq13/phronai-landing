import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function Benchmarks() {
  return (
    <Box
      py="70px"
      bgImage="linear-gradient(146deg, rgba(0,0,0,0) 50%, rgba(80,41,150,1) 100%)"
    >
      <Container maxW="1300px">
        <Text fontSize="3xl" fontWeight={500} textAlign="center" mb="10">
          Benchmarks
        </Text>
        <Image
          src="/assets/new-home/benchmark-image.png"
          alt="benchmark dashboard"
          width={1300}
          height={700}
          style={{
            borderRadius: "30px",
          }}
        />
      </Container>
    </Box>
  );
}
