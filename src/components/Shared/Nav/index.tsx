import React from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  HStack,
  Container,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../..";
import { Link } from "@chakra-ui/next-js";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileDrawer from "./Drawer";

export const navItems = [
  {
    id: 1,
    label: "Phron: The GamePad",
    href: "/",
  },
  {
    id: 2,
    label: "Phronesis Chain",
    href: "/chain",
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
    id: 5,
    label: "PHRON",
    href: "/phron",
  },
  // {
  //   id: 5,
  //   label: "PHRON",
  //   href: "/#",
  // },
];

export default function Nav() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <Box as="nav" py="5" bgColor="#05010c" pos="sticky" top={0} zIndex="999">
      <Container maxW="1400px">
        <HStack justifyContent="space-between">
          <Logo />

          <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Box display={{ base: "flex", xl: "none" }} onClick={onOpen}>
            <GiHamburgerMenu size="30px" />
          </Box>

          <HStack spacing="30px" display={{ base: "none", xl: "flex" }}>
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                _hover={{
                  color: router.pathname === item.href ? "#fff" : "#6317fe",
                }}
                color={router.pathname === item.href ? "#6317fe" : ""}
              >
                {item.label}
              </Link>
            ))}

            <Button
              ml="40px"
              variant="primary"
              borderRadius="full"
              px="8"
              py="5"
            >
              Whitepaper
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
