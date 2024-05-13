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
            <Accordion allowMultiple w="full" mt="5">
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
