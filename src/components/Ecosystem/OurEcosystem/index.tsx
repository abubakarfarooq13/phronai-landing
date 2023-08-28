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
import Card from "./Card";
const Fade = require("react-reveal/Fade");

export default function OurEcosystem() {
  return (
    <Box bgImage="/assets/blockchain-network-bg.jpg">
      <Container
        id="ecosystem"
        maxW="1160px"
        pt="100px"
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
              fontSize={{ base: "4xl", md: "5xl" }}
              lineHeight={{ base: "50px", md: "60px" }}
              fontWeight={500}
              textAlign="center"
            >
              Phronesis Ecosystem
            </Text>
          </Fade>

          <Grid
            mt="100px"
            mb="30px"
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            columnGap="50px"
            rowGap={{ base: "100px", lg: "50px" }}
          >
            <GridItem>
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
            </GridItem>
            <GridItem>
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
            </GridItem>
            <GridItem>
              <Fade bottom delay={400}>
                <Card
                  imgSrc="/assets/our-ecosystem/3.png"
                  title="Phronesis Smart Wallet"
                  description="An integrated wallet for all your gaming-related purchases."
                  buttonHref="#"
                  buttonText="Learn more"
                  imgHeight={235}
                  imgWidth={179}
                  index={3}
                />
              </Fade>
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
