"use client";

import {
  Box,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Link,
  keyframes,
} from "@chakra-ui/react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";

const rotating = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(45deg); }
  100% { transform: rotate(0deg); }
`;

const MotionWrapItem = motion(WrapItem);
const MotionBox = motion(Box);

// Keyframe animations
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0; transform: scale(0.8) translateY(0); }
  50% { opacity: 1; transform: scale(1) translateY(-3px); }
`;

const Sparkle = ({ top, left, size, delay }: any) => (
  <MotionBox
    position="absolute"
    top={`${top}%`}
    left={`${left}%`}
    width={`${size}px`}
    height={`${size}px`}
    borderRadius="full"
    background="radial-gradient(circle, #ffffff 10%, #6a4dff 80%)"
    boxShadow="0 0 8px 2px rgba(106, 77, 255, 0.5)"
    animate={{ opacity: [0, 1, 0], scale: [0.8, 1, 0.8] }}
    transition={{ repeat: Infinity, duration: 1.5, delay }}
  />
);

export default function PartnerCards() {
  const partners = [
    {
      title: "OpenPhron",
      imageSrc: "/assets/newPartners/atom.png",
      width: 100,
      height: 100,
      link: "https://app.openphron.ai ",
    },
    {
      title: "AI Layer 0\nTestnet",
      imageSrc: "/assets/newPartners/box1.png",
      width: 100,
      height: 100,
      link: "https://testnet.phronscan.io",
    },
    {
      title: "Nodes",
      imageSrc: "/assets/newPartners/layerbox1.png",
      width: 85,
      height: 85,
      link: "https://nodes.phron.ai ",
    },
  ];

  return (
    <MotionBox w="full" position="relative" zIndex="2">
      <Wrap justify={{ base: "center", xl: "space-between" }} spacing="20px">
        {partners.map((partner, index) => (
          <Card key={index} partner={partner} index={index} />
        ))}
      </Wrap>
    </MotionBox>
  );
}

const Card = ({ partner, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionWrapItem
      key={index}
      maxW={{ base: "full", md: "40%", lg: "380px" }}
      w="full"
      position="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Card Content */}
      <Box
        position="relative"
        borderRadius="25px"
        overflow="hidden"
        height="100%"
        width="full"
        _hover={{
          transform: "scale(1.01)",
          shadow: "0px 16px 25px 1px #cad2fd",
        }}
        transition="all .3s"
        border="1px solid #cad2fd4a"
      >
        {/* Inner content with gradient shimmer effect */}
        <Box
          borderRadius="25px"
          p="20px"
          bgGradient="linear(to-r, #ffffff, #eff0fc)"
          position="relative"
          height="100%"
        >
          <Flex justify="space-between" align="center" h="full" w="full">
            <Flex flexDir="column" color="#321b7a" fontWeight={500}>
              <Text
                fontSize="28px"
                lineHeight="110%"
                whiteSpace="pre-line"
                fontWeight={600}
              >
                {partner.title}
              </Text>
              <Flex
                alignItems="center"
                as={Link}
                href={partner.link}
                target="_blank"
                fontSize="18px"
                mt="10px"
                _hover={{ textDecoration: "none", color: "#6a4dff" }}
              >
                Launch <FiArrowUpRight style={{ marginLeft: "4px" }} />
              </Flex>
            </Flex>
            <IconWithSparkles
              imageSrc={partner.imageSrc}
              title={partner.title}
              width={partner.width}
              height={partner.height}
              isHovered={isHovered}
            />
          </Flex>
        </Box>
      </Box>
    </MotionWrapItem>
  );
};

function IconWithSparkles({ imageSrc, title, width, height, isHovered }: any) {
  const sparkles = [
    { top: 10, left: 20, size: 6, delay: 0 },
    { top: 20, left: 80, size: 5, delay: 0.3 },
    { top: 50, left: 90, size: 7, delay: 0.5 },
    { top: 85, left: 75, size: 5, delay: 0.2 },
    { top: 15, left: 50, size: 6, delay: 0.4 },
  ];

  return (
    <MotionBox position="relative">
      {isHovered && sparkles.map((s, i) => <Sparkle key={i} {...s} />)}

      <MotionBox
        // animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: isHovered ? [0, 45, 0] : 0, // Smooth rotation using an array
        }}
        transition={{ duration: 0.6 }}
        animation={`${rotating} 10s ease-in-out infinite`}
      >
        <Image
          src={imageSrc || "/placeholder.svg"}
          width={width}
          height={height}
          alt={`${title} icon`}
          style={{
            filter: isHovered ? "brightness(1.1)" : "brightness(1)",
            transition: "all 0.3s ease",
            // transform: isHovered ? "rotate(45deg)" : "",
          }}
        />
      </MotionBox>
    </MotionBox>
  );
}
