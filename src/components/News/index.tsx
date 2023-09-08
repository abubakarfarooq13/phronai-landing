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
          <Text
            as="h1"
            mb="3"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="2px"
          >
            News
          </Text>
          <Text fontSize="3xl" fontWeight={500}>
            Lorem Ipsum
          </Text>
        </Box>
        <Container id="phron-features" maxW="1160px" pb="100px">
          <Wrap justify="center" spacing="44px">
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/1.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/2.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/3.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/4.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/5.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/6.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/7.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/8.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/9.jpg"
              />
            </WrapItem>
            <WrapItem>
              <ArticalCard
                buttonHref="#"
                description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
                title="Lorem ipsum upum ipopun impus"
                imageUrl="/assets/news/10.jpg"
              />
            </WrapItem>
          </Wrap>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
