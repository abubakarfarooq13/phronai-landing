import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Hero from "./Hero";
import ExploreEcosystem from "./EcosystemSection";
// import Benchmark from "./Benchmark";
import WhitePapers from "./WhitePapers";
import TrustedBySection from "./TrustedBySection";
import OurTeam from "./OurTeam";
import FooterLighter from "../Shared/Footer/LightFooter";
import LightNav from "../Shared/Nav/LightNav";
import PhronAISuite from "./PhronAISuite";
import EmbracingBlockchain from "./EmbracingBlockchain";
import RoadTowardsTheFuture from "./RoadTowardsTheFuture";
import TestnetStats from "./TestnetStats";

export default function LightHome() {
  return (
    <>
      <LightNav />
      <Hero />
      <TestnetStats />
      <PhronAISuite />
      <EmbracingBlockchain />
      <RoadTowardsTheFuture />
      <ExploreEcosystem />
      {/* <Benchmark /> */}
      <WhitePapers />
      <TrustedBySection />
      <OurTeam />
      <FooterLighter />
    </>
  );
}
