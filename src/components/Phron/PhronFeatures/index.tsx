import React from "react";
import {
  Box,
  Container,
  Text,
  Button,
  VStack,
  Wrap,
  WrapItem,
  Link,
} from "@chakra-ui/react";
import Card from "./Card";
import { PHRON_INFO_EMAIL } from "@/constant";
const Fade = require("react-reveal/Fade");

export default function PhronFeatures() {
  return (
    <Box>
      <Container id="phron-features" maxW="1160px" pb="100px">
        <VStack>
          <Wrap
            mt="100px"
            mb="30px"
            spacing="10"
            justify="center"
            spacingY="50px"
          >
            <WrapItem w="full" maxW={{ base: "full", sm: "293px" }}>
              <Fade bottom>
                <Card
                  imgSrc="/assets/phron/cart.png"
                  title="Buy your favorite Games!"
                  description="Lorem Lorem"
                  buttonHref="#"
                  buttonText="Learn more"
                  imgHeight={235}
                  imgWidth={202}
                  index={1}
                  mt="-100px"
                />
              </Fade>
            </WrapItem>
            <WrapItem w="full" maxW={{ base: "full", sm: "293px" }}>
              <Fade bottom delay={300}>
                <Card
                  imgSrc="/assets/phron/game-assets.png"
                  title="Enjoy your gameplay with the best items"
                  description="Lorem Lorem"
                  buttonHref="#"
                  buttonText="Learn more"
                  imgWidth={221}
                  imgHeight={153}
                  index={2}
                  mt="-50px"
                />
              </Fade>
            </WrapItem>
            <WrapItem w="full" maxW={{ base: "full", sm: "293px" }}>
              <Fade bottom delay={400}>
                <Card
                  imgSrc="/assets/phron/robots-shaking-hands.png"
                  title="Make simple transactions among your friends"
                  description="Lorem Lorem"
                  buttonHref="#"
                  buttonText="Learn more"
                  imgWidth={313}
                  imgHeight={142}
                  index={3}
                />
              </Fade>
            </WrapItem>
          </Wrap>

          <Button
            as={Link}
            href={`mailto:${PHRON_INFO_EMAIL}`}
            variant="primary"
            px="8"
            py="5"
            rounded="full"
            fontSize={{ "3000px": "lg" }}
          >
            Contact Us
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
