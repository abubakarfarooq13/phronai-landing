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
import DarkLogo from "../Logo/DarkLogo";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./LightDrawer";
import { IoIosArrowDown } from "react-icons/io";

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

export default function LightNav() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const router = useRouter();

  return (
    <Box as="nav" py="5" bgColor="#fff" pos="sticky" top={0} zIndex="999">
      <Container maxW="1400px">
        <HStack justifyContent="space-between">
          <DarkLogo />

          <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

          <Box display={{ base: "flex", "1350px": "none" }} onClick={onOpen}>
            <CgMenuRightAlt size="30px" />
          </Box>

          {/* <HStack
            spacing={{ base: "20px", "2xl": "30px" }}
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
          > */}
          <HStack
            ml="100px"
            spacing={{ base: "20px", "2xl": "30px" }}
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
          >
            <Menu>
              <MenuButton
                as={Button}
                variant="unstyled"
                color={
                  navItems.find((item) => item.href === router.pathname)
                    ? "#6317fe"
                    : ""
                }
                cursor="pointer"
                fontWeight={500}
                display="flex"
                alignItems="center"
                rightIcon={<IoIosArrowDown />}
                fontSize="17px"
              >
                Phronesis AI Foundation
              </MenuButton>

              <MenuList bgColor="#fff" border="none" mt="5" boxShadow="xl">
                {navItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    bgColor="#fff"
                    as={Link}
                    px="5"
                    pb="2"
                    href={item.href}
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
                    color={router.pathname === item.href ? "#6317fe" : "#000"}
                    fontSize={{ "3000px": "lg" }}
                    fontWeight={500}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                variant="unstyled"
                color={
                  router.pathname === "/news" ||
                  router.pathname === "/dubai-expo-2023"
                    ? "#6317fe"
                    : "#000"
                }
                cursor="pointer"
                fontWeight={500}
                display="flex"
                alignItems="center"
                rightIcon={<IoIosArrowDown />}
                fontSize="17px"
              >
                News/Updates
              </MenuButton>

              <MenuList bgColor="#fff" border="none" mt="5" boxShadow="xl">
                <MenuItem
                  bgColor="#fff"
                  as={Link}
                  px="5"
                  pb="2"
                  href="/dubai-crypto-expo-2023"
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
                    router.pathname === "/dubai-crypto-expo-2023"
                      ? "#6317fe"
                      : "#000"
                  }
                  fontSize={{ "3000px": "lg" }}
                  fontWeight={500}
                >
                  Dubai Crypto Expo 2023
                </MenuItem>
                <MenuItem
                  bgColor="#fff"
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
                  color={router.pathname === "/news" ? "#6317fe" : "#000"}
                  fontSize={{ "3000px": "lg" }}
                  fontWeight={500}
                >
                  Articles
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>

          <HStack
            display={{ base: "none", "1350px": "flex" }}
            fontSize={{ base: "15px", "2xl": "base" }}
          >
            <Button
              as={Link}
              href="/phronzero"
              variant="purple-outline"
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
          {/* </HStack> */}
        </HStack>
      </Container>
    </Box>
  );
}
