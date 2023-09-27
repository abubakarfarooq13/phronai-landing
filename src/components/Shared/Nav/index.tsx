import React from "react";
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

export const navItems = [
  {
    id: 2,
    label: "Phronesis: The Chain",
    href: "/",
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
    label: "Phron: The GamePad",
    href: "/gamepad",
  },
  // {
  //   id: 5,
  //   label: "News",
  //   href: "/news",
  // },
  // {
  //   id: 5,
  //   label: "PHRON",
  //   href: "/phron",
  // },
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

          <Box display={{ base: "flex", "1350px": "none" }} onClick={onOpen}>
            <CgMenuRightAlt size="30px" />
          </Box>

          <HStack
            spacing={{ base: "20px", "2xl": "30px" }}
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                _hover={{
                  color: router.pathname === item.href ? "#fff" : "#6317fe",
                }}
                color={router.pathname === item.href ? "#6317fe" : ""}
                fontSize={{ "3000px": "lg" }}
              >
                {item.label}
              </Link>
            ))}
            <Menu>
              <MenuButton
                as={Text}
                color={
                  router.pathname === "/news" ||
                  router.pathname === "/dubai-expo-2023"
                    ? "#6317fe"
                    : ""
                }
                cursor="pointer"
              >
                News/Updates
              </MenuButton>

              <MenuList bgColor="#05010c" border="none" mt="5">
                <MenuItem
                  bgColor="#05010c"
                  as={Link}
                  px="5"
                  pb="2"
                  href="/dubai-expo-2023"
                  _hover={{
                    color: "#6317fe",
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
                    router.pathname === "/dubai-expo-2023" ? "#6317fe" : ""
                  }
                  fontSize={{ "3000px": "lg" }}
                  fontWeight={500}
                >
                  Dubai Crypto Expo 2023
                </MenuItem>
                <MenuItem
                  bgColor="#05010c"
                  as={Link}
                  px="5"
                  href="/news"
                  _hover={{
                    color: "#6317fe",
                    outline: "none",
                    boxShadow: "none",
                  }}
                  _active={{
                    boxShadow: "none",
                  }}
                  _focus={{
                    boxShadow: "none",
                  }}
                  color={router.pathname === "/news" ? "#6317fe" : ""}
                  fontSize={{ "3000px": "lg" }}
                  fontWeight={500}
                >
                  Articles
                </MenuItem>
              </MenuList>
            </Menu>

            <HStack ml="40px" spacing="5">
              <Button
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
              </Button>
              <Button
                as={CLink}
                href="https://phron.ai/whitepaper.pdf"
                target="_blank"
                variant="primary"
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
        </HStack>
      </Container>
    </Box>
  );
}
