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
import { navItems, newsItems } from ".";
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
            <Accordion allowMultiple w="full">
              <AccordionItem border="0px">
                <h2>
                  <AccordionButton
                    fontWeight={500}
                    px="0"
                    justifyContent="space-between"
                  >
                    Phron AI Foundation
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {navItems.map((item) =>
                      !item.href ? null : (
                        <Text
                          w="full"
                          key={item.id}
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
                    News / Updates
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {newsItems.map((item) => (
                      <Text
                        w="full"
                        key={item.id}
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
                        color={router.pathname === item.href ? "#fff" : "none"}
                        fontSize={{ "3000px": "lg" }}
                      >
                        {item.label}
                      </Text>
                    ))}
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <VStack w="full" mt="30px" spacing="4">
              {/* <Button
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
              </Button> */}
              <Accordion allowMultiple w="full">
                <AccordionItem border="0px">
                  <AccordionButton
                    fontWeight={500}
                    px="0"
                    justifyContent="space-between"
                  >
                    <Button
                      // as={CLink}
                      // href="https://phron.ai/whitepaper.pdf"
                      // target="_blank"
                      as={Button}
                      variant="primary"
                      borderRadius="full"
                      // padding="10px 20px"
                      px="8"
                      w="full"
                      fontSize={{ base: "sm", "3000px": "lg" }}
                      color="#5900d7"
                      _active={{
                        color: "#5900d7",
                      }}
                      _focus={{
                        color: "#5900d7",
                      }}
                    >
                      Whitepapers
                    </Button>
                  </AccordionButton>

                  <AccordionPanel px="0" py="10px">
                    <VStack w="full">
                      <Text
                        w="full"
                        as={"a"}
                        href="https://phron.ai/whitepaper_pure.pdf"
                        target="_blank"
                        px="10px"
                        _active={{
                          boxShadow: "none",
                        }}
                        _focus={{
                          boxShadow: "none",
                        }}
                        fontSize={{ "3000px": "lg" }}
                        _hover={{
                          color: "#9e5aff",
                        }}
                      >
                        Whitepaper Pure
                      </Text>
                      <Text
                        w="full"
                        as={"a"}
                        href="https://phron.ai/whitepaper_royal.pdf"
                        target="_blank"
                        px="10px"
                        _active={{
                          boxShadow: "none",
                        }}
                        _focus={{
                          boxShadow: "none",
                        }}
                        fontSize={{ "3000px": "lg" }}
                        _hover={{
                          color: "#9e5aff",
                        }}
                      >
                        Whitepaper Royal
                      </Text>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
