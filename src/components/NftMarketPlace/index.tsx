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
import PhronesisMarketplace from "./PhronesisMarketplace";
import WhyTrustUs from "./WhyTrustUs";

export default function NftMarketPlace() {
  return (
    <>
      <Nav />
      <PhronesisMarketplace />
      <WhyTrustUs />
      <Footer />
    </>
  );
}
