import React from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import Link from "next/link";

export default function DarkLogo() {
  return (
    <Box maxW={{ base: "160px", md: "150px" }} w="full">
      <Link href="/">
        <CImage
          src="/assets/brand-assets/phronai-blue.png"
          alt="logo"
          w="full"
        />
      </Link>
    </Box>
  );
}
