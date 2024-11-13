import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function PhronAISuite() {
  return (
    <Box mt='20'>
      <Text
        fontSize={{
          base: "2xl",
          lg: "4xl",
        }}
        fontWeight={700}
        textAlign="center"
        color="brand.darkGray"
      >
        PhronAI Blockchain Suite
      </Text>
    </Box>
  );
}
