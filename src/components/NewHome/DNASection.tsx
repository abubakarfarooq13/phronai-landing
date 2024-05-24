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
    sm: "none",
  });

  const AIStakingDisplay = useBreakpointValue({
    base: "none",
    sm: "block",
  });

  return (
    <Box
      pt={{ base: "0px", md: "100px" }}
      pb="100px"
      bgImage="linear-gradient(146deg, rgba(0,0,0,0) 50%, rgba(80,41,150,1) 100%)"
    >
      <Container maxW="1300px" px="0">
        <VStack
          bgImage="/assets/new-home/dna-image.png"
          maxW="900px"
          minH="500px"
          bgSize="cover"
          bgPos="center"
          mx="auto"
          pt="50px"
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

        <Tabs variant="soft-rounded" colorScheme="green" mt="-300px">
          <TabList
            w="full"
            justifyContent="center"
            mt={{ base: "0px", md: "24" }}
            flexWrap={{ base: "wrap", md: "nowrap" }}
            gap="2"
            rowGap="4"
            maxW={{ base: "full", md: "800px" }}
            mx="auto"
            pb={{ base: "100px", md: "250px" }}
            px="4"
          >
            <Tab
              w="full"
              _selected={{
                color: "#fff",
                background: "linear-gradient(to right, #a159b7, #1245d9)",
              }}
              textAlign="center"
              textTransform="uppercase"
              fontWeight={300}
              className="btn"
              _before={{
                content: `'Layer 1 Minter'`,
                fontSize: { base: "13px", md: "16px" },
                lineHeight: "140%",
                px: "4",
              }}
              backgroundImage="linear-gradient(to right, #4A5568, #4A5568)"
              width="100%"
              height={{ base: "55px", md: "50px" }}
              maxW={{ base: "48%", md: "auto" }}
              mr={{ base: "0", md: "4" }}
            >
              Layer 1 Minter
            </Tab>
            <Tab
              _selected={{
                color: "#fff",
                background: "linear-gradient(to right, #a159b7, #1245d9)",
              }}
              textAlign="center"
              textTransform="uppercase"
              fontWeight={300}
              className="btn"
              _before={{
                content: `'Adaptive AI Staking'`,
                fontSize: { base: "13px", md: "16px" },
                lineHeight: "140%",
                px: "4",
              }}
              maxW={{ base: "48%", md: "auto" }}
              backgroundImage="linear-gradient(to right, #4A5568, #4A5568)"
              height={{ base: "55px", md: "50px" }}
              mr={{ md: "4" }}
            ></Tab>

            <Tab
              _selected={{
                color: "#fff",
                background: "linear-gradient(to right, #a159b7, #1245d9)",
              }}
              w="full"
              textAlign="center"
              textTransform="uppercase"
              fontWeight={300}
              className="btn"
              _before={{
                content: `'Node Block Sharing'`,
                fontSize: { base: "13px", md: "16px" },
                lineHeight: "140%",
                px: "4",
              }}
              maxW={{ base: "63%", md: "auto" }}
              backgroundImage="linear-gradient(to right, #4A5568, #4A5568)"
              width="100%"
              height={{ base: "55px", md: "50px" }}
              // minW={{ base: "100%", sm: "auto" }}
            >
              Node Block Sharing
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel px="0" pt="10">
              <VStack>
                <Box mx="auto" maxW={{ base: "100px", md: "200px" }}>
                  <Image
                    src="/assets/phronzero-text.png"
                    alt="phronzero text"
                    width={200}
                    height={150}
                  />
                </Box>
                <Text
                  as="h2"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  textTransform="uppercase"
                  letterSpacing="1px"
                  fontWeight={500}
                  mb="5"
                >
                  Layer 1 Minter
                </Text>

                <Box maxWidth={{ base: "100px", md: "200px" }}>
                  <Image
                    src="/assets/phronzero/layer-1-minter.png"
                    alt="box"
                    width={400}
                    height={400}
                    style={{
                      zIndex: 10,
                      position: "relative",
                    }}
                    className="infinit-move-1"
                  />
                </Box>

                <Grid
                  gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    sm: "repeat(2, 1fr)",
                  }}
                  bgImage="/assets/phronzero/black-blur-bg.png"
                  bgSize="100% 100%"
                  px={{ base: "4", md: "10" }}
                  pb={{ base: "4", md: "10" }}
                  pt="28"
                  bgPos="center"
                  w="full"
                  maxW="1000px"
                  gap="5"
                  position="relative"
                  mt={{ base: "-80px", md: "-110px" }}
                  rounded="2xl"
                  id="block-animation-section"
                >
                  <GridItem
                    bgImage="/assets/phronzero/card-black-bg.png"
                    bgSize="100% 100%"
                    bgPos="center"
                    px="10"
                    py="12"
                    position="relative"
                    rounded="2xl"
                  >
                    <VStack
                      align={{ base: "center", lg: "flex-start" }}
                      textAlign={{ base: "center", lg: "left" }}
                    >
                      <Box
                        maxWidth="100px"
                        display={{ base: "block", lg: "none" }}
                      >
                        <Image
                          className="infinit-move-4"
                          src="/assets/phronzero/clock1.png"
                          alt="clock1 image"
                          width={90}
                          height={90}
                        />
                      </Box>
                      <Text
                        mb={{ lg: "3" }}
                        fontSize="18px"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        opacity=".7"
                        as="h3"
                      >
                        Create your layer 1<br /> in minutes
                      </Text>
                      <Text opacity=".5" letterSpacing=".5px">
                        Choose your parameters to create your own blockchain
                      </Text>
                    </VStack>

                    <Box
                      maxWidth="100px"
                      position="absolute"
                      top="20px"
                      right="20px"
                      display={{ base: "none", lg: "flex" }}
                    >
                      <Image
                        className="infinit-move-4"
                        src="/assets/phronzero/clock1.png"
                        alt="card 1 image"
                        width={90}
                        height={90}
                      />
                    </Box>
                  </GridItem>
                  <GridItem
                    bgImage="/assets/phronzero/card-black-bg.png"
                    bgSize="100% 100%"
                    bgPos="center"
                    px="10"
                    py="12"
                    position="relative"
                    rounded="2xl"
                  >
                    <VStack
                      align={{ base: "center", lg: "flex-start" }}
                      textAlign={{ base: "center", lg: "left" }}
                    >
                      <Box
                        maxWidth="100px"
                        display={{ base: "block", lg: "none" }}
                      >
                        <Image
                          className="infinit-move-2"
                          src="/assets/phronzero/card-2-img.png"
                          alt="card 2 image"
                          width={200}
                          height={200}
                        />
                      </Box>
                      <Text
                        mb={{ lg: "3" }}
                        fontSize="18px"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        opacity=".7"
                        as="h3"
                      >
                        AI Enhancement
                      </Text>
                      <Text opacity=".5" letterSpacing=".5px">
                        Select AI parameters for the best performance
                      </Text>
                    </VStack>

                    <Box
                      maxWidth="100px"
                      position="absolute"
                      top="20px"
                      right="20px"
                      display={{ base: "none", lg: "block" }}
                    >
                      <Image
                        className="infinit-move-2"
                        src="/assets/phronzero/card-2-img.png"
                        alt="card 2 image"
                        width={200}
                        height={200}
                      />
                    </Box>
                  </GridItem>
                  <GridItem
                    bgImage="/assets/phronzero/card-black-bg.png"
                    bgSize="100% 100%"
                    bgPos="center"
                    px="10"
                    py="12"
                    position="relative"
                    rounded="2xl"
                  >
                    <VStack
                      align={{ base: "center", lg: "flex-start" }}
                      textAlign={{ base: "center", lg: "left" }}
                    >
                      <Box
                        maxWidth="100px"
                        display={{ base: "block", lg: "none" }}
                      >
                        <Image
                          className="infinit-move-3"
                          src="/assets/phronzero/card-3-img.png"
                          alt="card 3 image"
                          width={200}
                          height={200}
                        />
                      </Box>
                      <Text
                        mb={{ lg: "3" }}
                        fontSize="18px"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        opacity=".7"
                        as="h3"
                      >
                        Shared Nodes
                      </Text>
                      <Text opacity=".5" letterSpacing=".5px">
                        Get shared Nodes for an initial low cost initialization
                      </Text>
                    </VStack>

                    <Box
                      maxWidth="100px"
                      position="absolute"
                      top="20px"
                      right="20px"
                      display={{ base: "none", lg: "block" }}
                    >
                      <Image
                        className="infinit-move-3"
                        src="/assets/phronzero/card-3-img.png"
                        alt="card 3 image"
                        width={200}
                        height={200}
                      />
                    </Box>
                  </GridItem>
                  <GridItem
                    bgImage="/assets/phronzero/card-black-bg.png"
                    bgSize="100% 100%"
                    bgPos="center"
                    px="10"
                    py="12"
                    position="relative"
                    rounded="2xl"
                  >
                    <VStack
                      align={{ base: "center", lg: "flex-start" }}
                      textAlign={{ base: "center", lg: "left" }}
                    >
                      <Box
                        maxWidth="60px"
                        display={{ base: "block", lg: "none" }}
                      >
                        <Image
                          className="infinit-move-4"
                          src="/assets/phronzero/card-4-img.png"
                          alt="card 4 image"
                          width={150}
                          height={150}
                        />
                      </Box>
                      <Text
                        mb={{ lg: "3" }}
                        fontSize="18px"
                        letterSpacing="1px"
                        textTransform="uppercase"
                        opacity=".7"
                        as="h3"
                      >
                        Audit +
                      </Text>
                      <Text opacity=".5" letterSpacing=".5px">
                        Receive an automated auditing report for your freshly
                        minted L1!
                      </Text>
                    </VStack>

                    <Box
                      maxWidth="60px"
                      position="absolute"
                      top="20px"
                      right="20px"
                      display={{ base: "none", lg: "block" }}
                    >
                      <Image
                        className="infinit-move-4"
                        src="/assets/phronzero/card-4-img.png"
                        alt="card 4 image"
                        width={150}
                        height={150}
                      />
                    </Box>
                  </GridItem>
                </Grid>
              </VStack>
            </TabPanel>
            <TabPanel px="4" pt="10">
              <Box mx="auto" maxW="1100px" position="relative">
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
            </TabPanel>
            <TabPanel px="0" pt="10">
              <Box mx="auto" maxW={{ base: "100px", md: "200px" }}>
                <Image
                  src="/assets/phronzero-text.png"
                  alt="phronzero text"
                  width={200}
                  height={150}
                  style={{
                    margin: "0 auto",
                  }}
                />
              </Box>
              <Text
                as="h2"
                fontSize={{ base: "2xl", md: "4xl" }}
                textTransform="uppercase"
                letterSpacing="1px"
                fontWeight={500}
                mb="5"
                mt="2"
                textAlign="center"
              >
                Node Block Sharing
              </Text>
              <Text
                color="#838383"
                fontSize={{ base: "base", md: "xl" }}
                mb="5"
                textAlign="center"
              >
                Optimize Node usage between different Layer&apos;s!
              </Text>
              <Box maxW={{ base: "100px", md: "300px" }} mx="auto">
                <Image
                  src="/assets/phronzero/3-boxes.png"
                  alt="box"
                  width={300}
                  height={300}
                  style={{
                    // maxWidth: "300px",
                    zIndex: 10,
                    position: "relative",
                  }}
                  className="infinit-move-1"
                />
              </Box>
              <VStack
                bgColor="rgba(0,0,0,1)"
                position="relative"
                maxW="950px"
                mx="auto"
                pt={{ base: "10", md: "32" }}
                px={{ base: "2", md: "10" }}
                pb={{ base: "5", md: "10" }}
                border="1px"
                borderColor="rgba(75, 66, 97, .5)"
                rounded="3xl"
                mt={{ base: "-50px", md: "-120px" }}
              >
                <video width="900" height="900" autoPlay playsInline muted loop>
                  <source
                    src="/assets/phronzero/node-blocks/nodes-video-crop.mp4"
                    type="video/mp4"
                  />
                </video>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
}
