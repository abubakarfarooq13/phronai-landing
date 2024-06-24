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

  const dnaVideoMaxWidth = useBreakpointValue({
    md: "600px",
    lg: "full",
  });

  const videoTop = useBreakpointValue({ md: "-200px", lg: "-300px" });

  return (
    <Box
      pt={{ base: "0px", lg: "4" }}
      pb="100px"
      // bgImage="linear-gradient(146deg, rgba(0,0,0,0) 50%, rgba(80,41,150,1) 100%)"
      position="relative"
      overflow="hidden"
    >
      <video width="600" height="400" autoPlay playsInline muted loop>
        <source src="/assets/dna-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box w="full">
        <Container maxW="1300px" px="4" mt="4" position="relative">
          <VStack
            // bgImage="/assets/new-home/dna-image.png"
            align="flex-start"
            bgColor={{ base: "rgba(0,0,0,.2)", sm: "rgba(0,0,0,0)" }}
            maxW="900px"
            w="full"
            px="8"
            // minH={"490px"}
            pb="8"
            // bgSize="cover"
            // bgPos="center"
            mx="auto"
            pt={{ base: "20px", sm: "50px" }}
            // position="absolute"
            // left="50%"
            // transform="translateX(-50%)"
            top="0"
            zIndex={99}
            mt={{ base: "0px", xl: "150px" }}
          >
            <Image
              src="/assets/new-home/phron-zero-white.png"
              alt="phronzero white logo"
              width={200}
              height={100}
            />
            <Text
              fontSize={{ base: "2xl", sm: "3xl" }}
              mt="2"
              fontWeight={500}
              textAlign="left"
              as="h2"
            >
              Build your Layer 1 in{" "}
              <Box display={{ base: "none", md: "block" }} as="br" /> minutes
            </Text>
          </VStack>
          {/* <video
          width="700"
          style={{
            display: "block",
            margin: "10px auto 20px auto",
            // position: "absolute",
            // left: "50%",
            transform: "rotate(180deg)",
            maxWidth: dnaVideoMaxWidth,
          }}
          height="500"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/assets/new-home/dna-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
          <Box
            mx="auto"
            maxW="1100px"
            px="4"
            mt={{ base: "100px", xl: "300px" }}
            position="relative"
          >
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
                  marginTop: "-60px",
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
    </Box>
  );
}
