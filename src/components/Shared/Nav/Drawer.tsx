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
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../Logo";
import { navItems } from ".";

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
        <DrawerContent bgColor="#03020b">
          <DrawerCloseButton
            _focus={{
              boxShadow: "none",
            }}
          />
          <DrawerHeader p="5">
            <Logo />
          </DrawerHeader>

          <DrawerBody>
            <VStack w="full" align="start" spacing="5">
              {navItems.map((item) => (
                <Text
                  as={Link}
                  key={item.id}
                  href={item.href}
                  _hover={{
                    color: router.pathname === item.href ? "#fff" : "#6317fe",
                  }}
                  color={router.pathname === item.href ? "#6317fe" : ""}
                >
                  {item.label}
                </Text>
              ))}
              <VStack w="full" mt="30px" spacing="5">
                <Button
                  as={Link}
                  href="/phron"
                  variant="primary-purple"
                  borderRadius="full"
                  px="8"
                  py="5"
                  w="full"
                >
                  PHRON
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
                >
                  Whitepaper
                </Button>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
