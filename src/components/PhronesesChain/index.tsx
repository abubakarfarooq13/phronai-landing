import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Footer, Nav } from "..";
import WhyUs from "./WhyTrustUs";
import PhronesisEquals from "./PhronesisEquals";
import Chain from "./Chain";
import MachineLearningModel from "./MachineLearningModel";

export default function PhronesesChain() {
  return (
    <>
      <Nav />
      <Box
        bgImage="/assets/chain/chain-bg.png"
        bgPos="bottom"
        bgRepeat="no-repeat"
        bgSize="cover"
        pos="relative"
      >
        <Chain />
        <PhronesisEquals />
      </Box>
      <WhyUs />
      <MachineLearningModel />
      <Footer />
    </>
  );
}
