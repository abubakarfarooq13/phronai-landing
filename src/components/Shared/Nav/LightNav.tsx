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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import DarkLogo from "../Logo/DarkLogo";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./LightDrawer";
import { IoIosArrowDown } from "react-icons/io";
import { menu, newsItems } from ".";

const Fade = require("react-reveal/Fade");

export const navItems = [
  {
    id: 2,
    label: "Phron: The Chain",
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

export default function LightNav() {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const [currentMenu, setCurrentMenu] = useState("Phron AI Foundation");

  const router = useRouter();

  return (
    <Box
      as="nav"
      pt="5"
      pb={{ base: "5", "1350px": "0" }}
      bgColor="#fff"
      pos="fixed"
      top={0}
      left={0}
      zIndex="999"
      w="full"
      transition="all 300ms ease-in-out"
    >
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
            {menu.map((item) => (
              <Button
                key={item}
                variant="unstyled"
                // color={item === currentMenu ? "#6317fe" : ""}
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

      {currentMenu === "Phron AI Foundation" ? (
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
