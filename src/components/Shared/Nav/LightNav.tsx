import React, { useState } from "react";
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
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DarkLogo from "../Logo/DarkLogo";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./LightDrawer";
import { IoIosArrowDown } from "react-icons/io";
import {
  menu,
  newsItems,
  navItems,
  layerZeroAndLayerOneMenuItems,
  buildMenuItems,
  networkMenuItems,
} from "@/constant/nav";
import ConnectWalletButton from "../ConnectWalletButton";
import Image from "next/image";

const _menu = [
  {
    id: 1,
    label: "Layer 1 / Layer 0",
    href: "#",
    subMenu: [
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
    ],
  },
  {
    id: 2,
    label: "Build",
    href: "#",
    subMenu: [
      {
        id: 5,
        label: "Github",
        href: "http://git.phron.ai/",
        icon: "/assets/new-home/github-icon.png",
      },
      {
        id: 55,
        label: "Docs",
        href: "https://docs.phron.ai/",
        icon: "/assets/new-home/docs-icon.png",
      },
    ],
  },
  {
    id: 3,
    label: "Network",
    href: "#",
  },
  {
    id: 4,
    label: "Community",
    href: "#",
  },
  {
    id: 5,
    label: "Papers",
    href: "#",
  },
];

export default function LightNav() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentMenu, setCurrentMenu] = useState("Phron AI Foundation");

  const router = useRouter();

  return (
    <Box
      as="nav"
      py="5"
      bgColor="#fff"
      color="#000"
      pos="fixed"
      top={0}
      left={0}
      zIndex="999"
      w="full"
      transition="all 300ms ease-in-out"
    >
      <Container maxW="1240px">
        <HStack justifyContent="space-between" spacing="10">
          <DarkLogo />

          <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Box display={{ base: "flex", "1350px": "none" }} onClick={onOpen}>
            <CgMenuRightAlt size="30px" />
          </Box>

          <HStack
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
            flex={1}
            spacing="10"
          >
            {_menu.map((item) => (
              // <CMenuItem key={item.id} {...item} />
              <></>
            ))}
          </HStack>
          <ConnectWalletButton gradientButton />
        </HStack>
      </Container>
    </Box>
  );
}
