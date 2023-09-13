import React from "react";
import {
  Box,
  Image as CImage,
  Text,
  Wrap,
  WrapItem,
  Container,
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Footer, Nav } from "..";
import ArticalCard from "./ArticalCard";

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

export default function News() {
  return (
    <>
      <Nav />
      <Box minH="100vh">
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
        <Box textAlign="center" mt={{ base: "40px", md: "70px" }} mb="70px">
          <Fade bottom>
            <Text
              as="h1"
              mb="5"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="2px"
              fontWeight={300}
            >
              Official Partner
            </Text>
          </Fade>
          <Fade bottom>
            <Stack
              direction="row"
              align="center"
              justifyContent="center"
              spacing="14"
            >
              <Image
                src="/assets/news/solid_proof_logo.png"
                width="200"
                height="62"
                alt="chordis logo"
              />
              <Image
                src="/assets/news/chordis_logo.png"
                width="190"
                height="44"
                alt="chordis logo"
              />
            </Stack>
          </Fade>
        </Box>
        <Container id="phron-features" maxW="1160px" pb="100px">
          <Wrap justify="center" spacing="44px">
            {data.map((d) => (
              <WrapItem key={d.id}>
                <Fade bottom>
                  <ArticalCard
                    buttonHref={d.articalLink}
                    description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                    title="Lorem ipsum upum ipopun impus"
                    imageUrl={d.imageUrl}
                  />
                </Fade>
              </WrapItem>
            ))}
          </Wrap>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
