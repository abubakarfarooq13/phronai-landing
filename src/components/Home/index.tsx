import React from "react";
import { Box, Image } from "@chakra-ui/react";
import {
  Features,
  Footer,
  Hero,
  Nav,
  PhronPadDashboard,
  GameCommunities,
} from "..";

export default function CHome() {
  return (
    <>
      <Nav />
      <Hero />
      <Box
        bgImage="/assets/phrone-pad/gamepad-background.png"
        bgSize="cover"
        bgPos={{ base: "center", "2340px": "center" }}
        bgRepeat="no-repeat"
        mt="-490px"
        pos="relative"
        pb={{ "2340px": "600px" }}
      >
        <PhronPadDashboard />
      </Box>
      <Features />
      <GameCommunities />

      <Footer />
    </>
  );
}
