import React from "react";
import {
  Box,
  Image as CImage,
  Text,
  Wrap,
  WrapItem,
  Container,
} from "@chakra-ui/react";
import { Footer, Nav } from "..";
import ArticalCard from "./ArticalCard";

const Fade = require("react-reveal/Fade");

const data = [
  {
    id: 1,
    imageUrl: "/assets/news/1.jpg",
  },
  {
    id: 2,
    imageUrl: "/assets/news/2.jpg",
  },
  {
    id: 3,
    imageUrl: "/assets/news/3.jpg",
  },
  {
    id: 4,
    imageUrl: "/assets/news/4.jpg",
  },
  {
    id: 5,
    imageUrl: "/assets/news/5.jpg",
  },
  {
    id: 6,
    imageUrl: "/assets/news/6.jpg",
  },
  {
    id: 7,
    imageUrl: "/assets/news/7.jpg",
  },
  {
    id: 8,
    imageUrl: "/assets/news/8.jpg",
  },
  {
    id: 9,
    imageUrl: "/assets/news/9.jpg",
  },
  {
    id: 10,
    imageUrl: "/assets/news/10.jpg",
  },
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
              mb="3"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="2px"
            >
              News
            </Text>
          </Fade>
          <Fade bottom>
            <Text fontSize="3xl" fontWeight={500}>
              Lorem Ipsum
            </Text>
          </Fade>
        </Box>
        <Container id="phron-features" maxW="1160px" pb="100px">
          <Wrap justify="center" spacing="44px">
            {data.map((d) => (
              <WrapItem key={d.id}>
                <Fade bottom>
                  <ArticalCard
                    buttonHref="#"
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
