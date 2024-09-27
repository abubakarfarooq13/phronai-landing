import {
  Box,
  Button,
  Container,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Fade = require("react-reveal/Fade");

export default function PhronWalletHero() {
  return (
    <Box
      pb="60px"
      bgSize="cover"
      bgPos="top"
      bgRepeat="no-repeat"
      pt={{ base: "90px", sm: "140px", lg: "110px" }}
      mt={{ base: "0px", sm: "130px", lg: "150px", xl: "100px" }}
      position="relative"
      minH="600px"
      bgImage="/assets/phron-wallet/background.jpg"
      mx="auto"
    >
      <Container maxW="1240px">
        <Fade bottom>
          <VStack>
            <Text fontSize="xl" fontWeight={700}>
              Phron AI DeWallet
            </Text>

            <Fade bottom>
              <Text
                fontWeight={700}
                fontSize="4xl"
                lineHeight="110%"
                textAlign="center"
                mb="5"
              >
                Your decentralized gateway
                <Box as="br" display={{ base: "none", md: "block" }} /> to
                storing to your assets.
              </Text>
              <Text
                bgColor="#fff"
                textAlign="center"
                color="#000"
                rounded="full"
                px={3}
              >
                Enjoy an easy and simple way to transact, buy and sell tokens,
                NFTs and more!
              </Text>
            </Fade>
          </VStack>
        </Fade>

        <Stack direction="row" justifyContent="center" spacing="0" mt="70px">
          <Fade bottom delay={200}>
            <Box mr={{ base: "-50px", md: "-100px" }}>
              <Image
                src="/assets/phron-wallet/ph3.png"
                alt="phone 1"
                width={400}
                height={700}
              />
            </Box>
          </Fade>
          <Fade bottom>
            <Box mt="-70px">
              <Image
                src="/assets/phron-wallet/ph2.png"
                alt="phone 1"
                width={500}
                height={900}
              />
            </Box>
          </Fade>
          <Fade bottom delay={300}>
            <Box ml={{ base: "-50px", md: "-100px" }}>
              <Image
                src="/assets/phron-wallet/ph1.png"
                alt="phone 1"
                width={400}
                height={700}
              />
            </Box>
          </Fade>
        </Stack>

        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing="4"
          justifyContent="center"
          mt="10"
        >
          <Button
            colorScheme="blackAlpha"
            bgColor="#000"
            _hover={{
              bgColor: "rgba(0,0,0,0.8)",
            }}
            size={{ base: "md", sm: "lg" }}
            rounded="full"
            pr="20px"
            pl="10px"
            fontSize="16px"
            fontWeight={400}
            leftIcon={
              <Box
                bgColor="#fff"
                rounded="full"
                w="25px"
                h="25px"
                display="grid"
                placeContent="center"
              >
                <Image
                  src="/assets/phron-wallet/brave-logo.svg"
                  alt="brave logo"
                  width={15}
                  height={15}
                />
              </Box>
            }
          >
            Brave Browser
          </Button>
          <Button
            colorScheme="blackAlpha"
            bgColor="#000"
            _hover={{
              bgColor: "rgba(0,0,0,0.8)",
            }}
            size={{ base: "md", sm: "lg" }}
            pr="20px"
            pl="10px"
            rounded="full"
            fontSize="16px"
            fontWeight={400}
            leftIcon={
              <Image
                src="/assets/phron-wallet/chrome-logo.svg"
                alt="chrome logo"
                width={25}
                height={25}
              />
            }
          >
            Chrome Browser
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
