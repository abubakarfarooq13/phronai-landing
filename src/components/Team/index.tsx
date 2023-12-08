import React from "react";
import Image from "next/image";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Container,
  VStack,
  Button,
  useBreakpointValue,
  Link as CLink,
  Image as CImage,
} from "@chakra-ui/react";
import { Nav } from "..";
import { PHRON_INFO_EMAIL } from "@/constant";

const Fade = require("react-reveal/Fade");

export default function Team() {
  const rehanImageTop = useBreakpointValue({ base: "-35px", sm: "-35px" });
  const richardImageTop = useBreakpointValue({ base: "-80px", sm: "-50px" });
  const jacobImageTop = useBreakpointValue({ base: "-80px", sm: "-50px" });

  return (
    <Box
      bgImage="/assets/team/background.png"
      bgPos="bottom"
      bgSize="100% 100%"
      bgRepeat="no-repeat"
    >
      <Nav />
      <CImage
        src="/assets/purple-shadow-header-top-small.png"
        alt="purple-shadow-header-top-small"
        pos="absolute"
        left="0px"
      />
      <Container maxW="1160px" pt="70px" pb="100px">
        <Fade bottom>
          <Text
            as="h1"
            fontSize={{ base: "4xl", md: "5xl", "3000px": "7xl" }}
            lineHeight={{ base: "40px", md: "60px", "3000px": "70px" }}
            fontWeight={500}
            mb={{ base: "1", "3000px": "3" }}
            textAlign="center"
          >
            Our Team
          </Text>
        </Fade>

        <Grid
          gridTemplateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          rowGap={{ base: "36", md: "24" }}
          gap="10"
          mt="40"
          mb="20"
        >
          <GridItem>
            <Fade bottom delay={300}>
              <VStack pos="relative">
                <Image
                  src="/assets/team/henry.png"
                  alt="Henry Hyde-Thomson Head of artificial intelligence"
                  width={200}
                  height={400}
                  style={{
                    position: "absolute",
                    top: "-100px",
                  }}
                  priority
                />
                <Image
                  src="/assets/team/henry-bg.png"
                  alt="Henry Hyde-Thomson background"
                  width={350}
                  height={270}
                  priority
                />
                <VStack spacing="2" mt="-100px" textAlign="center" zIndex={99}>
                  <Text fontWeight={500} fontSize="lg">
                    Henry Hyde-Thomson
                  </Text>
                  <Text color="#c1c1c1" textTransform="uppercase" fontSize="sm">
                    Head of artificial <br /> intelligence
                  </Text>
                </VStack>
              </VStack>
            </Fade>
          </GridItem>
          <GridItem>
            <Fade bottom delay={600}>
              <VStack pos="relative">
                <Image
                  src="/assets/team/guillermo.png"
                  alt="Henry Hyde-Thomson Head of artificial intelligence"
                  width={240}
                  height={400}
                  style={{
                    position: "absolute",
                    top: "-100px",
                  }}
                  priority
                />
                <Image
                  src="/assets/team/guillermo-bg.png"
                  alt="Guillermo Guimaraes Co Founder"
                  width={350}
                  height={270}
                  priority
                />
                <VStack spacing="2" mt="-100px" textAlign="center" zIndex={99}>
                  <Text fontWeight={500} fontSize="lg">
                    Guillermo Guimaraes
                  </Text>
                  <Text color="#c1c1c1" textTransform="uppercase" fontSize="sm">
                    Co Founder
                  </Text>
                </VStack>
              </VStack>
            </Fade>
          </GridItem>
          <GridItem>
            <Fade bottom delay={900}>
              <VStack pos="relative">
                <Image
                  src="/assets/team/igor.png"
                  alt="Guillermo Guimaraes Co Founder"
                  width={270}
                  height={400}
                  style={{
                    position: "absolute",
                    top: "-70px",
                  }}
                  priority
                />
                <Image
                  src="/assets/team/igor-bg.png"
                  alt="Guillermo Guimaraes Co Founder"
                  width={350}
                  height={270}
                  priority
                />
                <VStack spacing="2" mt="-100px" textAlign="center" zIndex={99}>
                  <Text fontWeight={500} fontSize="lg">
                    Igor Bershadsky
                  </Text>
                  <Text color="#c1c1c1" textTransform="uppercase" fontSize="sm">
                    Chief Business <br />
                    Developer Officer
                  </Text>
                </VStack>
              </VStack>
            </Fade>
          </GridItem>
          <GridItem>
            <Fade bottom delay={300}>
              <VStack pos="relative">
                <Image
                  src="/assets/team/rehan.png"
                  alt="Guillermo Guimaraes Co Founder"
                  width={250}
                  height={400}
                  style={{
                    position: "absolute",
                    top: rehanImageTop,
                  }}
                />
                <Image
                  src="/assets/team/rehan-bg.png"
                  alt="Rehan Shams Head of blockchain"
                  width={350}
                  height={270}
                />
                <VStack spacing="2" mt="-100px" textAlign="center" zIndex={99}>
                  <Text fontWeight={500} fontSize="lg">
                    Rehan Shams
                  </Text>
                  <Text color="#c1c1c1" textTransform="uppercase" fontSize="sm">
                    Head of blockchain
                  </Text>
                </VStack>
              </VStack>
            </Fade>
          </GridItem>
          <GridItem>
            <Fade bottom delay={600}>
              <VStack pos="relative">
                <Image
                  src="/assets/team/richard.png"
                  alt="Rehan Shams Head of blockchain"
                  width={300}
                  height={400}
                  style={{
                    position: "absolute",
                    top: richardImageTop,
                  }}
                />
                <Image
                  src="/assets/team/richard-bg.png"
                  alt="Rehan Shams Head of blockchain"
                  width={350}
                  height={270}
                />
                <VStack spacing="2" mt="-100px" textAlign="center" zIndex={99}>
                  <Text fontWeight={500} fontSize="lg">
                    Richard
                  </Text>
                  <Text color="#c1c1c1" textTransform="uppercase" fontSize="sm">
                    Head of Legal Department
                  </Text>
                </VStack>
              </VStack>
            </Fade>
          </GridItem>
          <GridItem>
            <Fade bottom delay={900}>
              <VStack pos="relative">
                <Image
                  src="/assets/team/jacob.png"
                  alt="Jacob Slimakh Head of Graphics"
                  width={250}
                  height={400}
                  style={{
                    position: "absolute",
                    top: jacobImageTop,
                  }}
                />
                <Image
                  src="/assets/team/jacob-bg.png"
                  alt="Jacob Slimakh Head of Graphics"
                  width={350}
                  height={270}
                />
                <VStack spacing="2" mt="-100px" textAlign="center" zIndex={99}>
                  <Text fontWeight={500} fontSize="lg">
                    Jacob Slimakh
                  </Text>
                  <Text color="#c1c1c1" textTransform="uppercase" fontSize="sm">
                    Head of Graphics
                  </Text>
                </VStack>
              </VStack>
            </Fade>
          </GridItem>
        </Grid>

        <VStack>
          <Button
            variant="primary"
            rounded="full"
            px="10"
            as={CLink}
            href={`mailto:${PHRON_INFO_EMAIL}`}
          >
            Contact Us
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
