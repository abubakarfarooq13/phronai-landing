import React from "react";
import {
  Text,
  Box,
  Stack,
  VStack,
  Button,
  Container,
  Divider,
  Grid,
  GridItem,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";

export default function SophiaAI() {
  const brainImageWidth = useBreakpointValue({
    base: "290px",
    sm: "400px",
    xl: "600px",
  });

  const marginLeft = useBreakpointValue({
    base: "-50px",
    md: "0px",
  });

  return (
    <Box
      // bgImage="linear-gradient(146deg, rgba(0,0,0,0) 50%, rgba(80,41,150,1) 100%)"
      pb={{ base: "50px", lg: "100px" }}
    >
      <Container
        maxW={{ base: "1100px", "2340px": "1440px" }}
        // mt={{ xl: "260px" }}
        mb={{ base: "50px", md: "20px", lg: "50px" }}
        zIndex={99}
        position="relative"
      >
        <Box
          bgColor="#000000"
          border="1px"
          borderColor="#9278be"
          alignContent="center"
          rounded="3xl"
          py="10"
          px="10"
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            align="center"
            spacing={{ base: "0px", xl: "20" }}
          >
            <VStack align={{ base: "center", md: "start" }} maxW="250px">
              <HStack spacing="4">
                <Text fontSize="3xl" fontWeight={500} as="h3">
                  Try Sophia
                </Text>
                <Image
                  src="/assets/chain/shophia.png"
                  alt="sophia"
                  width={70}
                  height={70}
                />
              </HStack>
              <Text mb="4" fontSize="lg" color="#ebebeb">
                The first Dynamic Consensus
              </Text>
              {/* <Button
                fontFamily="inherit"
                rightIcon={<GoArrowRight fontSize="20px" />}
                rounded="full"
                fontWeight={400}
              >
                Start for free
              </Button> */}
            </VStack>

            <Box position="relative">
              {/* <Image
                src="/assets/new-home/brain-image.png"
                alt="sophia brain"
                width={800}
                height={500}
                style={{
                  maxWidth: brainImageWidth,
                  marginLeft: marginLeft,
                }}
              /> */}
              <video width="600" height="400" autoPlay playsInline muted loop>
                <source
                  src="/assets/new-home/brain-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <Box
                position="absolute"
                top="10%"
                left={{ base: "0%", md: "20%" }}
                fontSize={{ base: "sm", lg: "xl" }}
                textTransform="uppercase"
                pb="2"
                borderBottomWidth="1px"
                borderColor="#ecd0f1"
                w="100px"
              >
                <Text>EVM</Text>
              </Box>
              <Box
                position="absolute"
                top="10%"
                right={{ base: "-10%", sm: "-10%", md: "-5%" }}
                fontSize={{ base: "sm", lg: "xl" }}
                pb="2"
                borderBottomWidth="1px"
                borderColor="#ecd0f1"
                w={{ base: "125px", lg: "200px" }}
                textAlign="left"
                pl={{ base: "50px", lg: "80px" }}
              >
                <Text>
                  Proof <br /> of Learning
                </Text>
              </Box>
              <Box
                position="absolute"
                top={{ base: "50%", md: "50%" }}
                right={{ base: "-10%", md: "-5%", lg: "-15%" }}
                fontSize={{ base: "sm", lg: "xl" }}
                pb="2"
                borderBottomWidth="1px"
                borderColor="#ecd0f1"
                w={{ base: "145px", lg: "220px" }}
                textAlign="left"
                pl={{ base: "45px", lg: "70px" }}
              >
                <Text>
                  Dynamic Node <br /> Ranking
                </Text>
              </Box>
              {/* <Box
                position="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%,-50%)"
                fontSize="2xl"
                border="1px solid #505050"
                bgColor="#010101"
                textTransform="uppercase"
                borderRadius="full"
                maxW="fit-content"
                px="3"
              >
                <Text>Sophia</Text>
              </Box> */}
            </Box>
          </Stack>

          <Grid
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            }}
            justifyContent="space-between"
            // mt="10"
            fontSize="32px"
            fontWeight={300}
            borderTopWidth="1px"
            borderColor="#3b2d4b"
            mt="10"
            textAlign={{ base: "center", md: "left" }}
          >
            <GridItem>
              <Text
                py="5"
                borderRightWidth={{ base: "0px", md: "1px" }}
                borderBottomWidth={{ base: "1px", md: "0px" }}
                borderColor="#3b2d4b"
              >
                31K TPS
              </Text>
            </GridItem>
            <GridItem>
              <Text
                py="5"
                textAlign={{ md: "center" }}
                borderRightWidth={{ base: "0px", md: "1px" }}
                borderBottomWidth={{ base: "1px", md: "0px" }}
                borderColor="#3b2d4b"
              >
                0.9 TTF
              </Text>
            </GridItem>
            <GridItem>
              <Text py="5" textAlign={{ md: "right" }}>
                0.00001 USD
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Container>

      <Container maxW={{ base: "1100px", "2340px": "1440px" }}>
        <Grid
          minH="290px"
          gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={{ base: "40px", md: "20px", lg: "70px" }}
        >
          <GridItem
            w="full"
            bgColor="#000000"
            rounded="xl"
            border="1px"
            borderColor="rgba(146,120,190,.6)"
            h="fit-content"
          >
            <Box rounded="xl" bgColor="#000" pb={{ base: "29px", lg: "50px" }}>
              <Image
                src="/assets/new-home/telemetery.png"
                alt="telemetery"
                width={800}
                height={800}
                style={{
                  width: "100%",
                  borderRadius: "14px",
                }}
              />
            </Box>
            <Box ml="8" mt="-50px" pb="22px">
              <Text fontSize="2xl" fontWeight={500}>
                Telemetery
              </Text>
              <Text color="#c1c1c1">
                Witness The first Live AI Nodes Ranking
              </Text>
            </Box>
          </GridItem>
          <GridItem
            w="full"
            bgColor="#000000"
            rounded="xl"
            border="1px"
            borderColor="rgba(146,120,190,.6)"
            h="fit-content"
          >
            <Text as="a" href="https://testnet.phronscan.io" target="_blank">
              <Image
                src="/assets/new-home/phron-explorer.png"
                alt="telemetery"
                width={800}
                height={800}
                style={{
                  width: "100%",
                  borderRadius: "14px",
                }}
              />
            </Text>
            <Box
              as="a"
              href="https://testnet.phronscan.io"
              target="_blank"
              ml="8"
              mt="-50px"
              pb="22px"
              display="block"
            >
              <Text fontSize="2xl" fontWeight={500}>
                PhronScan
              </Text>
              <Text color="#c1c1c1">Explore Phron AI Network</Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
