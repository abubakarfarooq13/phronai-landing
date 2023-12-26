import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  HStack,
  Container,
  useDisclosure,
  Link as CLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../..";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./Drawer";
import { IoIosArrowDown } from "react-icons/io";
import SingleMenu from "./SingleMenu";

const Fade = require("react-reveal/Fade");

export const navItems = [
  {
    id: 2,
    label: "Phronesis: The Chain",
    href: "/",
  },
  {
    id: 5,
    label: "RoadMap",
    href: "/roadmap",
  },
  {
    id: 5,
    label: "Team",
    href: "/team",
  },
  {
    id: 10,
    label: "PHRON",
    href: "/phron",
  },
  {
    id: 3,
    label: "Ecosystem",
    href: "/ecosystem",
  },
  {
    id: 4,
    label: "NFT Marketplace",
    href: "/marketplace",
  },
  // {
  //   id: 5,
  //   label: "Phron: The GamePad",
  //   href: "/gamepad",
  // },
  // {
  //   id: 5,
  //   label: "News",
  //   href: "/news",
  // },

  // {
  //   id: 5,
  //   label: "PHRON",
  //   href: "/#",
  // },
];

export const newsItems = [
  {
    id: 1,
    label: "Dubai Crypto Expo 2023",
    href: "/dubai-crypto-expo-2023",
  },
  {
    id: 2,
    label: "Articles",
    href: "/news",
  },
];

export const menu = ["Phronesis AI Foundation", "News / Updates"];

export default function Nav() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentMenu, setCurrentMenu] = useState("Phronesis AI Foundation");

  const router = useRouter();

  useEffect(() => {
    if (newsItems.find((item) => item.href === router.pathname)) {
      setCurrentMenu("News / Updates");
    }

    if (navItems.find((item) => item.href === router.pathname)) {
      setCurrentMenu("Phronesis AI Foundation");
    }

    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }

      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  }, []);

  return (
    <Box
      as="nav"
      pt="5"
      pb={{ base: "5", "1350px": "0" }}
      bgColor="#05010c"
      color="#fff"
      pos="fixed"
      top={0}
      left={0}
      w="full"
      zIndex={999}
      transition="all 300ms ease-in-out"
    >
      <Container maxW="1400px">
        <HStack justifyContent="space-between">
          <Logo />

          <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Box display={{ base: "flex", "1350px": "none" }} onClick={onOpen}>
            <CgMenuRightAlt size="30px" />
          </Box>

          <HStack
            spacing={{ base: "20px", "2xl": "30px" }}
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
            ml="100px"
          >
            {menu.map((item) => (
              <Button
                key={item}
                variant="unstyled"
                cursor="pointer"
                display="flex"
                alignItems="center"
                fontWeight={500}
                rightIcon={item === currentMenu ? <IoIosArrowDown /> : <></>}
                fontSize="17px"
                onClick={() => setCurrentMenu(item)}
              >
                {item}
              </Button>
            ))}
          </HStack>

          <HStack
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
          >
            <Button
              as={Link}
              href="/phronzero"
              variant="primary"
              borderRadius="full"
              px="10"
              py="5"
              w="full"
              fontSize={{ "3000px": "lg" }}
              textTransform="uppercase"
            >
              PhronZero
            </Button>
            {/* <Button
                as={Link}
                href="/phron"
                variant="primary-purple"
                borderRadius="full"
                px="10"
                py="5"
                w="full"
                fontSize={{ "3000px": "lg" }}
                textTransform="uppercase"
              >
                Phron
              </Button> */}
            <Button
              as={CLink}
              href="https://phron.ai/whitepaper.pdf"
              target="_blank"
              variant="primary-purple"
              borderRadius="full"
              px="8"
              py="5"
              w="full"
              fontSize={{ "3000px": "lg" }}
            >
              Whitepaper
            </Button>
          </HStack>
        </HStack>
      </Container>

      {currentMenu === "Phronesis AI Foundation" ? (
        <Fade>
          <Box
            display={{ base: "none", "1350px": "block" }}
            bgColor="#5900d7"
            mt="5"
            borderTopColor="#26124f"
            borderBottomColor="#26124f"
            borderTopWidth="2px"
            borderBottomWidth="2px"
          >
            <Container maxW="1400px">
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="flex-end"
                alignItems="center"
                spacing="0px"
              >
                {navItems.map((item) => (
                  <Text
                    key={item.id}
                    as={Link}
                    href={item.href}
                    py="5"
                    px="5"
                    _hover={{
                      bgColor: "#0e0023",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    bgColor={router.pathname === item.href ? "#0e0023" : "none"}
                    color="#fff"
                    fontSize={{ "3000px": "lg" }}
                    fontWeight={500}
                  >
                    {item.label}
                  </Text>
                ))}
              </Stack>
            </Container>
          </Box>
        </Fade>
      ) : null}

      {currentMenu === "News / Updates" ? (
        <Fade>
          <Box
            display={{ base: "none", "1350px": "block" }}
            bgColor="#5900d7"
            mt="5"
            borderTopColor="#26124f"
            borderBottomColor="#26124f"
            borderTopWidth="2px"
            borderBottomWidth="2px"
          >
            <Container maxW="1400px">
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="flex-end"
                alignItems="center"
                spacing="0px"
              >
                {newsItems.map((item) => (
                  <Text
                    key={item.id}
                    as={Link}
                    href={item.href}
                    py="5"
                    px="5"
                    _hover={{
                      bgColor: "#0e0023",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    bgColor={router.pathname === item.href ? "#0e0023" : "none"}
                    color="#fff"
                    fontSize={{ "3000px": "lg" }}
                    fontWeight={500}
                  >
                    {item.label}
                  </Text>
                ))}
              </Stack>
            </Container>
          </Box>
        </Fade>
      ) : null}
    </Box>
  );
}
