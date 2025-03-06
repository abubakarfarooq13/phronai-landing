import {
  Box,
  Flex,
  keyframes,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const floating = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const logos = [
  {
    id: 1,
    logoUrl: "/assets/partners/$notif-ai.png",
    alt: "$notif-ai logo",
    left: { base: "20%", sm: "30%" },
    top: { base: "10%" },
  },
  {
    id: 2,
    logoUrl: "/assets/partners/agnus-ai-blockchain.png",
    alt: "agnus-ai-blockchain logo",
    left: { base: "10%", sm: "20%" },
    top: { base: "20%" },
  },
  {
    id: 3,
    logoUrl: "/assets/partners/dexe-black.png",
    alt: "dexe logo",
    right: { base: "10%", sm: "10%" },
    bottom: { base: "20%" },
  },
  {
    id: 4,
    logoUrl: "/assets/partners/filscriptions.png",
    alt: "filscriptions logo",
    left: { base: undefined, sm: "10%" },
    right: { base: "10%", sm: undefined },
    top: { base: "35%", sm: "30%" },
  },
  {
    id: 5,
    logoUrl: "/assets/partners/gemx-crypto.png",
    alt: "gemx-crypto logo",
    left: { base: "10%", sm: "15%" },
    top: { base: "55%", sm: "50%" },
  },
  {
    id: 6,
    logoUrl: "/assets/partners/gptplus.png",
    alt: "gptplus logo",
    right: { base: "35%" },
    top: { base: "35%", sm: "25%" },
  },
  {
    id: 7,
    logoUrl: "/assets/partners/hambit.png",
    alt: "hambit logo",
    right: { base: "30%" },
    bottom: { base: "25%", sm: "10%" },
  },
  {
    id: 8,
    logoUrl: "/assets/partners/metakraft-ai.png",
    alt: "metakraft-ai logo",
    left: { base: "14%", sm: "25%" },
    top: "40%",
  },
  {
    id: 9,
    logoUrl: "/assets/partners/opengate.png",
    alt: "opengate logo",
    right: { base: "10%" },
  },
  {
    id: 10,
    logoUrl: "/assets/partners/openname-black.png",
    alt: "openname logo",
    left: { base: "35%" },
    top: { base: "25%" },
  },
  {
    id: 11,
    logoUrl: "/assets/partners/orbler.png",
    alt: "orbler logo",
    top: { base: "10%" },
  },
  {
    id: 12,
    logoUrl: "/assets/partners/paal-ai.png",
    alt: "paal-ai logo",
    right: { base: "30%", sm: undefined },
    bottom: { base: "5%", sm: "10%" },
  },
  {
    id: 13,
    logoUrl: "/assets/partners/sato-chain.png",
    alt: "sato-chain logo",
    left: { base: "35%" },
    bottom: { base: "30%", sm: "20%" },
  },
  {
    id: 14,
    logoUrl: "/assets/partners/send-tokens.png",
    alt: "send-tokens logo",
    left: { base: "30%", sm: "25%" },
    bottom: { base: "15%", sm: "10%" },
  },
  {
    id: 15,
    logoUrl: "/assets/partners/social-data-analytics.png",
    alt: "social-data-analytics logo",
    right: { base: "20%", sm: "30%" },
    top: { base: "10%" },
  },
  {
    id: 16,
    logoUrl: "/assets/partners/solid-proof-black.png",
    alt: "solid-proof logo",
    right: { base: "20%" },
    top: { base: "20%" },
  },
  {
    id: 17,
    logoUrl: "/assets/partners/way-black.png",
    alt: "way logo",
    left: { base: "10%" },
    top: { base: "30%" },
  },
  {
    id: 18,
    logoUrl: "/assets/partners/x-alpha.png",
    alt: "x-alpha logo",
    left: { base: "10%" },
    bottom: { base: "20%" },
  },
  {
    id: 19,
    logoUrl: "/assets/partners/zkgrok-black.png",
    alt: "zkgrok logo",
    right: { base: "15%", sm: "25%" },
    top: { base: "60%", sm: "55%" },
  },
];

export default function TrustedBySection2() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      position="relative"
      gap={6}
      p={8}
      maxW="1200px"
      mx="auto"
      minH="600px"
      _after={{
        content: `""`,
        bgGradient: "linear(to-br, #e6f7ff, #f0e6ff)",
        filter: "blur(8px)",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      mt="20"
    >
      <Box
        position="relative"
        minH="600px"
        width="full"
        height="full"
        zIndex={10}
      >
        {logos.map((logo, index) => (
          <Box
            key={logo.id}
            borderRadius="xl"
            position="absolute"
            p={3}
            bg="rgba(255,255,255,0.3)"
            boxShadow="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "45px", sm: "50px", md: "60px" }}
            h={{ base: "45px", sm: "50px", md: "60px" }}
            animation={`${floating} 5s ease-in-out infinite`}
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.2)" }}
            left={logo.left}
            top={logo.top}
            right={logo.right}
            bottom={logo.bottom}
          >
            <Image
              src={logo.logoUrl}
              alt={logo.alt}
              width={isMobile ? 35 : 50}
              height={isMobile ? 20 : 35}
              objectFit="contain"
            />
          </Box>
        ))}
        <Text
          fontSize={{ base: "3xl", sm: "4xl", md: "4xl" }}
          fontWeight={600}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          color="#321b7a"
          textAlign="center"
          lineHeight="100%"
        >
          Trusted <br /> By
        </Text>
      </Box>
    </Flex>
  );
}
