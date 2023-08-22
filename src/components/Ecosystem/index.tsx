import React from "react";
import { Footer, Nav } from "..";
import EcosystemHero from "./Hero";
import OurEcosystem from "./OurEcosystem";
import TopThirdPartyAPIs from "./TopThirdPartyAPIs";

export default function CHome() {
  return (
    <>
      <Nav />
      <EcosystemHero />
      {/* <TopThirdPartyAPIs /> */}
      <OurEcosystem />
      <Footer />
    </>
  );
}
