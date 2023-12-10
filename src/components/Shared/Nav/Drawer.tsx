import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Text,
  Link as CLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../Logo";
import { navItems } from ".";
import { IoIosArrowDown } from "react-icons/io";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function MobileDrawer(props: MobileDrawerProps) {
  const { isOpen, onClose, onOpen } = props;
  const router = useRouter();

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bgColor="#03020b" color="#fff">
          <DrawerCloseButton
            _focus={{
              boxShadow: "none",
            }}
          />
          <DrawerHeader p="5">
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            <VStack w="full" align="start">
              <Menu>
                <MenuButton
                  as={Button}
                  variant="unstyled"
                  color={
                    navItems.find((item) => item.href === router.pathname)
                      ? "#6317fe"
                      : ""
                  }
                  display="flex"
                  alignItems="center"
                  rightIcon={<IoIosArrowDown />}
                >
                  Phronesis AI Foundation
                </MenuButton>

                <MenuList bgColor="#6317fe" border="none">
                  {navItems.map((item) => (
                    <MenuItem
                      key={item.id}
                      bgColor="#6317fe"
                      as={Link}
                      href={item.href}
                      _hover={{
                        color: "#03020b",
                        outline: "none",
                        boxShadow: "none",
                      }}
                      _active={{
                        boxShadow: "none",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                      color={router.pathname === item.href ? "#03020b" : ""}
                      fontSize={{ "3000px": "lg" }}
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
                  justifyContent="space-between"
                  color={
                    router.pathname === "/news" ||
                    router.pathname === "/dubai-crypto-expo-2023"
                      ? "#6317fe"
                      : ""
                  }
                  display="flex"
                  alignItems="center"
                  rightIcon={<IoIosArrowDown />}
                >
                  News/Updates
                </MenuButton>

                <MenuList bgColor="#6317fe" border="none">
                  <MenuItem
                    bgColor="#6317fe"
                    as={Link}
                    href="/dubai-crypto-expo-2023"
                    _hover={{
                      color: "#03020b",
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
                        ? "#03020b"
                        : ""
                    }
                    fontSize={{ "3000px": "lg" }}
                  >
                    Dubai Crypto Expo 2023
                  </MenuItem>
                  <MenuItem
                    bgColor="#6317fe"
                    as={Link}
                    href="/news"
                    _hover={{
                      color: "#03020b",
                      outline: "none",
                      boxShadow: "none",
                    }}
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    color={router.pathname === "/news" ? "#03020b" : ""}
                    fontSize={{ "3000px": "lg" }}
                  >
                    Articles
                  </MenuItem>
                </MenuList>
              </Menu>
            </VStack>
            <VStack w="full" mt="30px" spacing="4">
              <Button
                as={Link}
                href="/phronzero"
                variant="primary"
                borderRadius="full"
                px="8"
                py="5"
                w="full"
                fontSize={{ "3000px": "lg" }}
                textTransform="uppercase"
              >
                PhronZero
              </Button>
              <Button
                as={CLink}
                href="https://phron.ai/whitepaper.pdf"
                target="_blank"
                variant="primary-purple"
                borderRadius="full"
                px="8"
                py="5"
                w="full"
              >
                Whitepaper
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
