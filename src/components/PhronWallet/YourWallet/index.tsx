import React from "react";
import Image from "next/image";
import { Box, Container, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function YourWallet() {
  return (
    <Container maxW="1240px" py="100px">
      <VStack alignItems="center" textAlign="center">
        <Text
          as="h2"
          fontSize="3xl"
          mb="4"
          fontWeight={"800 !important"}
          lineHeight="110%"
        >
          Your wallet, Easy and Simple
        </Text>
        <Text fontSize="lg">A wallet for you.</Text>
        <Text maxW="2xl" fontSize="lg">
          Decentralized, secure, private, all in one place.
        </Text>
      </VStack>

      <Fade>
        <Grid
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          mt="20"
          gap="6"
        >
          <GridItem
            rowSpan={{ md: 2 }}
            bgImage="/assets/phron-wallet/bg-1.png"
            bgPos="center"
            bgSize="cover"
            h="full"
            w="full"
            rounded="3xl"
          >
            <Box
              marginTop="-100px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src="/assets/phron-wallet/phone-shield.png"
                alt="phone shield"
                width={400}
                height={500}
              />
            </Box>
          </GridItem>
          <GridItem>
            <Box bgColor="#edecf9" h="full" py="10" px="8" rounded="2xl">
              <Text as="h3" fontSize="xl" fontWeight={"800 !important"} mb="4">
                Deposit your Assets
              </Text>
              <Text>
                Enjoy an easy way to deposit, send and transact the different
                assets your own within your wallet. Everything with a couple of
                clicks, without complications or hassles.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box bgColor="#ebe0f9" h="full" py="10" px="8" rounded="2xl">
              <Text as="h3" fontSize="xl" fontWeight={"800 !important"} mb="4">
                Not your keys, not your crypto
              </Text>
              <Text mb="20px">
                Providing the best security, but not controlling your assets nor
                your keys. Always trying to provide the decentralization and
                privacy required for a Web 3.0 environment.
              </Text>

              <Box
                as="a"
                href="https://t.me/phron_bot"
                target="_blank"
                w="full"
                className="btn-grad"
                p="10px"
                zIndex={1}
                maxW="260px"
              >
                Explore Phron AI De Wallet
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Fade>
    </Container>
  );
}
