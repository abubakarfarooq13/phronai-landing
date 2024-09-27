import React from "react";
import FooterLighter from "../Shared/Footer/LightFooter";
import LightNav from "../Shared/Nav/LightNav";
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
import PhronWalletHero from "./Hero";
import YourWallet from "./YourWallet";
import Community from "./Community";

export default function Phrony() {
  return (
    <>
      <LightNav />

      <PhronWalletHero />

      <YourWallet />

      <Community />

      <Box px={{ base: "4", xl: "0" }} overflow="hidden"></Box>

      <FooterLighter />
    </>
  );
}
