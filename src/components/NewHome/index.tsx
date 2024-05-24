import React from "react";
import { Footer, Nav } from "..";
import Hero from "./Hero";
import SophiaAI from "./SophiaAI";
import DNASection from "./DNASection";
import Benchmarks from "./Benchmarks";
import TrustedBySection from "./TrustedBySection";

export default function CHome() {
  return (
    <>
      <Nav />
      <Hero />
      <SophiaAI />
      <DNASection />
      <Benchmarks />
      <TrustedBySection />
      <Footer />
    </>
  );
}
