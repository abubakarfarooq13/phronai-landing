import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  HStack,
  Container,
  useDisclosure,
  Link as CLink,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../..";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./Drawer";
import { IoIosArrowDown } from "react-icons/io";
import SingleMenu from "./SingleMenu";

// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   PopoverHeader,
//   PopoverBody,
//   PopoverFooter,
//   PopoverArrow,
//   PopoverCloseButton,
//   PopoverAnchor,
// } from "@chakra-ui/react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

const Fade = require("react-reveal/Fade");

export const navItems = [
  {
    id: 2,
    label: "PhronZero",
    href: "/",
  },
  {
    id: 2,
    label: "Phron AI: Layer 1",
    href: "/chain",
  },
  {
    id: 4,
    label: "Our Team",
    href: "/team",
  },
  {
    id: 5,
    label: "RoadMap",
    href: "/roadmap",
  },
  // {
  //   id: 5,
  //   label: "Team",
  //   href: "/team",
  // },
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
  {
    id: 22,
    label: "News / Updates",
    subMenu: [
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
    ],
  },
  // {
  //   id: 14,
  //   label: "Phron AI: Projects",
  //   href: "/projects",
  // },
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

export const menu = ["Phron AI Foundation", "News / Updates"];

export default function Nav() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: onMenuOpen,
    isOpen: isMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  const navRef = useRef<HTMLDivElement>(null);

  const [currentMenu, setCurrentMenu] = useState("Phron AI Foundation");

  const router = useRouter();

  useEffect(() => {
    if (newsItems.find((item) => item.href === router.pathname)) {
      setCurrentMenu("News / Updates");
    }

    if (navItems.find((item) => item.href === router.pathname)) {
      setCurrentMenu("Phron AI Foundation");
    }

    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 0 && navRef.current) {
        navRef.current.style.backgroundColor = "#05010c";
      }

      if (currentScroll <= 0 && navRef.current) {
        navRef.current.style.backgroundColor = "transparent";
        return;
      }
      // if (
      //   currentScroll > lastScroll &&
      //   !body.classList.contains("scroll-down")
      // ) {
      //   body.classList.remove("scroll-up");
      //   body.classList.add("scroll-down");
      // } else if (
      //   currentScroll < lastScroll &&
      //   body.classList.contains("scroll-down")
      // ) {
      //   body.classList.remove("scroll-down");
      //   body.classList.add("scroll-up");
      // }
      // lastScroll = currentScroll;
    });
  }, []);

  return (
    <Box
      as="nav"
      ref={navRef}
      pt="5"
      pb={{ base: "5", md: "5" }}
      // bgColor="#05010c"
      bgColor="transparent"
      color="#fff"
      pos="fixed"
      top={0}
      left={0}
      w="full"
      zIndex={999}
      transition="all 300ms ease-in-out"
    >
      <Container maxW="1440px" px={{ base: "4", xl: "0" }}>
        <HStack justifyContent="space-between">
          <Logo />

          <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Box display={{ base: "flex", "1350px": "none" }} onClick={onOpen}>
            <CgMenuRightAlt size="30px" />
          </Box>

          <HStack
            spacing={{ base: "20px", "2xl": "24px" }}
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
            ml="0px"
          >
            {/* {menu.map((item) => (
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
            ))} */}
            {navItems.map((item) =>
              item.subMenu ? (
                <Menu key={item.id} isOpen={isMenuOpen} onClose={onMenuClose}>
                  <MenuButton
                    onMouseOver={onMenuOpen}
                    as={Button}
                    _hover={{
                      // bgColor: "#0e0023",
                      color: "#9e5aff",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    color={router.pathname === item.href ? "#9e5aff" : "#fff"}
                    fontWeight={500}
                    rightIcon={<IoIosArrowDown />}
                    colorScheme="ghost"
                    px="0"
                  >
                    {item.label}
                  </MenuButton>
                  <MenuList bg="black" borderColor="rgba(255,255,255,0.1)">
                    {item.subMenu.map((link) => (
                      <MenuItem
                        bg="black"
                        key={link.id}
                        as={Link}
                        href={link.href}
                        _hover={{
                          // bgColor: "#0e0023",
                          color: "#9e5aff",
                          outline: "none",
                          boxShadow: "none",
                        }}
                        _active={{
                          boxShadow: "none",
                        }}
                        _focus={{
                          boxShadow: "none",
                        }}
                        color={
                          router.pathname === item.href ? "#9e5aff" : "#fff"
                        }
                        fontWeight={500}
                        colorScheme="ghost"
                      >
                        {link.label}
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
              ) : (
                <Text
                  key={item.id}
                  as={Link}
                  href={item.href}
                  // py="5"
                  // px="5"
                  _hover={{
                    // bgColor: "#0e0023",
                    color: "#9e5aff",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  _active={{
                    boxShadow: "none",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                  color={router.pathname === item.href ? "#9e5aff" : "#fff"}
                  fontWeight={500}
                >
                  {item.label}
                </Text>
              )
            )}
          </HStack>

          <HStack
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
          >
            {/* <Button
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
            </Button> */}

            <Button
              as={CLink}
              href="https://phron.ai/whitepaper.pdf"
              target="_blank"
              variant="primary-purple"
              borderRadius="full"
              padding="5px 20px"
              w="full"
              fontSize={{ base: "sm", "3000px": "lg" }}
            >
              Whitepaper
            </Button>
            <Button
              as={Link}
              target="_blank"
              href="https://phron.ai/tokenomics.pdf"
              variant="primary-outline"
              borderRadius="full"
              padding="5px 20px"
              w="full"
              fontSize={{ base: "sm", "3000px": "lg" }}
            >
              Tokenomics
            </Button>
          </HStack>
        </HStack>
      </Container>

      {/* {currentMenu === "Phron AI Foundation" ? (
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
      ) : null} */}
    </Box>
  );
}
