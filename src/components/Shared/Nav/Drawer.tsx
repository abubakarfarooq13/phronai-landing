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
                    Phronesis AI Foundation
                    <AccordionIcon />
                  </AccordionButton>
                </h2>

                <AccordionPanel px="0" py="10px">
                  <VStack w="full">
                    {navItems.map((item) => (
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
