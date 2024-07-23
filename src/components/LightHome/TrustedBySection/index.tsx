import React from "react";
import { Box, Container, HStack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  {
    id: 1,
    logoUrl: "/assets/partners/$notif-ai.png",
    alt: "$notif-ai logo",
    width: 50,
    height: 35,
  },
  {
    id: 2,
    logoUrl: "/assets/partners/agnus-ai-blockchain.png",
    alt: "agnus-ai-blockchain logo",
    width: 50,
    height: 35,
  },
  {
    id: 3,
    logoUrl: "/assets/partners/dexe-black.png",
    alt: "dexe logo",
    width: 50,
    height: 35,
  },
  {
    id: 4,
    logoUrl: "/assets/partners/filscriptions.png",
    alt: "filscriptions logo",
    width: 50,
    height: 35,
  },
  {
    id: 5,
    logoUrl: "/assets/partners/gemx-crypto.png",
    alt: "gemx-crypto logo",
    width: 50,
    height: 35,
  },
  {
    id: 6,
    logoUrl: "/assets/partners/gptplus.png",
    alt: "gptplus logo",
    width: 50,
    height: 35,
  },
  {
    id: 7,
    logoUrl: "/assets/partners/hambit.png",
    alt: "hambit logo",
    width: 50,
    height: 35,
  },
  {
    id: 8,
    logoUrl: "/assets/partners/metakraft-ai.png",
    alt: "metakraft-ai logo",
    width: 50,
    height: 35,
  },
  {
    id: 9,
    logoUrl: "/assets/partners/opengate.png",
    alt: "opengate logo",
    width: 50,
    height: 35,
  },
  {
    id: 10,
    logoUrl: "/assets/partners/openname-black.png",
    alt: "openname logo",
    width: 50,
    height: 35,
  },
  {
    id: 11,
    logoUrl: "/assets/partners/orbler.png",
    alt: "orbler logo",
    width: 50,
    height: 35,
  },
  {
    id: 12,
    logoUrl: "/assets/partners/paal-ai.png",
    alt: "paal-ai logo",
    width: 50,
    height: 35,
  },
  {
    id: 13,
    logoUrl: "/assets/partners/sato-chain.png",
    alt: "sato-chain logo",
    width: 30,
    height: 30,
  },
  {
    id: 14,
    logoUrl: "/assets/partners/send-tokens.png",
    alt: "send-tokens logo",
    width: 50,
    height: 35,
  },
  {
    id: 15,
    logoUrl: "/assets/partners/social-data-analytics.png",
    alt: "social-data-analytics logo",
    width: 50,
    height: 35,
  },
  {
    id: 16,
    logoUrl: "/assets/partners/solid-proof-black.png",
    alt: "solid-proof logo",
    width: 50,
    height: 35,
  },
  {
    id: 17,
    logoUrl: "/assets/partners/way.png",
    alt: "way logo",
    width: 50,
    height: 35,
  },
  {
    id: 18,
    logoUrl: "/assets/partners/x-alpha.png",
    alt: "x-alpha logo",
    width: 50,
    height: 35,
  },
  {
    id: 19,
    logoUrl: "/assets/partners/zkgrok-black.png",
    alt: "zkgrok logo",
    width: 50,
    height: 35,
  },
];

export default function TrustedBySection() {
  return (
    <Box overflow="hidden">
      <Container maxW="1240px" py="50px">
        <Text
          fontSize={{ base: "lg", "2340px": "30px" }}
          letterSpacing="2px"
          as="h3"
          fontWeight={700}
          textAlign="center"
          mb="8"
        >
          Trusted By
        </Text>

        <Wrap spacing="10" justify="center">
          {logos.map((logo) => (
            <WrapItem key={logo.id}>
              <Image
                src={logo.logoUrl}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                // className="logo-image"
              />
            </WrapItem>
          ))}
        </Wrap>

        <Text
          fontSize={{ base: "lg", "2340px": "30px" }}
          letterSpacing="2px"
          as="h3"
          mt="20"
          fontWeight={700}
          textAlign="center"
          mb="8"
        >
          Audited By
        </Text>

        <HStack spacing="14" justifyContent="center">
          <Image
            src="/assets/new-home/Hacken.png"
            alt="solid proof"
            width={90}
            height={55}
            // className="logo-image"
            style={{
              maxWidth: "70px",
            }}
          />
          <Image
            src="/assets/partners/solid-proof-black.png"
            alt="solid proof"
            width={65}
            height={45}
            // className="logo-image"
          />
        </HStack>
      </Container>
    </Box>
  );
}
