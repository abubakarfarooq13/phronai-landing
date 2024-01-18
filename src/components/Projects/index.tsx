import React from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Grid,
  GridItem,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Unbounded, Manrope } from "next/font/google";
import localFont from "next/font/local";
import { Footer, Nav } from "..";

const Fade = require("react-reveal/Fade");

const unboundedFont = Unbounded({ subsets: ["latin"] });
const manropeFont = Manrope({ subsets: ["latin"] });

const GalanoGrotesque = localFont({
  src: [
    {
      path: "../../assets/fonts/GalanoGrotesqueSemiBold.otf",
      weight: "600",
      style: "normal",
    },
  ],
});

const PunkRockerRegular = localFont({
  src: [
    {
      path: "../../assets/fonts/PunkRocker-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const GridularRegular = localFont({
  src: [
    {
      path: "../../assets/fonts/Gridular-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const projectTabs = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "games",
    label: "Games",
  },
  {
    id: "blockchain",
    label: "Blockchain",
  },
  {
    id: "apps",
    label: "Apps",
  },
  {
    id: "web-apps",
    label: "Web Apps",
  },
];

function AllProjects() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      gap="25px"
    >
      <GridItem>
        <Fade left>
          <VStack
            bgImage="/assets/projects/cultpad-background.jpg"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            minH="450px"
            w="full"
            borderRadius="20px"
            align="start"
            justifyContent="center"
            px={{ base: "7", md: "16" }}
          >
            <Image
              src="/assets/projects/cultpad-logo.png"
              alt="cultpad logo"
              width={200}
              height={100}
              style={{
                marginBottom: "20px",
              }}
            />
            <Text
              textAlign="left"
              className={unboundedFont.className}
              fontSize={{ base: "xl", md: "2xl" }}
              textTransform="uppercase"
            >
              The easiest way to raise{" "}
              <Box as="br" display={{ base: "none", xl: "block" }} />{" "}
              <Text fontWeight={600} as="span">
                funds for your project
              </Text>{" "}
              <Box as="br" display={{ base: "none", xl: "block" }} />
              <Text as="span" color="#00ffc0">
                on ModulusZK
              </Text>
            </Text>
          </VStack>
        </Fade>
      </GridItem>
      <GridItem>
        <Fade right>
          <VStack
            bgImage="/assets/projects/stoneswap-background.jpg"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            minH="450px"
            w="full"
            borderRadius="20px"
            align="start"
            justifyContent="center"
            px={{ base: "7", md: "16" }}
            className={manropeFont.className}
          >
            <Image
              src="/assets/projects/stoneswap-logo.png"
              alt="cultpad logo"
              width={250}
              height={100}
              style={{
                marginBottom: "20px",
              }}
            />
            <Text
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight={800}
              textAlign="left"
            >
              Providing the most
              <Box as="br" display={{ base: "none", md: "block" }} />
              decentralized chain
            </Text>
            <Text>the best tools possible</Text>
          </VStack>
        </Fade>
      </GridItem>
      <GridItem>
        <Fade left>
          <VStack
            bgImage="/assets/projects/block-scape-background.jpg"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            minH="450px"
            w="full"
            borderRadius="20px"
            align="start"
            px={{ base: "7", md: "16" }}
            justifyContent="center"
            spacing="4"
          >
            <Image
              src="/assets/projects/block-scape-logo.png"
              alt="block scape logo"
              width={250}
              height={200}
            />

            <Text
              textAlign="left"
              fontSize={{ base: "2xl", md: "3xl" }}
              className={GalanoGrotesque.className}
              fontWeight={600}
              lineHeight="110%"
            >
              Join an open world <br /> with unlimited possibilities
            </Text>
          </VStack>
        </Fade>
      </GridItem>
      <GridItem>
        <Fade right>
          <VStack
            bgImage="/assets/projects/land-of-cult-background.jpg"
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPos="center"
            minH="450px"
            w="full"
            borderRadius="20px"
            align="start"
            px={{ base: "7", md: "16" }}
            justifyContent="center"
            spacing="5"
          >
            <Image
              src="/assets/projects/land-of-land-logo.png"
              alt="land of cult logo"
              width={250}
              height={200}
            />

            <Text
              className={PunkRockerRegular.className}
              fontSize="6xl"
              textTransform="uppercase"
              lineHeight="90%"
              textAlign="left"
            >
              Buy Land <br />
              Lorem Ipsum
            </Text>

            <Text
              fontSize={{
                base: "sm",
                md: "base",
              }}
              className={GridularRegular.className}
              textAlign="left"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              <Box as="br" display={{ base: "none", md: "block" }} />
              sed do eiusmod tempor incididunt ut labore et dolore{" "}
              <Box as="br" display={{ base: "none", md: "block" }} /> magna
              aliqua. Ut enim ad minim veniam, quis n
            </Text>
          </VStack>
        </Fade>
      </GridItem>
    </Grid>
  );
}

export default function CProjects() {
  return (
    <>
      <Nav />
      <Box
        bgImage="/assets/projects/background.jpg"
        bgRepeat="no-repeat"
        bgSize="100% 100%"
        bgPosition="top"
        minH="100vh"
      >
        <Container maxW="1400px" pt="100px">
          <Fade bottom>
            <Text
              as="h1"
              fontSize={{ base: "3xl", md: "6xl" }}
              textAlign="center"
              fontWeight={500}
            >
              PhronAI Projects
            </Text>
          </Fade>

          <Fade bottom>
            <Text textAlign="center" mb="50px">
              The best gadgets for the best Web 3.0 experience
            </Text>
          </Fade>

          <Tabs pb="100px" variant="soft-rounded">
            <Fade bottom>
              <TabList
                w="full"
                flexWrap="wrap"
                p="0"
                pb="4"
                justifyContent="center"
              >
                {projectTabs.map((tab) => (
                  <Tab
                    fontWeight={400}
                    minW={{ base: "fit-content", lg: "auto" }}
                    color="brand.grayText"
                    _selected={{
                      bg: "none",
                      borderBottomWidth: "1px",
                      color: "#fff",
                    }}
                    rounded="none"
                    key={tab.id}
                    fontSize="base"
                  >
                    {tab.label}
                  </Tab>
                ))}
              </TabList>
            </Fade>

            <TabPanels mt="30px">
              <TabPanel p="0">
                <AllProjects />
              </TabPanel>
              <TabPanel p="0">
                <AllProjects />
              </TabPanel>
              <TabPanel p="0">
                <AllProjects />
              </TabPanel>
              <TabPanel p="0">
                <AllProjects />
              </TabPanel>
              <TabPanel p="0">
                <AllProjects />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
