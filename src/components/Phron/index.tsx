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
        bgPos={{ base: "top", "4xl": "center" }}
        bgSize="cover"
        pos="relative"
        _after={{
          content: `''`,
          backgroundColor: "#000",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: "0.5",
        }}
      >
        <Box transform="translateY(-150px)" pos="relative" zIndex="10">
          <PhronFeatures />
        </Box>
        <NodeCreation />
      </Box>
      <Footer />
    </>
  );
}
