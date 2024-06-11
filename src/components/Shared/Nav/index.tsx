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
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../..";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./Drawer";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import PhronZeroLogo from "../PhronZeroLogo";
import Image from "next/image";
import ConnectWalletButton from "../ConnectWalletButton";
import { MdOutlineClose } from "react-icons/md";

export const layerZeroAndLayerOneMenuItems = [
  {
    id: 2,
    label: "Layer 0",
    href: "/phronzero",
    icon: "/assets/new-home/layer-icon.png",
  },
  {
    id: 2,
    label: "Layer 1",
    href: "/chain",
    icon: "/assets/new-home/layer-icon.png",
  },
  {
    id: 6,
    label: "Phron Coin",
    href: "/phron",
    icon: "/assets/new-home/phron-coin.png",
  },
  {
    id: 3,
    label: "Ecosystem",
    href: "/ecosystem",
    icon: "/assets/new-home/ecosystem.png",
  },
  {
    id: 4,
    label: "Team",
    href: "/team",
    icon: "/assets/new-home/team-icon.png",
  },
  {
    id: 5,
    label: "Roadmap",
    href: "/roadmap",
    icon: "/assets/new-home/map-icon.png",
  },
];

export const buildMenuItems = [
  {
    id: 5,
    label: "Github",
    href: "#",
    icon: "/assets/new-home/github-icon.png",
  },
  {
    id: 55,
    label: "Docs",
    href: "https://docs.phron.ai/",
    icon: "/assets/new-home/docs-icon.png",
  },
];

export const networkMenuItems = [
  {
    id: 5,
    label: "PhronScan",
    href: "https://testnet.phronscan.io",
    icon: "/assets/new-home/phronscan-icon.png",
  },

  // {
  //   id: 6,
  //   label: "Telemetry",
  //   href: "#",
  //   icon: "/assets/new-home/code-bracket.svg",
  // },

  // {
  //   id: 6,
  //   label: "Become a Validator",
  //   href: "#",
  //   icon: "/assets/new-home/check-icon.png",
  // },
  // {
  //   id: 7,
  //   label: "DEX",
  //   href: "#",
  //   icon: "/assets/new-home/swap.svg",
  // },
  // {
  //   id: 8,
  //   label: "Bridge",
  //   href: "#",
  //   icon: "/assets/new-home/bridge.svg",
  // },

  // {
  //   id: 10,
  //   label: "Hacken Auditing",
  //   href: "#",
  //   icon: "/assets/new-home/hacken.svg",
  // },
];

export const communityMenuItems = [
  {
    id: 11,
    label: "Dubai Expo 2023",
    href: "/dubai-crypto-expo-2023",
    icon: "/assets/new-home/dubai-expo.svg",
  },
  {
    id: 9,
    label: "Partnerships",
    href: "/partnerships",
    icon: "/assets/new-home/handshake.svg",
  },
  {
    id: 9,
    label: "VIP Partnerships",
    href: "/vip-partnerships",
    icon: "/assets/diamond-icon.svg",
  },
  // {
  //   id: 12,
  //   label: "X updates",
  //   href: "#",
  //   icon: "/assets/new-home/x-twitter.svg",
  // },
];

