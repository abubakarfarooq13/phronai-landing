import React from "react";
import { Footer, Nav } from "..";
import EcosystemHero from "./Hero";
import OurEcosystem from "./OurEcosystem";

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
