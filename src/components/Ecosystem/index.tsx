import React from "react";
import { Box } from "@chakra-ui/react";
import { Footer, Nav } from "..";
import EcosystemHero from "./Hero";
import OurEcosystem from "./OurEcosystem";
import TopThirdPartyAPIs from "./TopThirdPartyAPIs";

export default function CHome() {
  return (
    <>
      <Nav />
      <EcosystemHero />
      <OurEcosystem />
      <Footer />
    </>
  );
}
