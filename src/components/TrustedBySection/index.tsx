"use client";

import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

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

  useEffect(() => {
    const positions = [];
    for (let i = 0; i < logos.length; i++) {
      let x, y;
      let isOverlapping;
      do {
        isOverlapping = false;
        x = Math.random() * 60 - 30;
        y = Math.random() * 60 - 30;
        for (const pos of positions) {
          if (Math.abs(pos.x - x) < 10 && Math.abs(pos.y - y) < 10) {
            isOverlapping = true;
            break;
          }
        }
      } while (isOverlapping);

      positions.push({
        x,
        y,
        scale: 0.8 + Math.random() * 0.4,
        movementPattern: Math.floor(Math.random() * 3),
      });
    }
    // @ts-ignore
    setLogoPositions(positions);
  }, []);

  return (
    <Box
      maxW="1600px"
      mx="auto"
      overflow="hidden"
      bgGradient="linear(to-br, #e6f7ff, #f0e6ff)"
    >
      <Box position="relative" height="650px" maxW="1200px" mx="auto" py={12}>
        {logos.map((logo, index) => (
          <MotionBox
            key={logo.id}
            position="absolute"
            // @ts-ignore
            left={`${50 + logoPositions[index]?.x}%`}
            // @ts-ignore
            top={`${50 + logoPositions[index]?.y}%`}
            // @ts-ignore
            initial={{ scale: logoPositions[index]?.scale }}
            animate={{
              x:
                // @ts-ignore
                logoPositions[index]?.movementPattern !== 1
                  ? ["-3%", "3%", "-3%"]
                  : "0%",
              y:
                // @ts-ignore
                logoPositions[index]?.movementPattern !== 0
                  ? ["-3%", "3%", "-3%"]
                  : "0%",
            }}
            transition={{
              duration: 6 + (index % 4),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <MotionBox
              borderRadius="xl"
              p={2}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              bg="#fff"
            >
              <Image
                src={logo.logoUrl || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                objectFit="contain"
                _hover={{
                  transform: "scale(110%)",
                }}
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
        >
          <VStack spacing={1}>
            <Text
              as={motion.h2}
              fontSize="5xl"
              fontWeight="bold"
              color="#4B0082"
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // @ts-ignore
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trusted
            </Text>
            <Text
              as={motion.h2}
              fontSize="5xl"
              fontWeight="bold"
              color="#4B0082"
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              // @ts-ignore
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
