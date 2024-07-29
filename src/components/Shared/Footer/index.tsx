import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  HStack,
  Button,
  Grid,
  GridItem,
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
import { FaYoutube } from "react-icons/fa";
import TrustedBySection from "@/components/NewHome/TrustedBySection";

export const footerMenu = [
  {
    id: 1,
    title: "Layer 1/Layer 0",
    menu: [
      // {
      //   id: 1,
      //   label: "Layer 1",
      //   href: "/chain",
      // },
      // {
      //   id: 2,
      //   label: "Layer 0",
      //   href: "/phronzero",
      // },
      // {
      //   id: 3,
      //   label: "Phron Coin",
      //   href: "/phron",
      // },
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
        href: "http://git.phron.ai/",
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
        href: "https://testnet.phronscan.io",
      },
      // {
      //   id: 2,
      //   label: "Telemetry",
      //   href: "#",
      // },
      // {
      //   id: 3,
      //   label: "Become a Validator",
      //   href: "#",
      // },
    ],
  },
  // {
  //   id: 4,
  //   title: "Community",
  //   menu: [
  //     {
  //       id: 1,
  //       label: "News",
  //       href: "#",
  //     },
  //     {
  //       id: 2,
  //       label: "Events",
  //       href: "#",
  //     },
  //   ],
  // },
  {
    id: 4,
    title: "Company",
    menu: [
      // {
      //   id: 1,
      //   label: "Brand Assets",
      //   href: "/brand-assets",
      // },
      {
        id: 1,
        label: "Partnerships",
        href: "/partnerships",
      },
      // {
      //   id: 1,
      //   label: "Partnerships",
      //   href: "/vip-partnerships",
      // },
    ],
  },
];

export const socialIcons = [
  {
    id: 1,
    label: "Medium",
    icon: AiFillMediumSquare,
    href: "https://medium.com/@phron_ai",
    bgColor: "#5400c9",
    hoverGbColor: "#4701a9",
  },
  {
    id: 2,
    label: "Twitter",
    icon: FaXTwitter,
    href: "https://twitter.com/Phron_ai",
    bgColor: "#4701a9",
    hoverGbColor: "#19003c",
  },
  {
    id: 3,
    label: "Telegram",
    icon: FaTelegramPlane,
    href: "https://t.me/PhronAIPortal",
    bgColor: "#3e0293",
    hoverGbColor: "#280061",
  },
  {
    id: 4,
    label: "Discord",
    icon: IoLogoDiscord,
    href: "https://discord.gg/QRMhdRx6du",
    bgColor: "#360083",
    hoverGbColor: "#3e0293",
  },
  {
    id: 6,
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/phronai/",
    bgColor: "#280061",
    hoverGbColor: "#360083",
  },
  {
    id: 7,
    label: "Youtube",
    icon: FaYoutube,
    href: "https://www.youtube.com/@PhronAI",
    bgColor: "#19003c",
    hoverGbColor: "#3e0293",
  },
];

export default function Footer() {
  const router = useRouter();
  return (
    <Box bg="#000" overflow="hidden">
      <Box
        as="footer"
        bgImage="/assets/footer-bg.png"
        bgSize="cover"
        bgPos="top"
        maxW={{ base: "full", "2340px": "1440px" }}
        position="relative"
        mx="auto"
        _after={{
          content: `''`,
          position: "absolute",
          right: { base: "-100px", "2340px": "-230px" },
          width: { base: "200px", "2340px": "400px" },
          height: "100%",
          background: "#000",
          top: router.pathname === "/" ? "0px" : "-100px",
          filter: { base: "blur(70px)", "2340px": "blur(100px)" },
          visibility: { base: "hidden", xl: "visible" },
        }}
        pb="5"
      >
        {router.pathname === "/" ? <TrustedBySection /> : null}
        <Container
          maxW={{ base: "1100px", "2340px": "1440px" }}
          px={{ base: "4", xl: "4" }}
          zIndex="99"
          position="relative"
          mt="10"
          pt={{ base: "10", xl: "40" }}
        >
          <Grid
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            pb="10"
            display={{ base: "grid", lg: "none" }}
            gap="5"
            rowGap="16"
          >
            {footerMenu.map((menu) => (
              <GridItem key={menu.id}>
                <VStack spacing="4" fontSize="sm" align="center">
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
              </GridItem>
            ))}
          </Grid>
          <Stack
            pb={{ base: "10", lg: "32" }}
            direction={{ base: "column", md: "row" }}
            w="full"
            justifyContent={{ base: "center" }}
            alignItems={{ base: "center", md: "flex-start" }}
            // flexWrap="wrap"
            spacing="32"
          >
            {footerMenu.map((menu) => (
              <VStack
                spacing="4"
                fontSize={{ base: "sm", "2340px": "xl" }}
                display={{ base: "none", lg: "flex" }}
                align="start"
                key={menu.id}
                w="full"
                // minW="200px"
              >
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

            <Button
              variant="primary-purple"
              rounded="full"
              px="8"
              fontFamily="inherit"
              as="a"
              href="mailto:support@phron.ai"
              w="full"
              maxW="140px"
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

          <Text
            color="#909090"
            textAlign="center"
            fontSize={{ base: "sm", "2340px": "lg" }}
          >
            {new Date().getFullYear()} &copy; PhronAI All rights reserved
          </Text>
        </Container>
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(6, 1fr)",
        }}
      >
        {socialIcons.map((social) => (
          <GridItem key={social.id}>
            <Text
              py="3"
              px="5"
              as={Link}
              w="full"
              href={social.href}
              target="_blank"
              transition="all .3s"
              _hover={{
                transition: "all .3s",
                // color: "rgba(105,46,164,1)",
                bgColor: social.hoverGbColor,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor={social.bgColor}
            >
              <Text as="span" fontSize={{ base: "lg", "2340px": "xl" }}>
                <social.icon />
              </Text>
              <Text
                as="span"
                ml="2"
                fontSize={{ base: "sm", "2340px": "lg" }}
                fontWeight={500}
              >
                {social.label}
              </Text>
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
