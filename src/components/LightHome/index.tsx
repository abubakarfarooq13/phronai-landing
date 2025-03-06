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
import Simplified from "../Simplified";
import GalleryCarousel from "../GalleryCaresoul";
import HackenSection from "../Hacken";
import TrustedBySection2 from "../TrustedBySection";
import TestnetStats from "./TestnetStats";
import Companies from "./Companies";

export default function LightHome() {
  return (
    <>
      <LightNav />
      <Hero />
      <Box
        bgImage="/assets/bg-test-contract.png"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100% 100%"
        pb="50px"
        pt="50px"
      >
        <TestnetStats />
        <PhronAISuite />
      </Box>
      <Box
        bgImage="/assets/bg-simplified.png"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="100% 100%"
        // py="100px"
      >
        <Simplified />
      </Box>
      <Companies />
      <GalleryCarousel />
      {/* <EmbracingBlockchain />
      <RoadTowardsTheFuture /> */}
      {/* <ExploreEcosystem /> */}
      <HackenSection />
      <TrustedBySection2 />
      {/* <Benchmark /> */}
      {/* <WhitePapers />
      <TrustedBySection /> */}
      <OurTeam />
      <FooterLighter />
    </>
  );
}
