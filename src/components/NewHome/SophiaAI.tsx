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
      bgImage="linear-gradient(146deg, rgba(0,0,0,0) 50%, rgba(80,41,150,1) 100%)"
      pb="100px"
    >
      <Container
        maxW="1150px"
        mt="260px"
        mb="50px"
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
            spacing="0"
          >
            <VStack align={{ base: "center", md: "start" }} maxW="250px">
              <Text fontSize="3xl" fontWeight={500}>
                Try Sophia
              </Text>
              <Text mb="4" fontSize="lg" color="#ebebeb">
                The first Dynamic Consensus
              </Text>
              <Button
                fontFamily="inherit"
                rightIcon={<GoArrowRight fontSize="20px" />}
                rounded="full"
                fontWeight={400}
              >
                Start for free
              </Button>
            </VStack>

            <Box position="relative">
              <Image
                src="/assets/new-home/brain-image.png"
                alt="sophia brain"
                width={800}
                height={500}
                style={{
                  maxWidth: brainImageWidth,
                  marginLeft: marginLeft,
                }}
              />
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
                right={{ base: "-15%", sm: "-10%" }}
                fontSize={{ base: "sm", lg: "xl" }}
                pb="2"
                borderBottomWidth="1px"
                borderColor="#ecd0f1"
                w={{ base: "170px", lg: "200px" }}
                textAlign="left"
                pl={{ base: "95px", lg: "80px" }}
              >
                <Text>
                  Proof <br /> of Learning
                </Text>
              </Box>
              <Box
                position="absolute"
                top={{ base: "70%", md: "50%" }}
                right={{ base: "-15%", sm: "-10%", lg: "-32%" }}
                fontSize={{ base: "sm", lg: "xl" }}
                pb="2"
                borderBottomWidth="1px"
                borderColor="#ecd0f1"
                w={{ base: "200px", lg: "300px" }}
                textAlign="left"
                pl={{ base: "45px", lg: "70px" }}
              >
                <Text>
                  Dynamic Node <br /> Ranking LTFM Protocol
                </Text>
              </Box>
              <Box
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
              </Box>
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
                0.0001 USD
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Container>

      <Container maxW="1150px">
        <Grid
          minH="290px"
          gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
          gap={{ base: "40px", md: "70px" }}
        >
          <GridItem w="full">
            <Image
              src="/assets/new-home/telemetery.png"
              alt="telemetery"
              width={500}
              height={500}
              style={{
                width: "100%",
              }}
            />
            <Box ml="8" mt="-80px">
              <Text fontSize="2xl" fontWeight={500}>
                Telemetery
              </Text>
              <Text color="#c1c1c1">
                Witness The first Live AI Nodes Ranking
              </Text>
            </Box>
          </GridItem>
          <GridItem w="full">
            <Image
              src="/assets/new-home/phron-explorer.png"
              alt="phron-explorer"
              width={500}
              height={500}
              style={{
                width: "100%",
              }}
            />
            <Box ml="8" mt="-80px">
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
