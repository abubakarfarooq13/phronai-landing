import {
  Box,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

const Fade = require("react-reveal/Fade");

const SectionThree = () => {
  // const [isHovered, setIsHovered] = useState(false);

  return (
    <Box mb="5rem">
      <Box>
        <Container alignItems="center" maxWidth="1240px">
          <Fade bottom>
            {/* <Box textAlign="center" my="50px">
              <Text
                lineHeight={{ base: "38px", md: "45px" }}
                fontWeight="700"
                fontSize={{ base: "32px", md: "35px", lg: "40px" }}
              >
                From imagination to implementation:
                <Box as="br" display={{ base: "none", md: "block" }} />
                The road towards the future
              </Text>
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                mt="20px"
                color="#666c88"
              >
                Carved from the concept, we applied the concept of having a
                <Box as="span" display={{ base: "none", md: "block" }}></Box>
                long-lasting technology embedded with utility and accessibility.
              </Text>
            </Box> */}
          </Fade>
          <Fade bottom>
            <Stack
              direction={{ base: "column", md: "row" }}
              my="50px"
              bgImage="linear-gradient(45deg, rgba(126,138,174,1) 0%, rgba(170,173,208,1) 50%, rgba(126,138,174,1) 100%)"
              bgPos="center"
              // bgSize={{ base: "cover", lg: "100% 100%" }}
              // bg="red"
              // height="400px"
              borderRadius="30px"
              pt="10"
              px={{ base: "4", sm: "10", lg: "28" }}
              alignItems="center"
              justifyContent="space-between"
              spacing="10"
            >
              <Fade left>
                <VStack
                  align={{ base: "center", md: "flex-start" }}
                  textAlign={{ base: "center", md: "left" }}
                  pb="10"
                >
                  <Text fontSize="30px" fontWeight="500" color="#ffffff">
                    AI Agents
                  </Text>
                  <Text
                    maxW={{ base: "450px", lg: "350px" }}
                    mt="10px"
                    mb="20px"
                    color="#ffffff"
                  >
                    Power your everyday tasks with AI agents. Gatherings the
                    best solutions in the market in a single place.
                  </Text>
                  {/* <Box
                    as="a"
                    href="https://docs.phron.ai/"
                    target="_blank"
                    className="btn-grad"
                    w="fit-content"
                  >
                    Explore Phronesis
                  </Box> */}
                </VStack>
              </Fade>
              <Fade right>
                <Box>
                  <Image
                    src="/assets/open-phron/ai-agent-cropped.png"
                    alt="ai agent image"
                    width={437}
                    height={365}
                  />
                </Box>
              </Fade>
            </Stack>
          </Fade>

          <Flex
            mt="50px"
            bgImage="/assets/open-phron/cloud.png"
            bgPos={{ base: "left", md: "center" }}
            bgSize="cover"
            alignItems={{ md: "end" }}
            flexDir="column"
            mb="100px"
            borderRadius="30px"
          >
            <Fade right>
              <Box
                pr={{ base: "8",  md:"0",lg: "20" }}
                pl={{ base: "8", lg: "20" }}
                // pt={{ base: "70px", md: "80px" }}
                py={{ base: "10", lg: "32" }}
              >
                <Text
                  maxW={{ base: "full", md: "300px", lg: "full" }}
                  fontSize="30px"
                  fontWeight="500"
                  color="#000000"
                >
                  Decentralized Cloud Services
                </Text>
                <Text
                  maxW={{ base: "450px", lg: "350px" }}
                  mt="10px"
                  mb="20px"
                  color={{ base: "#fff", md: "#666c88" }}
                >
                  From GPU to Storage, find the most suitable solution provided
                  by different suppliers in a decentralized scale.
                </Text>
                {/* <Box
                  as="button"
                  className="btn-grad"
                  onMouseEnter={() => {
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                >
                  {isHovered ? "Coming Soon" : "Explore PhronZero"}
                </Box> */}
              </Box>
            </Fade>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default SectionThree;
