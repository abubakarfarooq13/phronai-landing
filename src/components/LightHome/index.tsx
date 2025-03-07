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
import OrbitEffect from "../TrustedBySection/orbitEffect";

const logos = [
  {
    id: 1,
    logoUrl: "/assets/partners/$notif-ai.png",
    alt: "$notif-ai logo",
  },
  {
    id: 2,
    logoUrl: "/assets/partners/agnus-ai-blockchain.png",
    alt: "agnus-ai-blockchain logo",
  },
  {
    id: 3,
    logoUrl: "/assets/partners/dexe-black.png",
    alt: "dexe logo",
  },
  {
    id: 4,
    logoUrl: "/assets/partners/filscriptions.png",
    alt: "filscriptions logo",
  },
  {
    id: 5,
    logoUrl: "/assets/partners/gemx-crypto.png",
    alt: "gemx-crypto logo",
  },
  {
    id: 6,
    logoUrl: "/assets/partners/gptplus.png",
    alt: "gptplus logo",
  },
  {
    id: 7,
    logoUrl: "/assets/partners/hambit.png",
    alt: "hambit logo",
  },
  {
    id: 8,
    logoUrl: "/assets/partners/metakraft-ai.png",
    alt: "metakraft-ai logo",
  },
  {
    id: 9,
    logoUrl: "/assets/partners/opengate.png",
    alt: "opengate logo",
  },
  {
    id: 10,
    logoUrl: "/assets/partners/openname-black.png",
    alt: "openname logo",
  },
  {
    id: 11,
    logoUrl: "/assets/partners/orbler.png",
    alt: "orbler logo",
  },
  {
    id: 12,
    logoUrl: "/assets/partners/paal-ai.png",
    alt: "paal-ai logo",
  },
  {
    id: 13,
    logoUrl: "/assets/partners/sato-chain.png",
    alt: "sato-chain logo",
  },
  {
    id: 14,
    logoUrl: "/assets/partners/send-tokens.png",
    alt: "send-tokens logo",
  },
  {
    id: 15,
    logoUrl: "/assets/partners/social-data-analytics.png",
    alt: "social-data-analytics logo",
  },
  {
    id: 16,
    logoUrl: "/assets/partners/solid-proof-black.png",
    alt: "solid-proof logo",
  },
  {
    id: 17,
    logoUrl: "/assets/partners/way-black.png",
    alt: "way logo",
  },
  {
    id: 18,
    logoUrl: "/assets/partners/x-alpha.png",
    alt: "x-alpha logo",
  },
  {
    id: 19,
    logoUrl: "/assets/partners/zkgrok-black.png",
    alt: "zkgrok logo",
  },
];

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
      <OrbitEffect />
      {/* <Benchmark /> */}
      {/* <WhitePapers />
      <TrustedBySection /> */}
      <OurTeam />
      <FooterLighter />
    </>
  );
}
