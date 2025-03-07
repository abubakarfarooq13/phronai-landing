import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Button,
  Stack,
  HStack,
  Container,
  useDisclosure,
  Link as CLink,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "../..";
import { Link } from "@chakra-ui/next-js";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileDrawer from "./LightDrawer";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import PhronZeroLogo from "../PhronZeroLogo";
import Image from "next/image";
import ConnectWalletButton from "../ConnectWalletButton";
import { MdOutlineClose } from "react-icons/md";
import {
  newsItems,
  layerZeroAndLayerOneMenuItems,
  buildMenuItems,
  networkMenuItems,
  communityMenuItems,
  papersMenuItems,
  navItems,
} from "@/constant/nav";
import OpenPhronLogo from "../OpenPhronLogo";
import GradientText from "@/utils/GradientText";
import { BsArrowRight } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

const AlertBanner = React.forwardRef((props, ref: any) => {
  const [show, setShow] = useState(true);

  if (!show) {
    return false;
  }

  return (
    <Box
      // bgImage={{
      //   base: "/assets/chain/alert-banner-image-mobile.png",
      //   md: "/assets/chain/alert-banner-image.png",
      // }}
      bgImage="linear-gradient(90deg, #5756f4 0%, #c34bfb 100%)"
      bgPos={{ base: "right", md: "top" }}
      bgSize="cover"
      transform="translateY(0px)"
      display="block"
      bgRepeat="no-repeat"
      w="full"
      ref={ref}
      transition="all .3s"
    >
      <Stack
        direction={{ base: "column", sm: "row" }}
        alignItems={{ base: "flex-start", md: "center" }}
        justifyContent="center"
        maxW="1360px"
        mx="auto"
        px={{ base: "4", md: "2" }}
        pb="4"
        spacing="0"
        position="relative"
        pt={{ base: "2", md: "4" }}
      >
        <HStack
          alignItems="center"
          justifyContent="center"
          w={{ base: "full", md: "fit-content" }}
          spacing={{ base: "2", sm: "5" }}
        >
          {/* <Box>
            <Image
              src="/assets/chain/balloon-icon.png"
              alt="ballon icon"
              width={25}
              height={25}
            />
          </Box> */}
          <Stack
            direction={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "center" }}
            spacing="2"
          >
            <Text
              fontWeight={500}
              textAlign="center"
              fontSize={{ base: "sm", md: "16px" }}
              color="#fff"
            >
              Whitelist for the Node Sale is now open!
            </Text>
            <GradientText>
              <Box display="flex" alignItems="center" gap="2px" pr="5px">
                <Text
                  bg="transparent"
                  px="2px"
                  size="xs"
                  fontWeight={500}
                  as={Link}
                  href="https://nodes.phron.ai "
                  target="_blank"
                >
                  Register now
                </Text>
                <FiArrowRight color="#40ffaa" />
              </Box>
            </GradientText>

            {/* <Button
              as={Link}
              href="https://t.me/phron_bot"
              target="_blank"
              size="xs"
            >
              Play Now
            </Button> */}
          </Stack>
          {/* <Box display={{ base: "none", sm: "block" }}>
            <Image
              src="/assets/chain/balloon-icon.png"
              alt="ballon icon"
              width={25}
              height={25}
            />
          </Box> */}
        </HStack>

        <HStack
          spacing="4"
          w={{ base: "full", sm: "fit-content" }}
          justifyContent="center"
        >
          {/* <Button
            variant="primary"
            as="a"
            href="https://voyage.phron.ai/"
            target="_blank"
            rounded="full"
            size={{ base: "xs", md: "sm" }}
            px="4"
          >
            Get Started
          </Button> */}
          {/* <Text
            cursor="pointer"
            onClick={() => {
              setShow(false);
            }}
            display={{ base: "none", sm: "block" }}
          >
            <MdOutlineClose />
          </Text> */}
        </HStack>
        {/* <IconButton
          cursor="pointer"
          onClick={() => {
            setShow(false);
          }}
          position="absolute"
          top="10px"
          right="15px"
          display={{ base: "flex", sm: "none" }}
          size="xs"
          icon={<MdOutlineClose fontSize="16px" />}
          aria-label="close button"
        /> */}
      </Stack>
    </Box>
  );
});

AlertBanner.displayName = "AlertBanner";

