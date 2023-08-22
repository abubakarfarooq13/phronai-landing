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

export default function PhronFeatures() {
  return (
    <Box>
      <Container id="phron-features" maxW="1160px" pb="100px">
        <VStack>
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
                  imgSrc="/assets/phron/cart.png"
                  title="Buy Games"
                  description="Lorem Lorem"
                  buttonHref="#"
                  buttonText="Learn more"
                  imgHeight={235}
                  imgWidth={202}
                  index={1}
                  mt="-100px"
                />
              </Fade>
            </GridItem>
            <GridItem>
              <Fade bottom delay={300}>
                <Card
                  imgSrc="/assets/phron/game-assets.png"
                  title="Transfer in-game items"
                  description="Lorem Lorem"
                  buttonHref="#"
                  buttonText="Learn more"
                  imgWidth={221}
                  imgHeight={153}
                  index={2}
                  mt="-50px"
                />
              </Fade>
            </GridItem>
            <GridItem>
              <Fade bottom delay={400}>
                <Card
                  imgSrc="/assets/phron/robots-shaking-hands.png"
                  title="Simple Transactions"
                  description="Lorem Lorem"
                  buttonHref="#"
                  buttonText="Learn more"
                  imgWidth={313}
                  imgHeight={142}
                  index={3}
                />
              </Fade>
            </GridItem>
          </Grid>

          <Button variant="primary" px="8" py="5" rounded="full">
            Contact Us
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
