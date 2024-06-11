import React from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { Footer, Nav } from "..";
import PartnerCard from "../Partners/PartnerCard";

const partners = [
  {
    id: 1,
    name: "Dexe Protocol",
    imageSrc: "/assets/partners/dexe.png",
    description:
      "An infrastructure for creating and governing DAOs. 50+ smart-contracts for your web-3 product.",
    twitterUrl: "https://twitter.com/DexeNetwork",
    websiteUrl: "https://www.dexe.network/",
  },
  {
    id: 2,
    name: "Hacken",
    imageSrc: "/assets/partners/hacken-logo.jpg",
    description:
      "Web3 Security Auditor • We make Web3 a safer place by protecting projects from getting hacked.",
    twitterUrl: "https://x.com/hackenclub",
    websiteUrl: "https://hacken.io/",
    style: {
      borderRadius: "100%",
    },
  },
  {
    id: 3,
    name: "Kredly",
    imageSrc: "/assets/partners/kredly-logo.svg",
    description:
      "AI-powered adjustments for rock-solid security. Dynamic fees, rewards & insurance keep the platform smooth & protected!",
    twitterUrl: "https://x.com/kredlyAI",
    websiteUrl: "https://kredly.ai/",
  },
];

const Fade = require("react-reveal/Fade");

export default function CVIPPartners() {
  return (
    <Box
      backgroundImage="/assets/new-background.png"
      bgPos="center"
      bgSize="cover"
    >
      <Nav />
      <Container maxW="1260px" pt="160px" position="relative" pb="96px">
        <Fade bottom>
          <Text
            as="h1"
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight={500}
            textAlign="center"
            letterSpacing="1px"
            mb="16"
          >
            Our VIP PartnerShips
          </Text>
        </Fade>

        <Box position="relative" maxW="1290px" mx="auto">
          {/* <Wrap justify="center" spacing="10">
            {partners.map((logo) => (
              <WrapItem
                key={logo.id}
                transition="all .3s"
                _hover={{
                  transform: "translateY(-10px)",
                }}
              >
                <Fade bottom delay={logo.id * 50}>
                  <Image
                    src={logo.imageSrc}
                    alt={logo.name + " logo"}
                    width={130}
                    height={150}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </Fade>
              </WrapItem>
            ))}
          </Wrap> */}

          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap="5"
          >
            {partners.map((partner, i) => (
              <GridItem key={partner.id}>
                {/* <Fade bottom delay={i * 50}> */}
                <PartnerCard
                  description={partner.description}
                  logoUrl={partner.imageSrc}
                  name={partner.name}
                  twitterUrl={partner.twitterUrl}
                  websiteUrl={partner.websiteUrl}
                  style={partner.style}
                />
                {/* </Fade> */}
              </GridItem>
            ))}
          </Grid>

          <Text
            // position="absolute"
            // right="0"
            // bottom="100px"
            fontSize="22px"
            color="#c1c1c1"
            textAlign="center"
            mt="20"
          >
            ...and much more coming soon
          </Text>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}
