import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Link as CLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../Logo";
import {
  networkMenuItems,
  layerZeroAndLayerOneMenuItems,
  navItems,
  communityMenuItems,
  newsItems,
  papersMenuItems,
  buildMenuItems,
} from ".";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import ConnectWalletButton from "../ConnectWalletButton";

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
            <Accordion allowMultiple w="full" mt="5">
              <AccordionItem border="0px">
                <h2>
                  <AccordionButton
                    fontWeight={500}
                    px="0"
                    justifyContent="space-between"
                  >
                    Layer 0 / Layer 1
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {layerZeroAndLayerOneMenuItems.map((item) =>
                      !item.href ? null : (
                        <HStack key={item.id} w="full" ml="4">
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                          <Text
                            w="full"
                            as={Link}
                            href={item.href}
                            // py="5"
                            px="10px"
                            _active={{
                              boxShadow: "none",
                            }}
                            _focus={{
                              boxShadow: "none",
                            }}
                            bgColor={
                              router.pathname === item.href ? "#5900d7" : "none"
                            }
                            color={
                              router.pathname === item.href ? "#fff" : "none"
                            }
                            fontSize={{ "3000px": "lg" }}
                          >
                            {item.label}
                          </Text>
                        </HStack>
                      )
                    )}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="0px">
                <h2>
                  <AccordionButton
                    fontWeight={500}
                    px="0"
                    justifyContent="space-between"
                  >
                    Build
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {buildMenuItems.map((item) =>
                      !item.href ? null : (
                        <HStack key={item.id} w="full" ml="4">
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={20}
                            height={20}
                          />
                          <Text
                            w="full"
                            as={Link}
                            href={item.href}
                            // py="5"
                            px="10px"
                            _active={{
                              boxShadow: "none",
                            }}
                            _focus={{
                              boxShadow: "none",
                            }}
                            bgColor={
                              router.pathname === item.href ? "#5900d7" : "none"
                            }
                            color={
                              router.pathname === item.href ? "#fff" : "none"
                            }
                            fontSize={{ "3000px": "lg" }}
                          >
                            {item.label}
                          </Text>
                        </HStack>
                      )
                    )}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="0px">
                <h2>
                  <AccordionButton
                    fontWeight={500}
                    px="0"
                    justifyContent="space-between"
                  >
                    Network
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {networkMenuItems.map((item) => (
                      <HStack key={item.id} w="full" ml="4">
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                        <Text
                          w="full"
                          as={Link}
                          href={item.href}
                          // py="5"
                          px="10px"
                          _active={{
                            boxShadow: "none",
                          }}
                          _focus={{
                            boxShadow: "none",
                          }}
                          bgColor={
                            router.pathname === item.href ? "#5900d7" : "none"
                          }
                          color={
                            router.pathname === item.href ? "#fff" : "none"
                          }
                          fontSize={{ "3000px": "lg" }}
                        >
                          {item.label}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="0px">
                <h2>
                  <AccordionButton
                    fontWeight={500}
                    px="0"
                    justifyContent="space-between"
                  >
                    Community
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {communityMenuItems.map((item) => (
                      <HStack key={item.id} w="full" ml="4">
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                        <Text
                          w="full"
                          as={Link}
                          href={item.href}
                          // py="5"
                          px="10px"
                          _active={{
                            boxShadow: "none",
                          }}
                          _focus={{
                            boxShadow: "none",
                          }}
                          bgColor={
                            router.pathname === item.href ? "#5900d7" : "none"
                          }
                          color={
                            router.pathname === item.href ? "#fff" : "none"
                          }
                          fontSize={{ "3000px": "lg" }}
                        >
                          {item.label}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="0px">
                <h2>
                  <AccordionButton
                    fontWeight={500}
                    px="0"
                    justifyContent="space-between"
                  >
                    Papers
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {papersMenuItems.map((item) => (
                      <HStack key={item.id} w="full" ml="4">
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                        <Text
                          w="full"
                          as={Link}
                          href={item.href}
                          // py="5"
                          px="10px"
                          _active={{
                            boxShadow: "none",
                          }}
                          _focus={{
                            boxShadow: "none",
                          }}
                          bgColor={
                            router.pathname === item.href ? "#5900d7" : "none"
                          }
                          color={
                            router.pathname === item.href ? "#fff" : "none"
                          }
                          fontSize={{ "3000px": "lg" }}
                        >
                          {item.label}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <VStack w="full" mt="30px" spacing="4">
              <ConnectWalletButton />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
