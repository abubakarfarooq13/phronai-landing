import { Box, Flex, Text, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import ConnectWalletButton from "../Shared/ConnectWalletButton";

const Fade = require("react-reveal/Fade");

const SectionOne = () => {
  return (
    <Box>
      <Box
      // bgImage="/assets/open-phron/bg.png" bgPos="center" bgSize="cover"
      >
        <Container maxW="1240px">
          <Flex
            flexDir={{ base: "column", lg: "row" }}
            py="50px"
            justifyContent={{ lg: "space-between" }}
            alignItems={{ base: "center", lg: "" }}
          >
            <Fade left>
              <Box textAlign={{ base: "center", lg: "start" }}>
                <Text
                  as="h1"
                  color="#713fc0"
                  fontSize={{ base: "20px", md: "25px", lg: "25px" }}
                  fontWeight="600"
                >
                  open Phron
                </Text>
                <Text
                  fontWeight="700"
                  fontSize={{ base: "40px", md: "55px", lg: "55px" }}
                  lineHeight={{ base: "45px", md: "55px" }}
                  as="p"
                >
                  AI Web 3.0
                  <br />
                  Development,
                  <br />
                  made easy.
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "15px" }}
                  mb="20px"
                  mt="15px"
                  color="#666c88"
                >
                  An aggregator for all things AI in Web 3.0.
                </Text>
                <Flex justifyContent={{ base: "center", lg: "start" }}>
                <ConnectWalletButton label="Try Phronesis AI consensus" gradientButton />
                </Flex>

                <Flex
                  justifyContent={{ base: "center", lg: "start" }}
                  mt="30px"
                >
                  <Image
                    src="/assets/open-phron/hacken-gray.png"
                    alt="openphron"
                    height="80"
                    width="80"
                  />
                </Flex>
              </Box>
            </Fade>
            <Fade right>
              <Box
                mt={{ base: "20px", lg: "0px" }}
              >
                <Image
                  src="/assets/open-phron/sectionone.png"
                  alt="openphron"
                  width={600}
                  height={400}
                />
              </Box>
            </Fade>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default SectionOne;
