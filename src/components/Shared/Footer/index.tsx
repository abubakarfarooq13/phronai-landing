import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Logo } from "../..";
import { AiFillMediumSquare, AiOutlineTwitter } from "react-icons/ai";
import { GrReddit } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import PhronZeroLogo from "../PhronZeroLogo";
import { SiGitbook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const footerMenu = [
  {
    id: 1,
    title: "Layer 1/Layer 0",
    menu: [
      {
        id: 1,
        label: "Layer 1",
        href: "/chain",
      },
      {
        id: 2,
        label: "Layer 0",
        href: "/",
      },
      {
        id: 3,
        label: "Phron Coin",
        href: "/phron",
      },
      {
        id: 4,
        label: "Ecosystem",
        href: "/ecosystem",
      },
      {
        id: 5,
        label: "Team",
        href: "/team",
      },
      {
        id: 5,
        label: "RoadMap",
        href: "/roadmap",
      },
    ],
  },
  {
    id: 2,
    title: "Build",
    menu: [
      {
        id: 1,
        label: "Github",
        href: "#",
      },
      {
        id: 2,
        label: "Docs",
        href: "https://docs.phron.ai",
      },
    ],
  },
  {
    id: 3,
    title: "Network",
    menu: [
      {
        id: 1,
        label: "PhronScan",
        href: "#",
      },
      {
        id: 2,
        label: "Telemetry",
        href: "#",
      },
      {
        id: 3,
        label: "Become a Validator",
        href: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Community",
    menu: [
      {
        id: 1,
        label: "News",
        href: "#",
      },
      {
        id: 2,
        label: "Events",
        href: "#",
      },
    ],
  },
];

export default function Footer() {
  const router = useRouter();
  return (
    <Box as="footer" py="20" bgColor="#05010c">
      <Container maxW="1440px" px={{ base: "4", xl: "4" }}>
        <Stack
          direction={{ base: "column", md: "row" }}
          w="full"
          justifyContent={{ base: "center", md: "space-between" }}
          alignItems="flex-start"
          // flexWrap="wrap"
          spacing="10"
        >
          <VStack align="start" spacing="5" zIndex={99}>
            {router.pathname === "/" ? <PhronZeroLogo /> : <Logo />}
            {/* <Text
              color="#c1c1c1"
              display={{ base: "none", md: "flex" }}
              fontSize={{ base: "sm", "3000px": "xl" }}
            >
              {new Date().getFullYear()} &copy; Phron AI. All rights reserved.
            </Text> */}
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
                fontSize="25px"
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
                fontSize="25px"
              >
                <FaXTwitter />
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
                fontSize="25px"
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
                fontSize="25px"
              >
                <IoLogoDiscord />
              </Text>
              <Text
                as={Link}
                href="https://www.instagram.com/phronai/"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
                fontSize="25px"
              >
                <FaInstagram />
              </Text>
              <Text
                as={Link}
                href="https://docs.phron.ai"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.802 17.77a.703.703 0 1 1-.002 1.406.703.703 0 0 1 .002-1.406m11.024-4.347a.703.703 0 1 1 .001-1.406.703.703 0 0 1-.001 1.406m0-2.876a2.176 2.176 0 0 0-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 0 0-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 0 0 2.15 1.862 2.177 2.177 0 0 0 2.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0 0 24 12.72a2.176 2.176 0 0 0-2.174-2.174"
                    fill="currentColor"
                  ></path>
                </svg>
              </Text>
            </HStack>
          </VStack>
          {footerMenu.map((menu) => (
            <VStack spacing="4" fontSize="sm" align="start" key={menu.id}>
              <Text fontWeight={500}>{menu.title}</Text>
              {menu.menu.map((item) => (
                <Text
                  as={Link}
                  _hover={{
                    color: "#fff",
                  }}
                  color="#909090"
                  key={item.id}
                  href={item.href}
                >
                  {item.label}
                </Text>
              ))}
            </VStack>
          ))}

          {/* <HStack spacing="4">
            <Text
              as={Link}
              href="/partnerships"
              transition="all .3s"
              color="#c1c1c1"
              _hover={{
                transition: "all .3s",
                color: "rgba(105,46,164,1)",
              }}
              fontSize={{ base: "sm", "3000px": "35px" }}
            >
              Our Partnerships
            </Text>
            <Text
              as={Link}
              href="/brand-assets"
              transition="all .3s"
              color="#c1c1c1"
              _hover={{
                transition: "all .3s",
                color: "rgba(105,46,164,1)",
              }}
              fontSize={{ base: "sm", "3000px": "35px" }}
            >
              Brand Assets
            </Text>
          </HStack> */}
          <Button
            variant="primary-purple"
            rounded="full"
            px="8"
            fontFamily="inherit"
          >
            Support
          </Button>
          {/* <Box>
            <Text color="#c1c1c1" display={{ base: "flex", md: "none" }}>
              &copy; {new Date().getFullYear()} Phron AI
            </Text>
            <Text color="#c1c1c1" fontSize={{ base: "base", "3000px": "xl" }}>
              All rights reserved.
            </Text>
          </Box> */}
        </Stack>
      </Container>
    </Box>
  );
}
