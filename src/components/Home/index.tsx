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
        bgPos="top"
        bgRepeat="no-repeat"
        mt="-490px"
        pos="relative"
      >
        <PhronPadDashboard />
      </Box>
      <Features />
      <GameCommunities />

      <Footer />
    </>
  );
}
