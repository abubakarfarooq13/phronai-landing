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
          zIndex={1}
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
          pt={{ base: "100px", md: "400px" }}
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
              Dubai Crypto Expo 2023
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
              Most Innovative Blockchain 2023
            </Text>
            <Text color="#c1c1c1" textAlign="center" fontSize="15px">
              Phron AI received the award of the “Most Innovative Blockchain
              2023” at the Dubai Crypto Expo 2023. The reason for the above is
              the fact that Phron AI is the first EVM, Proof-of-Stake, Layer 1
              blockchain that uses the Sophia Protocol (Artificial Intelligence
              Statistical Consensus Mechanism) and Indirect-LTFM (Low
              Transaction Fee Management) Protocol.
            </Text>

            <Box pt="100px" pb="50px">
              <Stack
                direction={{ base: "column-reverse", md: "row" }}
                alignItems="center"
                mt="10"
                mb="20"
                spacing="10"
              >
                <Box w={{ base: "full", md: "50%" }}>
                  <Text fontSize="2xl" fontWeight={500} mb="5">
                    Phron AI Booth
                  </Text>
                  <Text color="#c1c1c1" fontSize="15px">
                    We applied our design team&apos;s masterwork to our booth
                    inside Dubai Crypto Expo 2023. Such a high level of artwork,
                    we believe strongly that it is part of our success, allowing
                    us to convey our mission in style.
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
                    Receiving an Award
                  </Text>
                  <Text color="#c1c1c1" fontSize="15px">
                    Phron AI propriety layer 1 technology, utilization of
                    artificial intelligence, and introductions of three new
                    protocols were highly appreciated at the Dubai Crypto Expo
                    2023. As a result, we received an award that motivates us to
                    continue with the level of innovation we are reaching in the
                    blockchain industry.
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
