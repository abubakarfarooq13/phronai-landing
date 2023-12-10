import React from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Box maxW={{ base: "160px", md: "250px" }}>
      <Link href="/">
        <CImage src="/assets/logo-black.png" alt="logo" w="full" />
      </Link>
    </Box>
  );
}
