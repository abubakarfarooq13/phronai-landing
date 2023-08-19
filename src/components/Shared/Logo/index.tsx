import React from "react";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Box maxW="200px">
      <Link href="/">
        <Image src="/assets/logo.png" width={253} height={44} alt="logo" />
      </Link>
    </Box>
  );
}
