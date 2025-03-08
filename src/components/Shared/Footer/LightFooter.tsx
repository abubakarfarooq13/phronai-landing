import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  VStack,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import TrustedBySection from "@/components/NewHome/TrustedBySection";
import { footerMenu, socialIcons } from ".";
import Logo from "../Logo";
import DarkLogo from "../Logo/DarkLogo";
import Image from "next/image";

export default function FooterLighter() {
  const router = useRouter();
  return (
    <Box bgImage="/assets/footer-bg.png" bgSize="cover" bgPos="center">
      <Box
        as="footer"
        maxW="1240px"
        mx="auto"
        // _after={{
        //   content: `''`,
        //   position: "absolute",
        //   right: { base: "-100px", "2340px": "-230px" },
        //   width: { base: "200px", "2340px": "400px" },
        //   height: "100%",
        //   background: "#000",
        //   top: router.pathname === "/" ? "0px" : "-100px",
        //   filter: { base: "blur(70px)", "2340px": "blur(100px)" },
        //   visibility: { base: "hidden", xl: "visible" },
        // }}
        position="relative"
        pb="5"
      >
        <Box
          position="absolute"
          top="-80px"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src="/assets/footer-coin.png"
            alt="footer coin"
            width={220}
            height={220}
          />
        </Box>
        <Box
          position="absolute"
          left="180px"
          top="30%"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src="/assets/footer-coin-left.png"
            alt="footer coin"
            width={80}
            height={80}
          />
        </Box>
        <Box
          position="absolute"
          right="10%"
          top="25%"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src="/assets/footer-coin-right.png"
            alt="footer coin"
            width={100}
            height={100}
          />
        </Box>
        <Box
          position="absolute"
          right="0px"
          bottom="70px"
          display={{ base: "none", lg: "block" }}
        >
          <Image
            src="/assets/footer-coin-large-right.png"
            alt="footer coin"
            width={250}
            height={250}
          />
        </Box>
        <Stack
          direction="row"
          justifyContent="center"
          pt={{ base: "20", lg: "44" }}
          px="4"
          flexWrap="wrap"
          mb="10"
        >
          {socialIcons.map((social) => (
            <Box key={social.id}>
              <Text
                py={{ base: "2", md: "3", lg: "4" }}
                px={{ base: "3", md: "4", lg: "6" }}
                rounded="lg"
                as={Link}
                w="full"
                href={social.href}
                target="_blank"
                transition="all .3s"
                _hover={{
                  transition: "all .3s",
                  // color: "rgba(105,46,164,1)",
                  // bgColor: social.hoverGbColor,
                  bgColor: "#fff4fb",
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgColor={"#faf7f9"}
              >
                <Text
                  as="span"
                  fontSize={{ base: "22px", md: "34px", lg: "44px" }}
                  color="#000"
                >
                  <social.icon />
                </Text>
                {/* <Text
                  as="span"
                  ml="2"
                  fontSize={{ base: "sm", "2340px": "lg" }}
                  fontWeight={500}
                  color="#fff"
                >
                  {social.label}
                </Text> */}
              </Text>
            </Box>
          ))}
        </Stack>
        {/* {router.pathname === "/" ? <TrustedBySection /> : null} */}
        <Box
          maxW="940px"
          px={{ base: "4", xl: "4" }}
          zIndex="99"
          position="relative"
        >
          <Grid
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            pb="10"
            display={{ base: "grid", lg: "none" }}
            gap="5"
            rowGap={{ base: "25px", md: "16" }}
          >
            {footerMenu.map((menu) => (
              <GridItem key={menu.id}>
                <VStack spacing="4" fontSize="sm" align="center">
                  <Text fontWeight={500}>{menu.title}</Text>
                  {menu.menu.map((item) => (
                    <Text
                      as={Link}
                      _hover={{
                        color: "#fff",
                      }}
                      color="#909090"
                      key={item.id}
                      href={item.href}
                    >
                      {item.label}
                    </Text>
                  ))}
                </VStack>
              </GridItem>
            ))}
          </Grid>
          <Stack
            pb={{ base: "10", lg: "32" }}
            direction={{ base: "column", md: "row" }}
            w="full"
            justifyContent={{ base: "center" }}
            alignItems={{ base: "center", md: "flex-start" }}
            // flexWrap="wrap"
            spacing="0"
            pt={{ lg: "10" }}
          >
            {footerMenu.map((menu) => (
              <VStack
                spacing="4"
                fontSize={{ base: "sm", "2340px": "xl" }}
                display={{ base: "none", lg: "flex" }}
                align="start"
                key={menu.id}
                w="full"
                // minW="200px"
              >
                <Text fontWeight={500}>{menu.title}</Text>
                {menu.menu.map((item) => (
                  <Text
                    as={Link}
                    _hover={{
                      color: "#000",
                    }}
                    color="#909090"
                    key={item.id}
                    href={item.href}
                  >
                    {item.label}
                  </Text>
                ))}
              </VStack>
            ))}

            <Text
              as="a"
              // variant="primary-purple"
              rounded="full"
              px={{ base: "8", lg: "12" }}
              // fontFamily="inherit"
              // as="a"
              className="btn-grad"
              href="mailto:support@phron.ai"
              w="fit-content"
              mr={{ lg: "20" }}
              // maxW="140px"
            >
              Support
            </Text>
            {/* <Box>
            <Text color="#c1c1c1" display={{ base: "flex", md: "none" }}>
              &copy; {new Date().getFullYear()} Phron AI
            </Text>
            <Text color="#c1c1c1" fontSize={{ base: "base", "3000px": "xl" }}>
              All rights reserved.
            </Text>
          </Box> */}
          </Stack>

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent={{ base: "center", md: "space-between" }}
            alignItems="center"
          >
            <DarkLogo />
            <Text
              color="#909090"
              textAlign="center"
              fontSize={{ base: "sm", "2340px": "lg" }}
            >
              {new Date().getFullYear()} &copy; PhronAI All rights reserved
            </Text>
          </Stack>
        </Box>
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(6, 1fr)",
        }}
      >
        {/* {socialIcons.map((social) => (
          <GridItem key={social.id}>
            <Text
              py="3"
              px="5"
              as={Link}
              w="full"
              href={social.href}
              target="_blank"
              transition="all .3s"
              _hover={{
                transition: "all .3s",
                // color: "rgba(105,46,164,1)",
                bgColor: social.hoverGbColor,
              }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgColor={social.bgColor}
            >
              <Text
                as="span"
                fontSize={{ base: "lg", "2340px": "xl" }}
                color="#fff"
              >
                <social.icon />
              </Text>
              <Text
                as="span"
                ml="2"
                fontSize={{ base: "sm", "2340px": "lg" }}
                fontWeight={500}
                color="#fff"
              >
                {social.label}
              </Text>
            </Text>
          </GridItem>
        ))} */}
      </Grid>
    </Box>
  );
}
