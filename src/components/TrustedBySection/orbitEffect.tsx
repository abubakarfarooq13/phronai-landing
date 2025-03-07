import {
  Box,
  Flex,
  keyframes,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { logos } from "@/constant/logos";

// Define different rotation radii for multiple orbits
// const orbitRadii = [280, 400]; // Inner, Middle, Outer orbits

// Define multiple rotation keyframes dynamically
const createOrbitAnimation = (radius: number) => keyframes`
  0% { transform: rotate(0deg) translate(${radius}px) rotate(0deg); }
  100% { transform: rotate(360deg) translate(${radius}px) rotate(-360deg); }
`;

const createAntiClockwiseOrbitAnimation = (radius: number) => keyframes`
  0% { transform: rotate(360deg) translate(${radius}px) rotate(-360deg); }
  100% { transform: rotate(0deg) translate(${radius}px) rotate(0deg); }
`;

export default function TrustedBySection() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Adjust orbit size based on screen width
  const orbitRadii = isMobile ? [170, 270] : [250, 350]; // Smaller for mobile

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="relative"
      p={8}
      maxW="1200px"
      mx="auto"
      minH="900px"
      mt="16"
      mb="10"
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
      overflow="hidden"
    >
      {/* Central Trusted By Text */}
      <Text
        fontSize={{ base: "30px", md: "40px" }} // Smaller font for mobile
        fontWeight={600}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="#321b7a"
        textAlign="center"
        zIndex={20}
        whiteSpace="nowrap"
        bgColor="white"
        p={{ base: "3", md: "5" }} // Adjust padding for better spacing
        rounded="2xl"
        lineHeight="100%"
      >
        Trusted <br /> By
      </Text>

      {/* Logos Rotating Around in Different Orbits */}
      {logos.map((logo, index) => {
        const orbitIndex = index % orbitRadii.length;
        const animation = createOrbitAnimation(orbitRadii[orbitIndex]);
        const antiClockwise = createAntiClockwiseOrbitAnimation(
          orbitRadii[orbitIndex]
        );

        return (
          <Box
            zIndex={10}
            key={logo.id}
            borderRadius="xl"
            position="absolute"
            p={{ base: 0, md: 3 }}
            // bg="rgba(255,255,255,0.3)"
            // boxShadow="lg"
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={isMobile ? "40px" : "60px"} // Smaller logos on mobile
            h={isMobile ? "40px" : "60px"}
            animation={`${orbitIndex === 0 ? antiClockwise : animation} ${
              48 + orbitIndex * 10
            }s linear infinite`}
            style={{
              animationDelay: `${index * (isMobile ? 1 : 1)}s`, // More delay on mobile
            }}
          >
            <Image
              src={logo.imageSrc}
              alt={logo.name}
              width={isMobile ? 30 : 55} // Adjust image size
              height={isMobile ? 25 : 40}
              style={{
                borderRadius: "10px",
              }}
            />
          </Box>
        );
      })}
    </Flex>
  );
}
