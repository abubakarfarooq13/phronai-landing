import React from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import Link from "next/link";

export default function OpenPhronLogo() {
  return (
    <Box maxW={{ base: "160px", md: "200px" }} w="full">
      <Link href="/">
        <CImage
          src="/assets/open-phron/open-phron-logo.png"
          alt="openPhron logo"
          w="full"
        />
      </Link>
    </Box>
  );
}
