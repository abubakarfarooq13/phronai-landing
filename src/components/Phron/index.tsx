import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Footer, Nav } from "..";
import Hero from "./Hero";
import PhronFeatures from "./PhronFeatures";
import NodeCreation from "./NodeCreation";

export default function NftMarketPlace() {
  return (
    <>
      <Nav />
      <Hero />
      <Box
        bgImage="/assets/phron/node-creation-bg.png"
        bgRepeat="no-repeat"
        bgPos="top"
        bgSize="cover"
      >
        <Box transform="translateY(-150px)">
          <PhronFeatures />
        </Box>
        <NodeCreation />
      </Box>
      <Footer />
    </>
  );
}
