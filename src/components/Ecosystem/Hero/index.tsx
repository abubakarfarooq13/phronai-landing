import React from "react";
import {
  Box,
  VStack,
  Text,
  Stack,
  Container,
  HStack,
  Button,
  useBreakpointValue,
  Image as CImage,
} from "@chakra-ui/react";
import Image from "next/image";
// import { Fade, Slide } from "react-awesome-reveal";
const Fade = require("react-reveal/Fade");

export default function EcosystemHero() {
  const lockImgWidth = useBreakpointValue({ base: 60, sm: 95, "3xl": 135 });
  const cubeImgWidth = useBreakpointValue({ base: 60, sm: 100, "3xl": 135 });
  const rocketImgWidth = useBreakpointValue({ base: 60, sm: 95, "3xl": 125 });
  const fanImgWidth = useBreakpointValue({ base: 60, sm: 95, "3xl": 145 });
  return (
    <Box
      backgroundImage={{ base: "/assets/header-background-mobile.jpg", lg: "" }}
      bgPos={{ base: "bottom", xl: "right", "3xl": "top" }}
      bgSize="cover"
      // minH="70vh"
      // minH={{ base: "800px", md: "1000px", "3xl": "1400px", "4xl": "1600px" }}
      bgRepeat="no-repeat"
      pb={{
        base: "70px",
        lg: "150px",
        "1200px": "250px",
        "1280px": "100px",
        "2xl": "300px",
        "3xl": "200px",
        "1400px": "200px",
        "4xl": "300px",
        "2520px": "500px",
        "3400px": "800px",
      }}
      pos="relative"
      overflow="hidden"
      mt={{ base: "-130px", lg: "0px" }}
    >
      <CImage
        src="/assets/header-left-shadow.png"
        pos="absolute"
        left={{ lg: "-200px", xl: "0px" }}
        display={{ base: "none", lg: "flex", "3400px": "none" }}
      />

      <CImage
        src="/assets/purple-shadow-left.png"
        pos="absolute"
        top="0px"
        left="0px"
        display={{ base: "none", lg: "flex" }}
      />

      <CImage
        src="/assets/purple-shadow-header-top.png"
        pos="absolute"
        top="0px"
        left="0px"
        w="full"
        maxW="50%"
        display={{ base: "none", lg: "flex" }}
      />

      <Box
        pos="relative"
        backgroundImage="/assets/top-header-ball.png"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        h={{ base: "280px", sm: "400px", md: "550px" }}
        display={{ base: "flex", lg: "none" }}
        mt={{ base: "200px" }}
      >
        <Box
          className="infinit-move-1"
          pos="absolute"
          top="10%"
          left={{ base: "18%", sm: "30%" }}
        >
          <Fade>
            <Image
              src="/assets/lock.png"
              width={lockImgWidth}
              height={172}
              alt="lock"
              priority
            />
          </Fade>
        </Box>
        <Box pos="absolute" className="infinit-move-2" top="0" left="45%">
          <Fade>
            <Image
              src="/assets/cube.png"
              width={cubeImgWidth}
              height={146}
              alt="cube"
              priority
            />
          </Fade>
        </Box>
        <Box
          pos="absolute"
          className="infinit-move-3"
          right={{ base: "18%", sm: "30%" }}
          top="20%"
        >
          <Fade>
            <Image
              src="/assets/rocket.png"
              width={rocketImgWidth}
              height={240}
              alt="rocket"
              priority
            />
          </Fade>
        </Box>
        <Box pos="absolute" className="infinit-move-4" bottom="40%" left="35%">
          <Fade>
            <Image
              src="/assets/laptop-fan.png"
              width={fanImgWidth}
              height={130}
              alt="laptop-fan"
              priority
            />
          </Fade>
        </Box>
      </Box>

      <Container maxW="1160px" mt="0px" mb="50px">
        <Stack
          direction={{ base: "row" }}
          pt={{
            base: "0px",
            // md: "400px",
            lg: "200px",
            "3xl": "300px",
          }}
        >
          <VStack
            w={{ base: "100%", lg: "50%" }}
            align={{ base: "center", lg: "start" }}
            h="100%"
            pt={{
              base: "0px",
              "2560px": "100px",
              "3400px": "250px",
              "4000px": "300px",
            }}
            zIndex={99}
          >
            <Fade left>
              <Text
                textTransform="uppercase"
                fontSize={{ base: "xs", md: "sm", lg: "lg" }}
                lineHeight="15px"
                pl="1"
                fontWeight={300}
                letterSpacing="2px"
              >
                Discover Our
              </Text>

              <Text
                as="h1"
                textAlign={{ base: "center", lg: "left" }}
                fontSize={{ base: "5xl", md: "6xl", "3000px": "7xl" }}
                fontWeight={500}
                lineHeight={{ base: "50px", md: "60px", "3000px": "70px" }}
              >
                Phronesis <br /> Ecosystem
              </Text>

              <Text
                pt="3"
                fontSize={{ base: "sm", md: "base", "3000px": "xl" }}
                textAlign={{ base: "center", lg: "left" }}
              >
                The best gadgets for the best Web 3.0 experience
              </Text>

              {/* <Stack
                direction={{ base: "column", lg: "row" }}
                pt="3"
                spacing="5"
                w="full"
              >
                <Button
                  w="full"
                  variant="primary"
                  px={{ base: "7", md: "10" }}
                  py={{ base: "2", md: "5" }}
                  rounded="full"
                >
                  Learn more
                </Button>
              </Stack> */}
            </Fade>
          </VStack>
        </Stack>
      </Container>

      <Box
        pos="absolute"
        top="0"
        // top={{ base: "-150px", md: "-400px", lg: "-400px", "3xl": "-700px" }}
        right={{
          base: "-300px",
          md: "-250px",
          lg: "-450px",
          xl: "-10%",
        }}
        zIndex={-1}
        w={{ base: "250%", md: "160%", xl: "full" }}
      >
        <Box pos="relative">
          <CImage
            display={{ base: "none", md: "flex" }}
            src="/assets/_header-background-with-ball.jpg"
          />

          <Box className="infinit-move-1" pos="absolute" top="16%" left="38%">
            <Fade>
              <Image
                src="/assets/lock.png"
                width={lockImgWidth}
                height={172}
                alt="lock"
                priority
              />
            </Fade>
          </Box>
          <Box pos="absolute" top="10%" right="47%" className="infinit-move-2">
            <Fade>
              <Image
                src="/assets/cube.png"
                width={cubeImgWidth}
                height={146}
                alt="cube"
                priority
              />
            </Fade>
          </Box>
          <Box pos="absolute" className="infinit-move-3" top="16%" right="38%">
            <Fade>
              <Image
                src="/assets/rocket.png"
                width={rocketImgWidth}
                height={240}
                alt="rocket"
                priority
              />
            </Fade>
          </Box>
          <Box pos="absolute" className="infinit-move-4" top="30%" right="50%">
            <Fade>
              <Image
                src="/assets/laptop-fan.png"
                width={fanImgWidth}
                height={130}
                alt="laptop-fan"
                priority
              />
            </Fade>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
