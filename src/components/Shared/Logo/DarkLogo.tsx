import React from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Box maxW={{ base: "160px", md: "230px" }} w="full">
      <Link href="/">
        <CImage
          src="/assets/phronzero/phronzero-logo.png"
          alt="logo"
          w="full"
        />
      </Link>
    </Box>
  );
}
