import React from "react";
import Image from "next/image";
import {
  Container,
  Text,
  VStack,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Stack,
  Link as CLink,
  Grid,
  GridItem,
  Input,
  HStack,
  Image as CImage,
} from "@chakra-ui/react";
import { Footer, Nav } from "..";
import { FaArrowRightLong } from "react-icons/fa6";

const Fade = require("react-reveal/Fade");

export default function CPhronZero() {
  return (
    <>
      <Nav />
      <Box
        backgroundImage="/assets/phronzero/background.png"
        bgSize="100% 100%"
        bgPos="center"
      >
        <Container maxW="1300px" pt={{ base: "50px", md: "100px" }} mb="100px">
          <Stack
            direction={{ base: "column-reverse", lg: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={{ base: "10", lg: "10" }}
          >
            <VStack
              zIndex={1}
              pt={{ md: "20px", lg: "100px" }}
              w={{ base: "full", md: "50%" }}
              align={{ base: "center", md: "start" }}
              spacing={{ base: "3", md: "6" }}
            >
              <Fade left>
                <Text
                  as="h1"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  textTransform="uppercase"
                  fontWeight={300}
                  textAlign={{ base: "center", lg: "start" }}
                  letterSpacing="1px"
                >
                  One Step Beyond <br /> With Artificial <br /> Intelligence
                </Text>

                {/* <Button
                  mt={{ base: "5", md: "0" }}
                  as={CLink}
                  href="https://phron.ai/whitepaper.pdf"
                  target="_blank"
                  variant="primary"
                  px="6"
                  py="4"
                  rounded="full"
                  rightIcon={<FaArrowRightLong />}
                >
                  <Text as="span" pr="2">
                    Get Started
                  </Text>
                </Button> */}
              </Fade>
            </VStack>
            <Box maxW={{ base: "550px", xl: "900px" }}>
              <Image
                className="infinit-move-1"
                src="/assets/phronzero/hero-image.png"
                alt="marketplace-img"
                width={1500}
                height={1054}
                style={{
                  marginLeft: "-14px",
                }}
              />
            </Box>
          </Stack>

          {/* --------------------- */}

          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList
              w="full"
              justifyContent={{ md: "center" }}
              overflow="auto"
              p="2"
              mt="24"
            >
              <Tab
                // px="10"
                minW={{ base: "200px", md: "auto" }}
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
                  fontSize: "16px",
                  px: "4",
                }}
                backgroundImage="linear-gradient(to right, #4A5568, #4A5568)"
                width="100%"
                height="50px"
              >
                Layer 1 Minter
              </Tab>
              <Tab
                // px="10"
                minW={{ base: "200px", md: "auto" }}
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
                  fontSize: "16px",
                  px: "4",
                }}
                backgroundImage="linear-gradient(to right, #4A5568, #4A5568)"
                width="100%"
                height="50px"
                mx="4"
              >
                Adaptive AI Staking
              </Tab>
              {/* <Tab
                // px="10"
                minW={{ base: "200px", md: "auto" }}
                _selected={{
                  color: "#fff",
                  background: "linear-gradient(to right, #a159b7, #1245d9)",
                }}
                textAlign="center"
                textTransform="uppercase"
                fontWeight={300}
                className="btn"
                _before={{
                  content: `'Nomination Pools'`,
                  fontSize: "16px",
                px: '4'
                }}
                backgroundImage="linear-gradient(to right, #4A5568, #4A5568)"
                width="100%"
                height="50px"
                mx="4"
              >
                Nomination Pools
              </Tab> */}
              <Tab
                // px="10"
                minW={{ base: "200px", md: "auto" }}
                _selected={{
                  color: "#fff",
                  background: "linear-gradient(to right, #a159b7, #1245d9)",
                }}
                textAlign="center"
                textTransform="uppercase"
                fontWeight={300}
                className="btn"
                _before={{
                  content: `'Node Block Sharing'`,
                  fontSize: "16px",
                  px: "4",
                }}
                backgroundImage="linear-gradient(to right, #4A5568, #4A5568)"
                width="100%"
                height="50px"
              >
                Node Block Sharing
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel px="0" pt="10">
                <VStack>
                  <Image
                    src="/assets/phronzero-text.png"
                    alt="phronzero text"
                    width={200}
                    height={150}
                  />
                  <Text
                    as="h2"
                    fontSize="4xl"
                    textTransform="uppercase"
                    letterSpacing="1px"
                    fontWeight={300}
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
                            src="/assets/phronzero/card-1-img.png"
                            alt="card 1 image"
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
                        >
                          Less Time Layer 1
                        </Text>
                        <Text opacity=".5" letterSpacing=".5px">
                          Create your Layer 1 in Minutes
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
                          src="/assets/phronzero/card-1-img.png"
                          alt="card 1 image"
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
                        >
                          Shared Nodes
                        </Text>
                        <Text opacity=".5" letterSpacing=".5px">
                          Get shared Nodes for an initial low cost
                          initialization
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
              <TabPanel px="0" pt="10">
                <Image
                  src="/assets/phronzero-text.png"
                  alt="phronzero text"
                  width={200}
                  height={150}
                  style={{
                    margin: "0 auto",
                  }}
                />
                <Text
                  as="h2"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  textTransform="uppercase"
                  letterSpacing="1px"
                  fontWeight={300}
                  mb="5"
                  mt="2"
                  textAlign="center"
                >
                  Adaptive Ai Staking
                </Text>
                <Text
                  textAlign="center"
                  color="#838383"
                  fontSize={{ base: "base", md: "xl" }}
                >
                  Staking to the most efficient nodes.
                </Text>
                <Text
                  textAlign="center"
                  color="#838383"
                  fontSize={{ base: "base", md: "xl" }}
                  mb="5"
                >
                  Creating the best value fo stakers and node providers.
                </Text>

                <Box maxW={{ base: "100px", md: "200px" }} mx="auto">
                  <Image
                    src="/assets/phronzero/box.png"
                    alt="box"
                    width={200}
                    height={200}
                    style={{
                      // maxWidth: "200px",
                      zIndex: 10,
                      position: "relative",
                      margin: "0 auto",
                    }}
                    className="infinit-move-1"
                  />
                </Box>
                <VStack
                  maxW="950px"
                  rounded="3xl"
                  border="1px"
                  borderColor="rgba(75, 66, 97, .5)"
                  mx="auto"
                  p="10"
                  bgColor="rgba(0,0,0,1)"
                  mt={{ base: "-50px", md: "-120px" }}
                >
                  <HStack justifyContent="space-between" w="full" mb="5">
                    <Text
                      textTransform="uppercase"
                      fontSize={{ base: "xs", md: "xl" }}
                      opacity=".7"
                      fontWeight={300}
                      letterSpacing="1px"
                    >
                      Performance <br />
                      Leader board
                    </Text>
                    <Text
                      textTransform="uppercase"
                      fontSize={{ base: "xs", md: "xl" }}
                      opacity=".7"
                      fontWeight={300}
                      letterSpacing="1px"
                      textAlign="right"
                    >
                      Runtime <br />
                      Leader board
                    </Text>
                  </HStack>
                  <video width="900" height="900" autoPlay loop muted>
                    <source
                      src="/assets/phronzero/ai-staking-images/staking-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </VStack>
              </TabPanel>
              <TabPanel px="0" pt="10">
                <Image
                  src="/assets/phronzero-text.png"
                  alt="phronzero text"
                  width={200}
                  height={150}
                  style={{
                    margin: "0 auto",
                  }}
                />
                <Text
                  as="h2"
                  fontSize={{ base: "2xl", md: "4xl" }}
                  textTransform="uppercase"
                  letterSpacing="1px"
                  fontWeight={300}
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
                  px={{ base: "5", md: "10" }}
                  pb={{ base: "5", md: "10" }}
                  border="1px"
                  borderColor="rgba(75, 66, 97, .5)"
                  rounded="3xl"
                  mt={{ base: "-50px", md: "-120px" }}
                >
                  <video width="900" height="900" autoPlay loop muted>
                    <source
                      src="/assets/phronzero/node-blocks/nodes-video-crop.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <>
                    {/* <Image
                      src="/assets/phronzero/node-black-sharing.png"
                      alt="node black sharing"
                      width={2700}
                      height={1900}
                    /> */}
                    {/* <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/layer-n3.png"
                      alt="layer n3"
                      width="193px"
                      height="75px"
                      position="absolute"
                      // top="121px"
                      // left="33px"
                      objectFit="contain"
                    />
                    <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/node-3.png"
                      alt="node 3"
                      width="120px"
                      height="136px"
                      position="absolute"
                      // top="294px"
                      // left="138px"
                      objectFit="contain"
                    />
                    <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/node-1.png"
                      alt="node 1"
                      // top="106px"
                      // left="295px"
                      width="153px"
                      height="178px"
                      objectFit="contain"
                      position="absolute"
                    />

                    <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/layer-n2.png"
                      alt="layer n2"
                      width="194px"
                      height="77px"
                      position="absolute"
                      // top="120px"
                      // right="241px"
                    />
                    <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/layer-n5.png"
                      alt="layer n5"
                      width="194px"
                      height="77px"
                      position="absolute"
                      // top="120px"
                      // right="23px"
                    />
                    <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/layer-n1.png"
                      alt="layer n1"
                      width="194px"
                      height="77px"
                      position="absolute"
                      // bottom="36px"
                      // right="241px"
                    />
                    <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/layer-n4.png"
                      alt="layer n4"
                      width="194px"
                      height="77px"
                      position="absolute"
                      // bottom="36px"
                      // right="23px"
                    />
                    <CImage
                      className="node-n-layers"
                      src="/assets/phronzero/node-blocks/node-2.png"
                      alt="node 2"
                      objectFit="contain"
                      width="124px"
                      height="139px"
                      position="absolute"
                      // top="229px"
                      // right="177px"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/circle-arrows.png"
                      alt="circle arrows"
                      objectFit="contain"
                      width="220px"
                      height="222px"
                      top="94px"
                      left="262px"
                      position="absolute"
                      className="circles-arrow"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/dashed-line.png"
                      alt="dashed line"
                      objectFit="contain"
                      width="1px"
                      height="66px"
                      position="absolute"
                      top="149px"
                      left="258px"
                      transform="rotate(107deg)"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/dashed-line.png"
                      alt="dashed line"
                      objectFit="contain"
                      width="1px"
                      height="66px"
                      position="absolute"
                      top="148px"
                      left="481px"
                      transform="rotate(254deg)"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/solid-line.png"
                      alt="solid line"
                      objectFit="contain"
                      width="1px"
                      height="111px"
                      position="absolute"
                      top="184px"
                      transform="rotate(164deg)"
                      left="170px"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/dashed-line.png"
                      alt="dashed line"
                      objectFit="contain"
                      width="1px"
                      height="234px"
                      position="absolute"
                      bottom="-22px"
                      transform="rotate(102deg)"
                      left="384px"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/solid-line.png"
                      alt="solid line"
                      objectFit="contain"
                      width="1px"
                      height="193px"
                      position="absolute"
                      left="508px"
                      transform="rotate(134deg)"
                      bottom="82px"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/solid-line.png"
                      alt="solid line"
                      objectFit="contain"
                      width="1px"
                      height="78px"
                      right="298px"
                      position="absolute"
                      transform="rotate(141deg)"
                      top="182px"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/dashed-line.png"
                      alt="dashed line"
                      objectFit="contain"
                      width="1px"
                      height="100px"
                      position="absolute"
                      right="147px"
                      transform="rotate(228deg)"
                      top="180px"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/dashed-line.png"
                      alt="dashed line"
                      objectFit="contain"
                      width="1px"
                      height="80px"
                      position="absolute"
                      right="316px"
                      bottom="82px"
                      transform="rotate(228deg)"
                      className="line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/dashed-line.png"
                      alt="dashed line"
                      objectFit="contain"
                      width="1px"
                      height="100px"
                      position="absolute"
                      right="147px"
                      bottom="73px"
                      transform="rotate(132deg)"
                      className="dashed-line-placeholder line"
                    />
                    <CImage
                      src="/assets/phronzero/node-blocks/solid-line.png"
                      alt="solid line"
                      objectFit="contain"
                      width="1px"
                      height="100px"
                      position="absolute"
                      right="147px"
                      bottom="73px"
                      transform="rotate(132deg)"
                      className="line solid-line-placeholder"
                    /> */}
                  </>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <VStack mt="20">
            <Box mb="4">
              <Image
                src="/assets/phronzero-logo-2.png"
                alt="phronzero logo"
                width={300}
                height={400}
              />
            </Box>

            <Text
              as="h2"
              fontSize="2xl"
              textTransform="uppercase"
              letterSpacing="1px"
              fontWeight={300}
              mb="5"
            >
              SignUp For The Portal Newsletter
            </Text>

            <Stack
              // bgImage="/assets/phronzero/input-bg.png"
              // bgSize="cover"
              // bgPos="center"
              px="2"
              py="2"
              bgColor="rgba(21, 9, 44, .5)"
              rounded={{ base: "12px", sm: "full" }}
              border="1px"
              borderColor="rgba(75, 66, 97, .5)"
              w="full"
              maxW="400px"
              h={{ sm: "45px" }}
              direction={{ base: "column", sm: "row" }}
              alignItems={{ sm: "center" }}
            >
              <Input
                border="0px"
                _focus={{
                  boxShadow: "none",
                }}
                placeholder="EMAIL"
                _placeholder={{
                  color: "#4b4261",
                }}
                fontFamily="inherit"
                bg="transparent"
                type="email"
              />
              <Button
                // as={CLink}
                // href="https://phron.ai/whitepaper.pdf"
                // target="_blank"
                variant="primary"
                px="6"
                py="3"
                rounded="full"
                rightIcon={<FaArrowRightLong />}
                fontWeight={400}
                size="sm"
              >
                <Text as="span" pr="2">
                  Sign Up
                </Text>
              </Button>
            </Stack>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
