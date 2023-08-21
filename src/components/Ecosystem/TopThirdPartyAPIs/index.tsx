import React from "react";
import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function TopThirdPartyAPIs() {
  return (
    <Box bgImage="/assets/blockchain-network-bg.jpg">
      <Container id="ecosystem" w="full" maxW="1160px" mt="-100px" pb="200px">
        <VStack w="full">
          <Fade top>
            <Text
              as="h2"
              fontSize={{ base: "4xl", md: "5xl" }}
              lineHeight={{ base: "50px", md: "60px" }}
              fontWeight={500}
              textAlign="center"
            >
              Access the top third-party API
            </Text>
          </Fade>
          <Grid
            templateColumns={{
              base: "repeat(2, 150px)",
              md: "repeat(3, 150px)",
              lg: "repeat(4, 150px)",
            }}
            mt="10"
            w="full"
            gap="50"
            placeContent="space-between"
          >
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/1.png"
                  width={100}
                  height={100}
                  alt="infura icon"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/2.png"
                  width={100}
                  height={100}
                  alt="etherium with gas icon"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/3.png"
                  width={50}
                  height={100}
                  alt="etheriun logo"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/4.png"
                  width={100}
                  height={100}
                  alt="coin market cap icon"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/5.png"
                  width={150}
                  height={100}
                  alt="solidity logo"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/6.png"
                  width={100}
                  height={100}
                  alt="go language icon"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/7.png"
                  width={150}
                  height={100}
                  alt="amazon s3 logo"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
            <GridItem>
              <VStack>
                <Image
                  src="/assets/thirth-party-apis/8.png"
                  width={150}
                  height={100}
                  alt="coingecko logo"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />
              </VStack>
            </GridItem>
          </Grid>

          {/* <Button variant="primary" px="8" py="5" rounded="full">
          Contact Us
        </Button> */}
        </VStack>
      </Container>
    </Box>
  );
}
