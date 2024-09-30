import React, { useState } from "react";
import Image from "next/image";
import { Box, Container, Grid, GridItem, Text, VStack } from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function Community() {
  const [hoverButton, setHoverButton] = useState("");

  return (
    <Container maxW="1240px" pb="100px">
      <Fade bottom>
        <VStack alignItems="center" textAlign="center">
          <Text
            as="h2"
            fontSize="3xl"
            mb="4"
            fontWeight={"800 !important"}
            lineHeight="110%"
          >
            One way, one outcome <br /> Connect with the community
          </Text>
          <Text fontSize="lg">
            Enjoy a wallet not only backed by an ecosystem, but by a community
            of crypto enthusiast.
          </Text>
        </VStack>
      </Fade>

      <Grid
        gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={{ base: "10", md: "6" }}
        mt="10"
      >
        <GridItem>
          <Fade bottom>
            <Box>
              <Image
                src="/assets/phron-wallet/rocket-image.png"
                alt="rocket image"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <Text as="h3" fontSize="2xl" mb="2" fontWeight={"800 !important"}>
                Join our channels
              </Text>
              <Text>
                Check our different social media channels and interact with the
                community! The best way to improve is through ideas and
                feedback.
              </Text>
            </Box>
          </Fade>
        </GridItem>
        <GridItem>
          <Fade bottom delay={200}>
            <Box>
              <Image
                src="/assets/phron-wallet/phrony-image.png"
                alt="phrony image"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <Text as="h3" fontSize="2xl" mb="2" fontWeight={"800 !important"}>
                Ready for Action
              </Text>
              <Text>
                Easy to implement in your dApps. Avoid small, complicated
                matters, focus on the interesting stuff, your own tech.
              </Text>
            </Box>
          </Fade>
        </GridItem>
        <GridItem>
          <Fade bottom delay={300}>
            <Box>
              <Image
                src="/assets/phron-wallet/blocks-image.png"
                alt="phone image"
                width={400}
                height={400}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <Text as="h3" fontSize="2xl" mb="2" fontWeight={"800 !important"}>
                Try it out!
              </Text>
              <Text>
                Check out the different functionalities available and grow
                alongside our community, for a better future in the area of AI
                and Blockchain Tech.
              </Text>
            </Box>
          </Fade>
        </GridItem>
      </Grid>

      <VStack>
        <Box
          // as="a"
          // href="https://t.me/phron_bot"
          // target="_blank"
          mt="60px"
          mb="60px"
          w="full"
          maxW="195px"
          className="btn-grad"
          p="10px"
          zIndex={1}
          onMouseEnter={() => {
            setHoverButton("try-it-now");
          }}
          onMouseLeave={() => {
            setHoverButton("");
          }}
          cursor="pointer"
        >
          {hoverButton === "try-it-now" ? "Coming soon" : " Try it now!"}
        </Box>
      </VStack>
    </Container>
  );
}
