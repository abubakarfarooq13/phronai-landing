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
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiFillMediumSquare, AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { GrReddit } from "react-icons/gr";
import { IoLogoDiscord } from "react-icons/io5";
// import { Fade, Slide } from "react-awesome-reveal";
const Fade = require("react-reveal/Fade");

export default function Hero() {
  const lockImgWidth = useBreakpointValue({ base: 50, md: 95, "3xl": 155 });
  const cubeImgWidth = useBreakpointValue({ base: 50, md: 100, "3xl": 135 });
  const rocketImgWidth = useBreakpointValue({ base: 50, md: 95, "3xl": 125 });
  const fanImgWidth = useBreakpointValue({ base: 50, md: 95, "3xl": 145 });
  return (
    <Box
      backgroundImage="/assets/phrone-pad/hero-bg.png"
      // bgPos={{ base: "right", xl: "right", "3xl": "top" }}
      // bgSize={{ base: "contain", xl: "contain", "3xl": "cover" }}
      bgPos="center"
      bgSize="cover"
      minH="1000px"
      bgRepeat="no-repeat"
      pos="relative"
      zIndex="99"
    >
      <Container maxW="1160px">
        <VStack
          justifyContent="flex-end"
          pt={{ base: "150px", md: "50px" }}
          textAlign="center"
        >
          <Fade bottom>
            <VStack>
              <Image
                src="/assets/phrone-pad/game-remote.png"
                width={596}
                height={349}
                alt="game-remote"
                className="infinit-move-1"
                priority
              />
            </VStack>
          </Fade>

          <Fade bottom>
            <Text
              textTransform="uppercase"
              fontSize={{ base: "base", "3000px": "2xl" }}
            >
              Welcome to
            </Text>
            <Text
              as="h1"
              fontSize={{ base: "5xl", "3000px": "7xl" }}
              lineHeight={{ base: "50px", "3000px": "70px" }}
              fontWeight={500}
            >
              Phron: The GamePad
            </Text>
            <Text
              color={{ base: "#fff", md: "#c1c1c1" }}
              mb="5"
              fontSize={{ base: "xl", "3000px": "2xl" }}
            >
              Truly Decentralizing the Gaming Sector
            </Text>
            {/* <Button variant="primary" rounded="full" px="10" py="5">
              Contact Us
            </Button> */}
            <HStack
              fontSize="30px"
              spacing="5"
              color="#fff"
              justifyContent="center"
            >
              <Text
                as={Link}
                href="https://medium.com/@phron_ai"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
              >
                <AiFillMediumSquare />
              </Text>
              <Text
                as={Link}
                href="https://twitter.com/Phron_ai"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
              >
                <AiOutlineTwitter />
              </Text>

              <Text
                as={Link}
                href="https://t.me/+-DVxm6qfco1mNDRk"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
              >
                <FaTelegramPlane />
              </Text>
              <Text
                as={Link}
                href="https://discord.gg/wy4gFtmTsK"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
              >
                <IoLogoDiscord />
              </Text>
            </HStack>
          </Fade>
        </VStack>
      </Container>
    </Box>
  );
}
