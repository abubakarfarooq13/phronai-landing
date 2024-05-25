import React from "react";
import {
  Box,
  Container,
  VStack,
  Text,
  Grid,
  GridItem,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Image as CImage,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function DNASection() {
  const mobileAIStakingDisplay = useBreakpointValue({
    base: "block",
    md: "none",
  });

  const AIStakingDisplay = useBreakpointValue({
    base: "none",
    md: "block",
  });

  return (
    <Box
      pt={{ base: "0px", lg: "4" }}
      pb="100px"
      bgImage="linear-gradient(146deg, rgba(0,0,0,0) 50%, rgba(80,41,150,1) 100%)"
    >
      <Container maxW="1300px" px="4" mt="4" position="relative">
        {/* <Box
          
        > */}
        <video
          width="700"
          style={{
            display: "block",
            margin: "10px auto 20px auto",
            // position: "absolute",
            // left: "50%",
            transform: "rotate(180deg)",
          }}
          height="500"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/assets/new-home/dna-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* </Box> */}
        <VStack
          // bgImage="/assets/new-home/dna-image.png"
          maxW="900px"
          minH={"490px"}
          bgSize="cover"
          bgPos="center"
          mx="auto"
          pt="50px"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
          top="0"
          zIndex={99}
        >
          <Image
            src="/assets/new-home/phron-zero-white.png"
            alt="phronzero white logo"
            width={200}
            height={100}
          />
          <Text fontSize="3xl" mt="2" fontWeight={500} textAlign="center">
            We want to be a DNA where it has
          </Text>
        </VStack>

        <Box mx="auto" maxW="1100px" px="4" position="relative">
          <Fade bottom>
            <Image
              src="/assets/new-home/ai-staking-image.png"
              alt="AI Staking image"
              width={1100}
              height={800}
              style={{
                display: AIStakingDisplay,
              }}
            />
          </Fade>
          <Fade bottom>
            <CImage
              src="/assets/new-home/ai-staking-image-mobile.png"
              alt="AI Staking image mobile"
              style={{
                display: mobileAIStakingDisplay,
                paddingTop: "60px",
                margin: "0 auto",
              }}
            />
          </Fade>

          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={40}
            height={40}
            className="ai-staking-logo-1"
          />

          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={80}
            height={80}
            className="ai-staking-logo-2"
          />

          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={80}
            height={80}
            className="ai-staking-logo-3"
          />

          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={80}
            height={80}
            className="ai-staking-logo-4"
          />
        </Box>
      </Container>
    </Box>
  );
}
