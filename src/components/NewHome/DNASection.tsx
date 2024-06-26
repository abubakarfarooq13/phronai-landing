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

  const videoTop = useBreakpointValue({
    // md: "-200px",
    // "2xl": "-300px",
    // "2340px": "-400px",
  });

  return (
    <Box
      pt={{ base: "0px", lg: "4" }}
      pb="100px"
      // bgImage="linear-gradient(146deg, rgba(0,0,0,0) 50%, rgba(80,41,150,1) 100%)"
      position="relative"
      overflow="hidden"
    >
      <Box
        as="video"
        display={{ base: "block", md: "none" }}
        style={{
          // margin: "10px auto 20px auto",
          position: "absolute",
          top: videoTop,
          width: "100%",
        }}
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/assets/dna-background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Box
        as="video"
        style={{
          // margin: "10px auto 20px auto",
          position: "absolute",
          top: videoTop,
          width: "100%",
        }}
        display={{ base: "none", md: "block" }}
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/assets/dna-background-edited.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
      <Container
        maxW="1100px"
        minH={{
          // sm: "50vh",
          // md: "40vh",
          // lg: "50vh",
          xl: "50vh",
          "2340px": "60vh",
        }}
        px={{ base: "4", xl: "0" }}
        mt={{ base: "0px", md: "4" }}
        position="relative"
        // top="0"
        // left="50%"
        // transform="translateX(-50%)"
      >
        <VStack
          // bgImage="/assets/new-home/dna-image.png"
          align="flex-start"
          bgColor={{ base: "rgba(0,0,0,.2)", sm: "rgba(0,0,0,0)" }}
          maxW="900px"
          w="full"
          // px="8"
          // minH={"490px"}
          pb="8"
          // bgSize="cover"
          // bgPos="center"
          // mx="auto"
          pt={{ base: "0px", sm: "50px" }}
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
            fontSize={{ base: "xl", sm: "3xl", lg: "45px", "2340px": "60px" }}
            mt="2"
            fontWeight={500}
            textAlign="left"
            as="h2"
            lineHeight="110%"
          >
            Build your Layer 1{" "}
            <Box as="br" display={{ base: "none", md: "block" }} /> in minutes
          </Text>
          <Text color="#c1c1c1" fontSize={{ base: "17px", "2340px": "22px" }}>
            Introducing the First Layer 0 and{" "}
            <Box as="br" display={{ base: "block", lg: "none" }} />
            Layer 1 AI Blockchain.
          </Text>
        </VStack>
      </Container>
      {/* <Box
          position="relative"
          w="full"
          _after={{
            content: `' '`,
            background: "rgba(0,0,0,.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: -1,
            filter: "blur(6px)",
          }}
          zIndex={9}
        >
          <HStack
            maxW="1100px"
            mt={{ base: "100px", lg: "200px", xl: "350px" }}
            mx="auto"
            justifyContent="space-between"
            display={{ base: "none", md: "flex" }}
            px="4"
          >
            <Text pt="300px" textAlign="left" color="#c1c1c1" fontWeight={300}>
              Performance <br /> Leaderboard
            </Text>
            <VStack>
              <Image
                src="/assets/new-home/phron-zero-white.png"
                alt="phronzero white logo"
                width={200}
                height={100}
              />
              <Text color="#c1c1c1" fontSize="3xl" fontWeight={500}>
                Adaptive AI Staking
              </Text>
              <Text textAlign="center" color="#c1c1c1" fontWeight={300}>
                Staking to the most efficient notes. <br /> Creating the best
                value for stakers and node providers.
              </Text>
            </VStack>
            <Text pt="300px" textAlign="right" color="#c1c1c1" fontWeight={300}>
              Runtime <br /> Leaderboard
            </Text>
          </HStack>
          <VStack
            align="center"
            mt="150px"
            mb="5"
            display={{ base: "flex", md: "none" }}
            maxW="300px"
            mx="auto"
          >
            <Image
              src="/assets/new-home/phron-zero-white.png"
              alt="phronzero white logo"
              width={200}
              height={100}
            />
            <Text color="#c1c1c1" fontSize="3xl" fontWeight={500}>
              Adaptive AI Staking
            </Text>
            <Text
              textAlign="center"
              color="#c1c1c1"
              fontSize="sm"
              fontWeight={300}
            >
              Staking to the most efficient notes. <br /> Creating the best
              value for stakers and node providers.
            </Text>
          </VStack>
          <HStack
            justifyContent="space-between"
            fontSize="xs"
            display={{ base: "flex", md: "none" }}
            px="4"
          >
            <Text textAlign="left" color="#c1c1c1" fontWeight={300}>
              Performance <br /> Leaderboard
            </Text>
            <Text textAlign="right" color="#c1c1c1" fontWeight={300}>
              Runtime <br /> Leaderboard
            </Text>
          </HStack>
          <Box
            mx="auto"
            mt={{ base: "-50px", xl: "-80px" }}
            maxW="1100px"
            px="4"
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
        </Box> */}
    </Box>
  );
}
