import React from "react";
import { Box } from "@chakra-ui/react";
import EcosystemHero from "./Hero";
import OurEcosystem from "./OurEcosystem";
import NavLight from "../Shared/Nav/LightNav";
import FooterLight from "../Shared/Footer/LightFooter";
import BuildingOnUs from "./BuildingOnUs";

export default function Ecosystem() {
  return (
    <Box bg={"#e8effc"} color={"#000"}>
      {/* <Nav /> */}
      <NavLight />
      <EcosystemHero />
      <BuildingOnUs />
      <OurEcosystem />
      <FooterLight />
      {/* <Footer /> */}
    </Box>
  );
}
