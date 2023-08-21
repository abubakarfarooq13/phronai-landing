import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Footer, Nav } from "..";
import WhyUs from "./WhyTrustUs";
import Chain from "./Chain";

export default function PhronesesChain() {
  return (
    <>
      <Nav />
      <Chain />
      <WhyUs />
      <Footer />
    </>
  );
}
