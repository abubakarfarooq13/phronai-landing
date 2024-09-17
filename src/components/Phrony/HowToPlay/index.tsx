import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  HStack,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function HowToPlay() {
  return (
    <Box pb="100px" pt="50px">
      <Container maxW="1240px">
        <VStack alignItems="center" textAlign="center">
          <Text
            as="h2"
            fontSize="60px"
            mb="4"
            fontWeight={"800 !important"}
            lineHeight="120%"
          >
            Phrony The Game
          </Text>
          <Text as="h2" fontSize="3xl" fontWeight={800} lineHeight="110%">
            How to play?
          </Text>
          <Text maxW="2xl" fontSize="lg" color="gray.600">
            As a community-driven game, Phrony The Game was created as a
            telegram game to make it extremely accessible to the community.
          </Text>
        </VStack>
        <Wrap spacing={8} justify="center" mt={12}>
          {[
            {
              title: "Enter Phrony The Game Telegram Bot",
              description:
                "Search @phron_bot in telegram, it will direct you to our beloved mascot to begin playing!",
              descriptionPaddingBottom: { md: "34px", xl: "90px" },
              bgImage: "linear-gradient(45deg, #fcf6fe 0%, #f0eaf1 100%)",
              image: {
                src: "/assets/phrony/telegram-svg-cropped.png",
                alignItems: "center",
                width: 200,
                height: 200,
              },
            },
            {
              title: "Start Phrony!",
              description:
                "When redirected to our bot, you must introduce /start to receive the action button to begin playing",
              descriptionPaddingBottom: "16px",
              bgImage:
                "linear-gradient(45deg, rgba(210,220,231,1) 0%, rgba(234,237,241,1) 100%)",
              image: {
                src: "/assets/phrony/tap-mobile-cropped.png",
                alignItems: "flex-end",
                width: 270,
                height: 200,
              },
            },
            {
              title: "Get Ready to Tap!",
              description:
                "That's all Once you enter you are ready to begin tapping, with the availability to complete tasks alongside  getting additional perks such as Miners, Multi-taps and many more!",
              descriptionPaddingBottom: "38px",
              bgImage: "linear-gradient(45deg, #f2f1ff 0%, #f2f1ff 100%)",
              image: {
                src: "/assets/phrony/coins.png",
                alignItems: "center",
                width: 200,
                height: 200,
                pb: "28px",
              },
            },
          ].map((el, index) => (
            <WrapItem maxW={{ base: "290px", xl: "370px" }} key={index}>
              <Fade bottom delay={index * 100}>
                <Box
                  bgImage={el.bgImage}
                  borderRadius="2xl"
                  h="fit-content"
                  pt="28px"
                  overflow="hidden"
                >
                  <Box px="28px">
                    <Text
                      as="h4"
                      fontSize="24px"
                      fontWeight={800}
                      lineHeight="140%"
                      mb={4}
                    >
                      {el.title}
                    </Text>
                    <Text mb={el.descriptionPaddingBottom} fontSize="sm">
                      {el.description}
                    </Text>
                  </Box>
                  <VStack alignItems={el.image.alignItems} pb={el.image.pb}>
                    <Image
                      src={el.image.src}
                      alt={el.title + " image"}
                      width={el.image.width}
                      height={el.image.height}
                    />
                  </VStack>
                </Box>
              </Fade>
            </WrapItem>
          ))}
        </Wrap>
        <VStack mt="10">
          <Box
            as="a"
            href="https://t.me/phron_bot"
            target="_blank"
            mt="30px"
            w="full"
            maxW="195px"
            className="btn-grad"
          >
            Try Now
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