export const papersMenuItems = [
  {
    id: 9,
    label: "Whitepaper Pure",
    href: "https://phron.ai/whitepaper_pure.pdf",
    icon: "/assets/new-home/docs-icon.png",
  },
  {
    id: 10,
    label: "Whitepaper Royal",
    href: "https://phron.ai/whitepaper_royal.pdf",
    icon: "/assets/new-home/docs-icon.png",
  },
  {
    id: 12,
    label: "Tokenomics",
    href: "https://phron.ai/tokenomics.pdf",
    icon: "/assets/new-home/docs-icon.png",
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

export const navItems = [
  {
    id: 2,
    label: "Layer 0 / Layer 1",
    href: "",
    className: "dropdown-1",
    items: [
      "/phronzero",
      "/chain",
      "/phron",
      "/ecosystem",
      "/team",
      "/roadmap",
    ],
    imageUrl: "/assets/phronzero/card-1-img.png",
  },
  {
    id: 2,
    label: "Build",
    href: "",
    className: "dropdown-2",
    items: [],
    imageUrl: "/assets/new-home/chain-image.png",
  },
  {
    id: 4,
    label: "Network",
    href: "",
    className: "dropdown-3",
    items: [],
    imageUrl: "/assets/phronzero/card-3-img.png",
  },
  {
    id: 4,
    label: "Community",
    href: "",
    className: "dropdown-4",
    items: ["/dubai-crypto-expo-2023", "/partnerships"],
    imageUrl: "/assets/new-home/community.png",
  },
  {
    id: 5,
    label: "Papers",
    href: "",
    className: "dropdown-5",
    items: [],
    imageUrl: "/assets/new-home/paper.png",
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

const AlertBanner = React.forwardRef((props, ref: any) => {
  const [show, setShow] = useState(true);

  if (!show) {
    return false;
  }

  return (
    <Box
      bgImage={{
        base: "/assets/chain/alert-banner-image-mobile.png",
        md: "/assets/chain/alert-banner-image.png",
      }}
      bgPos={{ base: "right", md: "top" }}
      bgSize="cover"
      transform="translateY(0px)"
      display="block"
      bgRepeat="no-repeat"
      w="full"
      ref={ref}
      transition="all .3s"
    >
      <Stack
        direction={{ base: "column", sm: "row" }}
        alignItems={{ base: "flex-end", sm: "center" }}
        justifyContent="center"
        maxW="1260px"
        mx="auto"
        px="4"
        py="4"
        spacing={{ base: "3", md: "8" }}
        position="relative"
        pt={{ base: "12", sm: "4" }}
      >
        <HStack alignItems="center" spacing={{ base: "2", sm: "5" }}>
          <Image
            src="/assets/chain/balloon-icon.png"
            alt="ballon icon"
            width={25}
            height={25}
          />
          <Text
            fontWeight={500}
            textAlign="center"
            fontSize={{ base: "sm", md: "16px" }}
          >
            Welcome to the PHRON AI Airdrop Extravaganza!
          </Text>
          <Image
            src="/assets/chain/balloon-icon.png"
            alt="ballon icon"
            width={25}
            height={25}
          />
        </HStack>

        <HStack spacing="4">
          <Button
            variant="primary"
            as="a"
            href="https://voyage.phron.ai/"
            target="_blank"
            rounded="full"
            size="sm"
            px="4"
          >
            Get Started
          </Button>
          <Text
            cursor="pointer"
            onClick={() => {
              setShow(false);
            }}
            display={{ base: "none", sm: "block" }}
          >
            <MdOutlineClose />
          </Text>
        </HStack>
        <IconButton
          cursor="pointer"
          onClick={() => {
            setShow(false);
          }}
          position="absolute"
          top="10px"
          right="15px"
          display={{ base: "flex", sm: "none" }}
          size="xs"
          icon={<MdOutlineClose fontSize="16px" />}
          aria-label="close button"
        />
      </Stack>
    </Box>
  );
});

AlertBanner.displayName = "AlertBanner";

function SubMenu(props: any) {
  const router = useRouter();

  return (
    <>
      <Box
        bgColor="rgba(0,0,0,.9)"
        position="absolute"
        maxW="600px"
        w="full"
        rounded="2xl"
        p="8"
        {...props}
      >
        <Container maxW="1400px" px="0">
          <Stack direction="row" spacing="10">
            <Box
              bgImage="linear-gradient(180deg, rgba(41,24,93,1) 41%, rgba(13,7,29,1) 77%)"
              rounded="2xl"
              // px="10"
              // py="5"
              h="fit-content"
              w={props.label === "Papers" ? "200px" : "250px"}
              display="grid"
              placeContent="center"
              pt="5"
            >
              <Image
                src={props.imageUrl}
                alt="menu image"
                width={props.label === "Papers" ? 80 : 160}
                height={160}
              />
            </Box>
            <VStack w="50%" spacing="10px">
              {props.menu.map((item: any) => (
                <HStack
                  key={item.id}
                  w="full"
                  py="2"
                  px="5"
                  rounded="lg"
                  spacing="4"
                  _hover={{
                    bgColor: "#2d1a65",
                    // px: "20px",
                    // py: "10px",
                  }}
                  as={Link}
                  href={item.href}
                  bgColor={router.pathname === item.href ? "#2d1a65" : "none"}
                >
                  <Image src={item.icon} alt="icon" width={20} height={20} />
                  <Text
                    w="full"
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    // bgColor={router.pathname === item.href ? "#0e0023" : "none"}
                    color="#fff"
                    fontSize={{ base: "17px", "3000px": "lg" }}
                    fontWeight={500}
                  >
                    {item.label}
                  </Text>
                </HStack>
              ))}
            </VStack>
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
  const alertBannerRef = useRef<HTMLDivElement>(null);

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
      }
      if (currentScroll > 0 && navRef.current) {
        navRef.current.style.backgroundColor = "#05010c";
      }

      // if (currentScroll > 100 && alertBannerRef.current) {
      //   alertBannerRef.current.style.transform = "translateY(-100%)";
      //   alertBannerRef.current.style.display = "none";
      // }

      // if (currentScroll <= 0 && alertBannerRef.current) {
      //   alertBannerRef.current.style.transform = "translateY(0px)";
      //   alertBannerRef.current.style.display = "block";
      // }

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
      pos={{ base: "relative", sm: "fixed" }}
      top={0}
      left={0}
      zIndex={999}
      w="full"
    >
      <AlertBanner ref={alertBannerRef} />
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
            <Box maxW={router.pathname === "/phronzero" ? "180px" : "166px"}>
              {router.pathname === "/phronzero" ? <PhronZeroLogo /> : <Logo />}
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
                    // bgColor: "#6317fe",
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
                    fontSize="17px"
                  >
                    {item.label}
                  </Text>

                  <Box>
                    <SubMenu
                      menu={layerZeroAndLayerOneMenuItems}
                      className="dropdown-1-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                    <SubMenu
                      menu={buildMenuItems}
                      imageUrl={item.imageUrl}
                      label={item.label}
                      className="dropdown-2-menu"
                    />
                    <SubMenu
                      menu={networkMenuItems}
                      className="dropdown-3-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                    <SubMenu
                      menu={communityMenuItems}
                      className="dropdown-4-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                    <SubMenu
                      menu={papersMenuItems}
                      className="dropdown-5-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                  </Box>
                </Box>
              ))}
            </HStack>

            <HStack
              // display={{ base: "none", "1350px": "flex" }}
              display={{ base: "none", md: "flex" }}
              fontSize={{ base: "15px", "2xl": "base" }}
            >
              {/* <Menu>
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
              </Menu> */}

              <ConnectWalletButton />

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
      </Box>
    </Box>
  );
}
