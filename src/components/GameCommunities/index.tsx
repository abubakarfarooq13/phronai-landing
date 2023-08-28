import React from "react";
import { Box, Image as CImage, Text, VStack } from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export default function GameCommunities() {
  return (
    <Box
      bgImage="/assets/phrone-pad/_games-community-background.webp"
      bgPos="top"
      bgSize={{ base: "cover", md: "contain", lg: "cover" }}
      bgRepeat="no-repeat"
      mt={{ base: "50px", md: "-200px", lg: "-300px" }}
      pt={{ base: "100px", md: "0px" }}
      pos="relative"
      overflow="hidden"
    >
      <VStack
        pos="absolute"
        top={{ base: "10%", md: "35%", lg: "40%" }}
        left="50%"
        transform="translateX(-50%)"
        textAlign="center"
        maxW={{ base: "full", md: "500px", lg: "900px", "3000px": "1200px" }}
        w="full"
        // spacing={{ base: "2", lg: "1" }}
        zIndex="99"
        px="4"
      >
        {/* <Fade bottom>
          <Text fontSize={{ base: "xl", md: "2xl" }}></Text>
        </Fade> */}
        <Fade bottom>
          <Text
            fontSize={{ base: "2xl", sm: "4xl", md: "5xl", "3000px": "7xl" }}
            fontWeight={500}
            lineHeight={{
              base: "30px",
              sm: "40px",
              md: "50px",
              "3000px": "70px",
            }}
          >
            Allowing game developers{" "}
            <Box as="br" display={{ base: "none", xl: "block" }} /> to Share
            their games <Box as="br" display={{ base: "none", xl: "block" }} />
            through Web 3.0
          </Text>
        </Fade>
        {/* <Fade bottom>
          <Text
            fontSize={{ base: "3xl", lg: "5xl" }}
            fontWeight={500}
            lineHeight={{ base: "30px", lg: "50px" }}
          ></Text>
        </Fade> */}
      </VStack>

      <Fade>
        <CImage
          src="/assets/phrone-pad/man-playing-game.png"
          alt="man-playing-game"
          w="full"
          pt={{ base: "0px", md: "200px", lg: "400px" }}
        />
      </Fade>

      <CImage
        src="/assets/phrone-pad/games-community-shadow.png"
        pos="absolute"
        top="500px"
        w="full"
      />
    </Box>
  );
}