export function SubMenu(props: any) {
  const router = useRouter();

  return (
    <>
      <Box
        bgColor="#fff"
        position="absolute"
        maxW="fit-content"
        w="full"
        roundedBottom="2xl"
        boxShadow="xl"
        p="5"
        {...props}
      >
        <Container maxW="1400px" px="0">
          <Stack direction="row" spacing="10">
            {/* <Box
              bgImage="linear-gradient(180deg, rgba(41,24,93,1) 41%, rgba(13,7,29,1) 77%)"
              rounded="2xl"
              // px="10"
              // py="5"
              h="fit-content"
              w={props.label === "Papers" ? "200px" : "250px"}
              display="grid"
              placeContent="center"
              pt="5"
            >
              <Image
                src={props.imageUrl}
                alt="menu image"
                width={props.label === "Papers" ? 80 : 160}
                height={160}
              />
            </Box> */}
            <VStack w="full" spacing="10px">
              {props.menu.map((item: any) => (
                <HStack
                  key={item.id}
                  w="full"
                  py="2"
                  px="5"
                  rounded="lg"
                  spacing="4"
                  _hover={{
                    bgColor: "#e8effc",
                    // px: "20px",
                    // py: "10px",
                  }}
                  as={Link}
                  href={item.href}
                  target={item.target}
                  bgColor={router.pathname === item.href ? "#e8effc" : "none"}
                >
                  {typeof item.icon === "string" ? (
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={20}
                      height={20}
                      style={
                        item.noStyle
                          ? {}
                          : {
                              filter: "invert(1)",
                            }
                      }
                    />
                  ) : (
                    item.icon
                  )}
                  <Text
                    w="full"
                    _active={{
                      boxShadow: "none",
                    }}
                    _focus={{
                      boxShadow: "none",
                    }}
                    // bgColor={router.pathname === item.href ? "#0e0023" : "none"}
                    color="#000"
                    fontSize={{ base: "17px", "3000px": "lg" }}
                    fontWeight={500}
                  >
                    {item.label}{" "}
                    <Text as="span" fontSize="xs" fontWeight={300}>
                      {item.isComingSoon ? "(coming soon)" : null}
                    </Text>
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

export default function Nav() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const {
    onOpen: onMenuOpen,
    isOpen: isMenuOpen,
    onClose: onMenuClose,
  } = useDisclosure();

  const navRef = useRef<HTMLDivElement>(null);
  const alertBannerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLParagraphElement>(null);
  const connectButtonRef = useRef<HTMLDivElement>(null);

  const [currentMenu, setCurrentMenu] = useState("Phron AI Foundation");

  const router = useRouter();

  useEffect(() => {
    if (newsItems.find((item) => item.href === router.pathname)) {
      setCurrentMenu("News / Updates");
    }

    if (navItems.find((item) => item.href === router.pathname)) {
      setCurrentMenu("Phron AI Foundation");
    }

    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 0 && navRef.current) {
        navRef.current.style.backgroundColor = "#fff";
      }
      if (currentScroll <= 0 && navRef.current) {
        navRef.current.style.backgroundColor = "#fff";
      }

      if (currentScroll > 10 && logoRef.current) {
        logoRef.current.style.maxWidth =
          router.pathname === "/phronzero" ? "180px" : "166px";
      }

      if (currentScroll <= 0 && logoRef.current) {
        logoRef.current.style.maxWidth =
          router.pathname === "/phronzero" ? "280px" : "170px";
      }

      if (currentScroll > 10 && labelsRef.current) {
        labelsRef.current.style.fontSize = "17px";
      }

      if (currentScroll <= 0 && labelsRef.current) {
        labelsRef.current.style.fontSize = "19px";
      }

      if (currentScroll > 0 && connectButtonRef.current) {
        // connectButtonRef.current.style.height = "40px";
        connectButtonRef.current.style.maxWidth = "190px";
        connectButtonRef.current.style.fontSize = "16px";
      }

      if (currentScroll <= 0 && connectButtonRef.current) {
        // connectButtonRef.current.style.height = "50px";
        connectButtonRef.current.style.maxWidth = "240px";
        connectButtonRef.current.style.fontSize = "16px";
      }
    });
  }, []);

  console.log(labelsRef);

  return (
    <Box
      pos={{ base: "relative", sm: "fixed" }}
      top={0}
      left={0}
      zIndex={999}
      w="full"
      bgColor="#fff"
    >
      {/* <AlertBanner ref={alertBannerRef} /> */}
      <Box
        as="nav"
        ref={navRef}
        pt={{ base: "5", xl: "0" }}
        pb={{ base: "5", xl: "0" }}
        mx="auto"
        color="#000"
        w="full"
        transition="all 300ms ease-in-out"
        position="relative"
        // px="6"
        px="4"
        maxW="1240px"
      >
        <>
          <HStack justifyContent="space-between">
            <Box ref={logoRef} transition="all .3s">
              {router.pathname === "/phronzero" ? (
                <PhronZeroLogo />
              ) : router.pathname === "/openphron" ? (
                <OpenPhronLogo />
              ) : (
                <Logo />
              )}
            </Box>

            <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

            <HStack
              // spacing={{ base: "20px", "2xl": "20px" }}
              spacing="0px"
              // display={{ base: "none", "1350px": "flex" }}
              display={{ base: "none", xl: "flex" }}
              fontSize={{ base: "15px", "2xl": "19px" }}
              ml="0px"
              ref={labelsRef}
            >
              {navItems.map((item) => (
                <Box
                  key={item.id}
                  className={item.className}
                  _hover={{
                    // bgColor: "#0e0023",
                    color: "#c34bfb",
                    outline: "none",
                    boxShadow: "none",
                    // bgColor: "#6317fe",
                  }}
                  outline="none"
                  boxShadow="none"
                  px="3"
                  color={
                    item.items?.includes(router.pathname) ? "#9e5aff" : "#000"
                  }
                  cursor="pointer"
                  // fontSize="2xl"

                  fontSize="inherit"
                  transition="all .3s"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      h="full"
                      py="7"
                      _hover={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                      _active={{
                        boxShadow: "none",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                      fontWeight={500}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Text
                      h="full"
                      py="7"
                      _hover={{
                        outline: "none",
                        boxShadow: "none",
                      }}
                      _active={{
                        boxShadow: "none",
                      }}
                      _focus={{
                        boxShadow: "none",
                      }}
                      fontWeight={500}
                    >
                      {item.label}
                    </Text>
                  )}

                  <Box>
                    {/* <SubMenu
                      menu={layerZeroAndLayerOneMenuItems}
                      className="dropdown-1-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    /> */}
                    <SubMenu
                      menu={buildMenuItems}
                      imageUrl={item.imageUrl}
                      label={item.label}
                      className="dropdown-2-menu"
                    />
                    <SubMenu
                      menu={networkMenuItems}
                      className="dropdown-3-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                    <SubMenu
                      menu={communityMenuItems}
                      className="dropdown-4-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                    <SubMenu
                      menu={papersMenuItems}
                      className="dropdown-5-menu"
                      imageUrl={item.imageUrl}
                      label={item.label}
                    />
                  </Box>
                </Box>
              ))}
            </HStack>

            <HStack
              // display={{ base: "none", "1350px": "flex" }}
              display={{ base: "none", md: "flex" }}
              fontSize={{ base: "15px", "2xl": "16px" }}
              w="full"
              maxW="230px"
              justifyContent="flex-end"
            >
              <Box
                ref={connectButtonRef}
                as="a"
                href="https://openphron.ai"
                // maxW="200px"
                w="full"
                target="_blank"
                className="btn-grad"
                py="3"
              >
                {/* <ConnectWalletButton
                  height={"inherit"}
                  fontSize="inherit"
                  maxWidth={"inherit"}
                  gradientButton
                /> */}
                openPhron
              </Box>

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
                ml="5"
                display={{ md: "block", xl: "none" }}
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

              <Box
                // display={{ base: "flex", "1350px": "none" }}
                display={{ base: "flex", xl: "none" }}
                onClick={onOpen}
                ml="5"
              >
                <CgMenuRightAlt size="30px" />
              </Box>
            </HStack>

            <Box
              // display={{ base: "flex", "1350px": "none" }}
              display={{ base: "flex", md: "none" }}
              onClick={onOpen}
              ml="5"
            >
              <CgMenuRightAlt size="30px" />
            </Box>
          </HStack>
        </>
      </Box>
    </Box>
  );
}
