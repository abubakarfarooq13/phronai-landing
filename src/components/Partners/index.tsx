import React from "react";
import { Box, Container, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import { Footer, Nav } from "..";

const partners = [
  {
    id: 1,
    name: "Dexe",
    imageSrc: "/assets/partners/dexe-logo.png",
  },
  {
    id: 2,
    name: "Solid Proof",
    imageSrc: "/assets/partners/solid-proof-logo.png",
  },
  {
    id: 3,
    name: "Volu Mint",
    imageSrc: "/assets/partners/volu-mint-logo.png",
  },
  {
    id: 4,
    name: "Agnus AI Blockchain",
    imageSrc: "/assets/partners/agnus-ai-blockchain-logo.png",
  },
  {
    id: 5,
    name: "Paal AI",
    imageSrc: "/assets/partners/paal-ai-logo.png",
  },
  {
    id: 6,
    name: "Social Data Analytics",
    imageSrc: "/assets/partners/social-data-analytics-logo.png",
  },
  {
    id: 7,
    name: "Open Gate",
    imageSrc: "/assets/partners/opengate-logo.png",
  },
  {
    id: 8,
    name: "filcriptions",
    imageSrc: "/assets/partners/filcriptions-logo.png",
  },
  {
    id: 10,
    name: "hambit",
    imageSrc: "/assets/partners/hambit-logo.png",
  },
  {
    id: 11,
    name: "Metakraft AI",
    imageSrc: "/assets/partners/metakraft-ai-logo.png",
  },
  {
    id: 12,
    name: "$notif AI",
    imageSrc: "/assets/partners/$notif-ai-logo.png",
  },
  {
    id: 13,
    name: "Satochain",
    imageSrc: "/assets/partners/sato-chain-logo.png",
  },
  {
    id: 14,
    name: "WAY",
    imageSrc: "/assets/partners/way-logo.png",
  },
  {
    id: 15,
    name: "Send Token",
    imageSrc: "/assets/partners/send-tokens-logo.png",
  },
  {
    id: 15,
    name: "zkgrok",
    imageSrc: "/assets/partners/zkgrok-logo.png",
  },
  {
    id: 16,
    name: "orbler",
    imageSrc: "/assets/partners/orbler-logo.png",
  },
  {
    id: 16,
    name: "GPTPlus",
    imageSrc: "/assets/partners/gptplus-logo.png",
  },
  {
    id: 17,
    name: "openname",
    imageSrc: "/assets/partners/openname-logo.png",
  },
  {
    id: 18,
    name: "gemx crypto",
    imageSrc: "/assets/partners/gemx-crypto-logo.png",
  },
  {
    id: 19,
    name: "x-alpha",
    imageSrc: "/assets/partners/x-alpha-logo.png",
  },
];

const Fade = require("react-reveal/Fade");

export default function CPartners() {
  return (
    <Box
      backgroundImage="/assets/new-background.png"
      bgPos="center"
      bgSize="cover"
    >
      <Nav />
      <Container maxW="1260px" pt="120px" position="relative" pb="96px">
        <Fade bottom>
          <Text
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={500}
            textAlign="center"
            letterSpacing="1px"
            mb="16"
          >
            Our PartnerShip
          </Text>
        </Fade>

        <Box position="relative" maxW="1180px" mx="auto">
          <Wrap justify="center" spacing="10">
            {partners.map((logo) => (
              <WrapItem key={logo.id}>
                <Fade bottom delay={logo.id * 50}>
                  <Image
                    src={logo.imageSrc}
                    alt={logo.name + " logo"}
                    width={150}
                    height={250}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Fade>
              </WrapItem>
            ))}
          </Wrap>

          <Text
            position="absolute"
            right="0"
            bottom="100px"
            fontSize="22px"
            color="#838383"
          >
            ...and much more coming soon
          </Text>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
