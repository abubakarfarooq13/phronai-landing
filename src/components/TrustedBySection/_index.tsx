"use client";

import {
  Box,
  Center,
  Image,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);

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
    logoUrl: "/assets/partners/way-black.png",
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
  const [logoPositions, setLogoPositions] = useState([]);
  const isMobile = useBreakpointValue({ base: true, md: false });
  const containerHeight = useBreakpointValue({
    base: "500px",
    md: "600px",
    lg: "650px",
  });
  const centerRadius = useBreakpointValue({ base: 25, md: 20, lg: 18 });
  const maxRadius = useBreakpointValue({ base: 40, md: 42, lg: 45 });

  useEffect(() => {
    // Create a structured, symmetric layout for logos
    calculateLogoPositions();

    // Recalculate positions on window resize
    window.addEventListener("resize", calculateLogoPositions);
    return () => window.removeEventListener("resize", calculateLogoPositions);
  }, [isMobile, centerRadius, maxRadius]);

  const calculateLogoPositions = () => {
    // Define the center exclusion zone
    const centerExclusionRadius = centerRadius; // percentage from center

    // Create a structured, symmetric layout
    const positions = [];

    // Calculate positions in concentric circles around the center
    const numCircles = 3; // Number of concentric circles
    const logosPerCircle = Math.ceil(logos.length / numCircles);

    let logoIndex = 0;

    // Outer circle - most logos
    const outerRadius = maxRadius;
    const outerLogos = Math.min(Math.ceil(logos.length * 0.5), logos.length);
    for (let i = 0; i < outerLogos; i++) {
      if (logoIndex >= logos.length) break;

      // Calculate angle for even distribution around the circle
      const angle = (i / outerLogos) * 2 * Math.PI;
      const x = Math.cos(angle) * outerRadius;
      const y = Math.sin(angle) * outerRadius;

      positions.push({
        x,
        y,
        scale: 0.9 + Math.random() * 0.2,
        movementPattern: i % 3,
        movementScale: 0.5 + Math.random() * 0.5, // Varied movement scale
      });

      logoIndex++;
    }

    // Middle circle
    const middleRadius =
      centerExclusionRadius + (outerRadius - centerExclusionRadius) * 0.6;
    const middleLogos = Math.min(
      Math.ceil(logos.length * 0.3),
      logos.length - logoIndex
    );
    const middleOffset = Math.PI / middleLogos; // Offset to stagger from outer circle

    for (let i = 0; i < middleLogos; i++) {
      if (logoIndex >= logos.length) break;

      const angle = (i / middleLogos) * 2 * Math.PI + middleOffset;
      const x = Math.cos(angle) * middleRadius;
      const y = Math.sin(angle) * middleRadius;

      positions.push({
        x,
        y,
        scale: 0.85 + Math.random() * 0.2,
        movementPattern: (i + 1) % 3,
        movementScale: 0.4 + Math.random() * 0.4,
      });

      logoIndex++;
    }

    // Inner circle - fewest logos
    const innerRadius =
      centerExclusionRadius + (middleRadius - centerExclusionRadius) * 0.5;
    const innerLogos = logos.length - logoIndex;
    const innerOffset = (Math.PI / innerLogos) * 0.5; // Different offset for inner circle

    for (let i = 0; i < innerLogos; i++) {
      if (logoIndex >= logos.length) break;

      const angle = (i / innerLogos) * 2 * Math.PI + innerOffset;
      const x = Math.cos(angle) * innerRadius;
      const y = Math.sin(angle) * innerRadius;

      positions.push({
        x,
        y,
        scale: 0.8 + Math.random() * 0.15,
        movementPattern: (i + 2) % 3,
        movementScale: 0.3 + Math.random() * 0.3,
      });

      logoIndex++;
    }

    setLogoPositions(positions);
  };

  return (
    <Box
      maxW="1600px"
      mx="auto"
      overflow="hidden"
      bgGradient="linear(to-br, #e6f7ff, #f0e6ff)"
    >
      <Box
        position="relative"
        height={containerHeight}
        maxW="1200px"
        mx="auto"
        py={12}
        px={4}
      >
        {logos.map((logo, index) => (
          <MotionBox
            key={logo.id}
            position="absolute"
            left={`${50 + (logoPositions[index]?.x || 0)}%`}
            top={`${50 + (logoPositions[index]?.y || 0)}%`}
            initial={{ scale: logoPositions[index]?.scale || 1 }}
            animate={{
              x:
                logoPositions[index]?.movementPattern !== 1
                  ? [
                      `-${logoPositions[index]?.movementScale || 0.5}%`,
                      `${logoPositions[index]?.movementScale || 0.5}%`,
                      `-${logoPositions[index]?.movementScale || 0.5}%`,
                    ]
                  : "0%",
              y:
                logoPositions[index]?.movementPattern !== 0
                  ? [
                      `-${logoPositions[index]?.movementScale || 0.5}%`,
                      `${logoPositions[index]?.movementScale || 0.5}%`,
                      `-${logoPositions[index]?.movementScale || 0.5}%`,
                    ]
                  : "0%",
            }}
            transition={{
              duration: 5 + (index % 5),
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              transform: `translate(-50%, -50%) scale(${
                logoPositions[index]?.scale || 1
              })`,
            }}
          >
            <MotionBox
              borderRadius="xl"
              p={2}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              bg="#fff"
              boxShadow="sm"
              maxW={isMobile ? "60px" : "80px"}
              maxH={isMobile ? "60px" : "80px"}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Image
                src={logo.logoUrl || "/placeholder.svg"}
                alt={logo.alt}
                width={isMobile ? logo.width * 0.8 : logo.width}
                height={isMobile ? logo.height * 0.8 : logo.height}
                objectFit="contain"
                transition="all .2s"
              />
            </MotionBox>
          </MotionBox>
        ))}

        <Center
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={10}
          bg="rgba(255, 255, 255, 0.8)"
          borderRadius="full"
          p={isMobile ? 4 : 6}
          boxShadow="lg"
        >
          <VStack spacing={1}>
            <Text
              as={motion.h2}
              fontSize={isMobile ? "4xl" : "5xl"}
              fontWeight="bold"
              color="#4B0082"
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trusted
            </Text>
            <Text
              as={motion.h2}
              fontSize={isMobile ? "4xl" : "5xl"}
              fontWeight="bold"
              color="#4B0082"
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              by
            </Text>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
}
