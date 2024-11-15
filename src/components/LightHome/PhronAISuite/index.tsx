import React from "react";
import { Box, Grid, GridItem, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function PhronAISuite() {
  return (
    <Box mt="20" px="4">
      <Text
        fontSize={{
          base: "2xl",
          lg: "4xl",
        }}
        fontWeight={700}
        textAlign="center"
        color="brand.darkGray"
        mb="10"
      >
        PhronAI Blockchain Suite
      </Text>

      <VStack mb="6" display={{ base: "flex", md: "none" }}>
        <Image
          src="/assets/light-theme-home/openPhron.png"
          alt="open phron graph"
          width={420}
          height={400}
        />
      </VStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing="6"
        mb="10"
      >
        <Box mt={{ base: "0", md: "14" }}>
          <Image
            src="/assets/light-theme-home/phronzero.png"
            alt="open phron graph"
            width={290}
            height={400}
          />
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Image
            src="/assets/light-theme-home/openPhron.png"
            alt="open phron graph"
            width={420}
            height={400}
          />
        </Box>
        <Box mt={{ base: "0", md: "14" }}>
          <Image
            src="/assets/light-theme-home/phronai.png"
            alt="open phron graph"
            width={290}
            height={400}
          />
        </Box>
      </Stack>
    </Box>
  );
}
