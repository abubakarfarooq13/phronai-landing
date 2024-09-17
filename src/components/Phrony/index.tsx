import React from "react";
import FooterLighter from "../Shared/Footer/LightFooter";
import LightNav from "../Shared/Nav/LightNav";
import PhronyHero from "./Hero";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Airdrop from "./Airdrop";
import GameAndVoyage from "./GameAndVoyage";
import HowToPlay from "./HowToPlay";

export default function Phrony() {
  return (
    <>
      <LightNav />

      <Box px={{ base: "4", xl: "0" }}>
        <PhronyHero />
        <Airdrop />
        <GameAndVoyage />
        <HowToPlay />
      </Box>

      <FooterLighter />
    </>
  );
}
