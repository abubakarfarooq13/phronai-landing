import React from "react";
import { Box, Image as CImage } from "@chakra-ui/react";
import Link from "next/link";

export default function PhronZeroLogo() {
  return (
    <Box maxW={{ base: "160px", md: "200px" }} w="full">
      <Link href="/">
        <CImage
          src="/assets/phronzero/phronzero-logo.png"
          alt="phronai logo"
          w="full"
        />
      </Link>
    </Box>
  );
}
