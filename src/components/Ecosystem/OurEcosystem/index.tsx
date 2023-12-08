import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Card from "./Card";
const Fade = require("react-reveal/Fade");

export default function OurEcosystem() {
  return (
    <Box bgImage="/assets/blockchain-network-bg.jpg">
      <Container
        id="ecosystem"
        maxW="1160px"
        pt={{ base: "70px", md: "100px" }}
        // mt={{
        //   md: "-100px",
        //   lg: "-300px",
        //   xl: "-250px",
        //   "3xl": "-600px",
        //   "4xl": "-400px",
        // }}

        pb="100px"
      >
        <VStack>
          <Fade top>
            <Text
              as="h2"
              fontSize={{ base: "4xl", md: "5xl", "3000px": "6xl" }}
              lineHeight={{ base: "50px", md: "60px", "3000px": "70px" }}
              fontWeight={500}
              textAlign="center"
            >
              Phronesis Ecosystem
            </Text>
          </Fade>
          {/* 
          <Wrap
            mt="100px"
            mb="30px"
            spacing="10"
            justify="center"
            spacingY="100px"
            w="full"
          >
            <WrapItem w="full" maxW="345px">
              <Fade bottom>
                <Card
                  imgSrc="/assets/our-ecosystem/1.png"
                  title="Phronesis Decentralized Exchange"
                  description="Enjoy a seamless transition between PHRON and your favorite token."
                  buttonHref="#"
                  buttonText="Learn more"
                  imgHeight={235}
                  imgWidth={220}
                  index={1}
                />
              </Fade>
            </WrapItem>
            <WrapItem w="full" maxW="345px">
              <Fade bottom delay={300}>
                <Card
                  imgSrc="/assets/our-ecosystem/2.png"
                  title="Phronesis Cross-Chain Bridge"
                  description="Bridge your assets with ease from one chain to another."
                  buttonHref="#"
                  buttonText="Learn more"
                  imgHeight={235}
                  imgWidth={220}
                  index={2}
                />
              </Fade>
            </WrapItem>
            <WrapItem w="full" maxW="345px">
              <Fade bottom delay={400}>
                <Card
                  imgSrc="/assets/our-ecosystem/3.png"
                  title="Phronesis Smart Wallet"
                  description="An integrated wallet for all your transactions and purchases."
                  buttonHref="#"
                  buttonText="Learn more"
                  imgHeight={235}
                  imgWidth={179}
                  index={3}
                />
              </Fade>
            </WrapItem>
          </Wrap> */}

          <VStack
            w="full"
            bgImage="/assets/our-ecosystem/section-bg-small.png"
            bgRepeat="no-repeat"
            bgSize="100% 100%"
            bgPos="center"
            p="10"
            // rounded="40px"
            textAlign="center"
            mt="10"
            spacing="10"
          >
            <Image
              src="/assets/our-ecosystem/1.png"
              alt="chain icon"
              width={150}
              height={150}
            />
            <Box>
              <Text fontSize="2xl" fontWeight={500}>
                Phronesis Decentralized Exchange
              </Text>

              <Text fontWeight={300} color="#c1c1c1">
                Enjoy a seamless transition between PHRON and your favorite
                token
              </Text>
            </Box>

            <Text letterSpacing="7px">
              <Text as="span" color="#6317fe">
                $PHRONESIS
              </Text>{" "}
              SWAP
            </Text>

            <Image
              src="/assets/our-ecosystem/swap.jpg"
              alt="our ecosystem swap"
              width={900}
              height={500}
              style={{ borderRadius: "20px" }}
            />

            <Button variant="primary-outline" rounded="full">
              Learn More
            </Button>

            {/* <Image src="/our-ecosystem/bridge.jpg" alt="bridge" /> */}
          </VStack>

          {/* <Button variant="primary" px="8" py="5" rounded="full">
          Contact Us
        </Button> */}
        </VStack>
      </Container>
    </Box>
  );
}
