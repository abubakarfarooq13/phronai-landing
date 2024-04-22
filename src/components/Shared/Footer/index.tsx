import React from "react";
import { Box, Container, Stack, Text, VStack, HStack } from "@chakra-ui/react";
import { Logo } from "../..";
import { AiFillMediumSquare, AiOutlineTwitter } from "react-icons/ai";
import { GrReddit } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";

export default function Footer() {
  return (
    <Box as="footer" py="10" bgColor="#05010c">
      <Container maxW="1440px" px={{ base: "4", xl: "0" }}>
        <Stack
          direction="row"
          w="full"
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="flex-end"
          flexWrap="wrap"
          spacing="10"
        >
          <VStack align="start" spacing="5" zIndex={99}>
            <Logo />
            <Text
              color="#c1c1c1"
              display={{ base: "none", md: "flex" }}
              fontSize={{ base: "base", "3000px": "xl" }}
            >
              &copy; {new Date().getFullYear()} Phron AI
            </Text>
          </VStack>
          <HStack fontSize="30px" spacing="5" color="#c1c1c1">
            <Text
              as={Link}
              href="https://medium.com/@phron_ai"
              target="_blank"
              transition="all .3s"
              _hover={{
                transition: "all .3s",
                color: "rgba(105,46,164,1)",
              }}
              fontSize={{ "3000px": "35px" }}
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
              fontSize={{ "3000px": "35px" }}
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
              fontSize={{ "3000px": "35px" }}
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
              fontSize={{ "3000px": "35px" }}
            >
              <IoLogoDiscord />
            </Text>
          </HStack>
          <Box>
            <Text color="#c1c1c1" display={{ base: "flex", md: "none" }}>
              &copy; {new Date().getFullYear()} Phron AI
            </Text>
            <Text color="#c1c1c1" fontSize={{ base: "base", "3000px": "xl" }}>
              All rights reserved.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
