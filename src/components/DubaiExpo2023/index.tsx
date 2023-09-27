import React from "react";
import {
  Box,
  Image as CImage,
  Text,
  Wrap,
  WrapItem,
  Container,
  Stack,
  Link,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Footer, Nav } from "..";

const Fade = require("react-reveal/Fade");

const data = [
  {
    id: 1,
    imageUrl: "/assets/news/bloomberg.jpg",
    articalLink:
      "https://www.bloomberg.com/press-releases/2023-09-11/phronesis-launches-world-s-first-l1-blockchain-leveraging-ai-and-the-sophia-protocol",
  },
  {
    id: 2,
    imageUrl: "/assets/news/yahoo_finance.jpg",
    articalLink:
      "https://finance.yahoo.com/news/phronesis-launches-worlds-first-l1-141500152.html",
  },
  {
    id: 3,
    imageUrl: "/assets/news/market_watch.jpg",
    articalLink:
      "https://www.marketwatch.com/press-release/phronesis-launches-world-s-first-l1-blockchain-leveraging-ai-and-the-sophia-protocol-627b8748?mod=search_headline",
  },
  {
    id: 4,
    imageUrl: "/assets/news/trading_view.jpg",
    articalLink:
      "https://www.tradingview.com/news/reuters.com,2023-09-11:newsml_GNX7890gl:0-phronesis-launches-world-s-first-l1-blockchain-leveraging-ai-and-the-sophia-protocol/",
  },
  {
    id: 5,
    imageUrl: "/assets/news/globenewswire.jpg",
    articalLink:
      "https://www.globenewswire.com/news-release/2023/09/11/2740957/0/en/Phronesis-Launches-world-s-first-L1-Blockchain-Leveraging-AI-and-the-Sophia-Protocol.html",
  },
  {
    id: 6,
    imageUrl: "/assets/news/crypto_adventure.jpg",
    articalLink:
      "https://cryptoadventure.com/phronesis-launches-worlds-first-l1-blockchain-leveraging-ai-and-the-sophia-protocol/",
  },
  {
    id: 7,
    imageUrl: "/assets/news/inventor_observer.jpg",
    articalLink:
      "https://www.investorsobserver.com/news/qm-pr/8996362705645265",
  },
  {
    id: 7,
    imageUrl: "/assets/news/coin_market_cap.jpg",
    articalLink:
      "https://coinmarketcap.com/community/articles/64fede23d90a7c4f44029bb0/",
  },

  // {
  //   id: 9,
  //   imageUrl: "/assets/news/9.jpg",
  //   articalLink:
  //     "https://cryptoadventure.com/phronesis-launches-worlds-first-l1-blockchain-leveraging-ai-and-the-sophia-protocol/",
  // },
  // {
  //   id: 10,
  //   imageUrl: "/assets/news/10.jpg",
  //   articalLink:
  //     "https://coinmarketcap.com/community/articles/64fede23d90a7c4f44029bb0/",
  // },
];

export default function DubaiExpo2023() {
  return (
    <>
      <Nav />
      <Box minH="100vh" mt={{ md: "-70px" }}>
        <CImage
          src="/assets/dubai-expo-2023/phronesis_exhibition_new.png"
          w="full"
          pos="absolute"
          zIndex={-1}
        />
        <CImage
          src="/assets/purple-shadow-header-top.png"
          pos="absolute"
          top="0px"
          left="0px"
          w="full"
          maxW="50%"
          zIndex={-1}
          display={{ base: "none", lg: "flex" }}
        />

        <CImage
          src="/assets/purple-shadow-left.png"
          pos="absolute"
          top="0px"
          left="0px"
          display={{ base: "none", lg: "flex" }}
          zIndex={-1}
        />
        <Container
          id="phron-features"
          maxW="1160px"
          pt={{ base: "50px", md: "400px" }}
          pb="100px"
        >
          <Box
            backgroundImage="linear-gradient(148deg, rgba(41,20,82,1) 0%, #03020b 50%);"
            py="12"
            px={{ base: "4", md: "16" }}
            borderRadius="30px"
          >
            {/* <Text
              textAlign="center"
              fontWeight={300}
              textTransform="uppercase"
              mb="2"
              fontSize="sm"
            >
              News
            </Text> */}
            <Text
              textAlign="center"
              fontSize={{ base: "2xl", md: "4xl" }}
              mb="3"
            >
              Crypto
            </Text>
            {/* <HStack justifyContent="center" spacing="5">
              <Box
                width="30px"
                height="30px"
                rounded="full"
                bgColor="#728eff"
              />
              <Text color="#c1c1c1" fontSize="sm">
                George &nbsp;&nbsp; | &nbsp;&nbsp; 2 min read
              </Text>
            </HStack> */}
            <Box my="10">
              <Image
                src="/assets/dubai-expo-2023/stage-img.jpg"
                width={1000}
                height={500}
                alt="stage image"
                style={{
                  borderRadius: "25px",
                }}
              />
            </Box>
            <Text fontSize="2xl" fontWeight={500} textAlign="center" mb="5">
              Lorem ispum lorem upum
            </Text>
            <Text color="#c1c1c1" textAlign="center" fontSize="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>

            <Box py="100px">
              <Stack
                direction={{ base: "column-reverse", md: "row" }}
                alignItems="center"
                mt="10"
                mb="20"
                spacing="10"
              >
                <Box w={{ base: "full", md: "50%" }}>
                  <Text fontSize="2xl" fontWeight={500} mb="5">
                    Lorem ispum lorem upum
                  </Text>
                  <Text color="#c1c1c1" fontSize="15px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Box>

                <Box w={{ base: "full", md: "50%" }}>
                  <Image
                    src="/assets/dubai-expo-2023/phron-1.jpg"
                    width={500}
                    height={300}
                    alt="phron-1"
                    style={{
                      borderRadius: "15px",
                    }}
                  />
                </Box>
              </Stack>

              <Stack
                direction={{ base: "column", md: "row" }}
                alignItems="center"
                my="10"
                spacing="10"
              >
                <Box w={{ base: "full", md: "50%" }}>
                  <Image
                    src="/assets/dubai-expo-2023/phron-2.jpg"
                    width={500}
                    height={300}
                    alt="phron-1"
                    style={{
                      borderRadius: "15px",
                    }}
                  />
                </Box>
                <Box w={{ base: "full", md: "50%" }}>
                  <Text fontSize="2xl" fontWeight={500} mb="5">
                    Lorem ispum lorem upum
                  </Text>
                  <Text color="#c1c1c1" fontSize="15px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </Box>
              </Stack>
            </Box>

            <Text fontSize="2xl" fontWeight={500} textAlign="center" mb="5">
              Lorem ispum lorem upum
            </Text>
            <Text color="#c1c1c1" textAlign="center" fontSize="15px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est
              laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
