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

export default function FooterLighter() {
  const router = useRouter();
  return (
    <Box overflow="hidden">
      <Box
        as="footer"
        // bgImage="/assets/footer-bg.png"
        // bgSize="cover"
        // bgPos="top"
        maxW="1240px"
        position="relative"
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
        pb="5"
      >
        <Stack direction="row" justifyContent="flex-end" mt="10">
          {socialIcons.map((social) => (
            <GridItem key={social.id}>
              <Text
                py="2"
                px="3"
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
                  bgColor: "#d8e5fd",
                }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgColor={"#e8effc"}
              >
                <Text as="span" fontSize="24px" color="#000">
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
            </GridItem>
          ))}
        </Stack>
        {/* {router.pathname === "/" ? <TrustedBySection /> : null} */}
        <Container
          maxW="1240px"
          px={{ base: "4", xl: "4" }}
          zIndex="99"
          position="relative"
          pt="10"
        >
          <Grid
            gridTemplateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            }}
            pb="10"
            display={{ base: "grid", lg: "none" }}
            gap="5"
            rowGap="16"
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
            spacing="32"
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
              px="8"
              // fontFamily="inherit"
              // as="a"
              className="btn-grad"
              href="mailto:support@phron.ai"
              w={{ base: "fit-content", xl: "full" }}
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
            justifyContent="space-between"
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
        </Container>
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
