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
import { SiGitbook } from "react-icons/si";

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
import PhronZeroLogo from "../PhronZeroLogo";
import Image from "next/image";

// const Fade = require("react-reveal/Fade");

export const layerZeroAndLayerOneMenuItems = [
  // {
  //   id: 2,
  //   label: "Homepage",
  //   href: "/",
  // },
  {
    id: 2,
    label: "PhronZero",
    href: "/",
  },
  {
    id: 3,
    label: "Phron Layer 1",
    href: "/chain",
  },
  {
    id: 4,
    label: "Road map",
    href: "/roadmap",
  },
];

export const ecosystem = [
  {
    id: 5,
    label: "PhronScan",
    href: "#",
  },
  {
    id: 6,
    label: "Telemetry",
    href: "#",
  },
  {
    id: 7,
    label: "DEX",
    href: "#",
  },
  {
    id: 8,
    label: "Bridge",
    href: "#",
  },
  {
    id: 9,
    label: "Partnerships",
    href: "/partnerships",
  },
  {
    id: 10,
    label: "Hacken Auditing",
    href: "#",
  },
];

export const newsAndUpdates = [
  {
    id: 11,
    label: "Dubai Expo 2023",
    href: "/dubai-crypto-expo-2023",
  },
  {
    id: 12,
    label: "X updates",
    href: "#",
  },
];

// Layer 0 / Layer 1

// - Homepage
// - PhronZero
// - Phron Layer 1
// - Road map
// - Team

// Ecosystem

// - PhronScan
// - Telemetry
// - DEX
// - Bridge
// - ⁠Partnerships
// - Hacken Auditing

// News / Updates

// - Dubai Expo 2023
// - X updates

// export const navItems = [
//   {
//     id: 2,
//     label: "PhronZero",
//     href: "/",
//   },
//   {
//     id: 2,
//     label: "Phron AI: Layer 1",
//     href: "/chain",
//   },
//   {
//     id: 4,
//     label: "Our Team",
//     href: "/team",
//   },
//   {
//     id: 5,
//     label: "RoadMap",
//     href: "/roadmap",
//   },
//   // {
//   //   id: 5,
//   //   label: "Team",
//   //   href: "/team",
//   // },
//   {
//     id: 10,
//     label: "PHRON",
//     href: "/phron",
//   },
//   {
//     id: 3,
//     label: "Ecosystem",
//     href: "/ecosystem",
//   },
//   // {
//   //   id: 4,
//   //   label: "NFT Marketplace",
//   //   href: "/marketplace",
//   // },
//   {
//     id: 22,
//     label: "News / Updates",
//     subMenu: [
//       {
//         id: 1,
//         label: "Dubai Crypto Expo 2023",
//         href: "/dubai-crypto-expo-2023",
//       },
//       // {
//       //   id: 2,
//       //   label: "Articles",
//       //   href: "/news",
//       // },
//     ],
//   },

//   // {
//   //   id: 14,
//   //   label: "Phron AI: Projects",
//   //   href: "/projects",
//   // },
//   // {
//   //   id: 5,
//   //   label: "Phron: The GamePad",
//   //   href: "/gamepad",
//   // },
//   // {
//   //   id: 5,
//   //   label: "News",
//   //   href: "/news",
//   // },

//   // {
//   //   id: 5,
//   //   label: "PHRON",
//   //   href: "/#",
//   // },
// ];

export const navItems = [
  {
    id: 2,
    label: "Layer 0 / Layer 1",
    href: "/",
    className: "dropdown-1",
    items: ["/", "/chain", "/roadmap"],
  },
  {
    id: 2,
    label: "Ecosystem",
    href: "/chain",
    className: "dropdown-2",
    items: ["#", "#", "#", "#", "/partnerships", "#"],
  },
  {
    id: 4,
    label: "News / Updates",
    href: "/team",
    className: "dropdown-3",
    items: ["/dubai-crypto-expo-2023", "#"],
  },
];

export const newsItems = [
  {
    id: 1,
    label: "Dubai Crypto Expo 2023",
    href: "/dubai-crypto-expo-2023",
  },
  // {
  //   id: 2,
  //   label: "Articles",
  //   href: "/news",
  // },
];

export const menu = ["Phron AI Foundation", "News / Updates"];

function SubMenu(props: any) {
  const router = useRouter();

  return (
    <>
      <Box
        bgColor="#6317fe"
        borderBottomColor="#26124f"
        borderBottomWidth="2px"
        position="absolute"
        w="full"
        left="0"
        {...props}
      >
        <Container maxW="1400px">
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent="flex-end"
            alignItems="center"
            spacing="0px"
          >
            {props.menu.map((item: any) => (
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
    </>
  );
}

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
    <Box pos="fixed" top={0} left={0} zIndex={999} w="full">
      <Box
        as="nav"
        ref={navRef}
        pt={{ base: "5", xl: "0" }}
        pb={{ base: "5", xl: "0" }}
        // bgColor="#05010c"
        bgColor="transparent"
        color="#fff"
        w="full"
        transition="all 300ms ease-in-out"
        position="relative"
        px="4"
      >
        <Container maxW="1440px" px={{ base: "4", xl: "0" }}>
          <HStack justifyContent="space-between">
            <Box maxW={router.pathname === "/" ? "180px" : "166px"}>
              {router.pathname === "/" ? <PhronZeroLogo /> : <Logo />}
            </Box>

            <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

            <HStack
              // spacing={{ base: "20px", "2xl": "20px" }}
              spacing="0px"
              // display={{ base: "none", "1350px": "flex" }}
              display={{ base: "none", xl: "flex" }}
              fontSize={{ base: "15px", "2xl": "base" }}
              ml="0px"
            >
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  className={item.className}
                  _hover={{
                    // bgColor: "#0e0023",
                    color: "#fff",
                    outline: "none",
                    boxShadow: "none",
                    bgColor: "#6317fe",
                  }}
                  px="4"
                  color={
                    item.items?.includes(router.pathname) ? "#9e5aff" : "#fff"
                  }
                  cursor="pointer"
                >
                  <Text
                    h="full"
                    py="7"
                    _hover={{
                      outline: "none",
                      boxShadow: "none",
                    }}
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    fontWeight={500}
                  >
                    {item.label}
                  </Text>

                  <Box>
                    <SubMenu
                      menu={layerZeroAndLayerOneMenuItems}
                      className="dropdown-1-menu"
                    />
                    <SubMenu menu={ecosystem} className="dropdown-2-menu" />
                    <SubMenu
                      menu={newsAndUpdates}
                      className="dropdown-3-menu"
                    />
                  </Box>
                </Box>
              ))}

              <Text
                as={Link}
                href="https://docs.phron.ai"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
                fontSize={{ base: "30px", "3000px": "35px" }}
                ml="5"
              >
                <svg
                  width="35"
                  height="35"
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

            <HStack
              // display={{ base: "none", "1350px": "flex" }}
              display={{ base: "none", md: "flex" }}
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

              {/* <Button
              as={CLink}
              href="https://phron.ai/whitepaper.pdf"
              target="_blank"
              variant="primary"
              borderRadius="full"
              // padding="10px 20px"
              px="8"
              w="full"
              fontSize={{ base: "sm", "3000px": "lg" }}
              color="#5900d7"
            >
              Whitepaper
            </Button> */}

              <Menu>
                <MenuButton
                  as={Button}
                  variant="primary"
                  borderRadius="full"
                  // padding="10px 20px"
                  px="8"
                  w="full"
                  fontSize={{ base: "sm", "3000px": "lg" }}
                  color="#5900d7"
                >
                  Whitepapers
                </MenuButton>
                <MenuList bgColor="#000" border="0px" py="0">
                  <MenuItem
                    color="#fff"
                    bgColor="#000"
                    roundedTop="lg"
                    as="a"
                    href="https://phron.ai/whitepaper_pure.pdf"
                    target="_blank"
                    display="block"
                    ml="5"
                    pt="3"
                    _hover={{
                      color: "#9e5aff",
                    }}
                  >
                    Whitepaper Pure
                  </MenuItem>
                  <MenuItem
                    color="#fff"
                    bgColor="#000"
                    roundedBottom="lg"
                    as="a"
                    href="https://phron.ai/whitepaper_royal.pdf"
                    ml="5"
                    pb="3"
                    target="_blank"
                    display="block"
                    _hover={{
                      color: "#9e5aff",
                    }}
                  >
                    Whitepaper Royal
                  </MenuItem>
                </MenuList>
              </Menu>
              <Button
                as={Link}
                target="_blank"
                href="https://phron.ai/tokenomics.pdf"
                variant="primary-purple"
                borderRadius="full"
                // padding="10px 20px"
                w="full"
                px="8"
                fontSize={{ base: "sm", "3000px": "lg" }}
              >
                Tokenomics
              </Button>

              <Text
                as={Link}
                href="https://docs.phron.ai"
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  color: "rgba(105,46,164,1)",
                }}
                fontSize={{ base: "30px", "3000px": "35px" }}
                ml="5"
                display={{ md: "block", xl: "none" }}
              >
                <svg
                  width="35"
                  height="35"
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

              <Box
                // display={{ base: "flex", "1350px": "none" }}
                display={{ base: "flex", xl: "none" }}
                onClick={onOpen}
                ml="5"
              >
                <CgMenuRightAlt size="30px" />
              </Box>
            </HStack>

            <Box
              // display={{ base: "flex", "1350px": "none" }}
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              ml="5"
            >
              <CgMenuRightAlt size="30px" />
            </Box>
          </HStack>
        </Container>
        {/* 
      {router.pathname === "/brand-assets" ? (
        <HStack
          mt="5"
          justifyContent="center"
          spacing="10"
          bgColor="#6317fe"
          py="5"
        >
          <Text as="a" href="#logo">
            Logo
          </Text>
          <Text as="a" href="#colors">
            Colors
          </Text>
          <Text as="a" href="#fonts">
            Fonts
          </Text>
        </HStack>
      ) : null} */}

        {/* {currentMenu === "News / Updates" ? (
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
    </Box>
  );
}
