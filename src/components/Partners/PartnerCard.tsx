import React from "react";
import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { CiMenuKebab } from "react-icons/ci";
// import {
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuItemOption,
//   MenuGroup,
//   MenuOptionGroup,
//   MenuDivider,
// } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";

interface PartnerCardProps {
  name: string;
  description: string;
  logoUrl: string;
  websiteUrl?: string;
  twitterUrl: string;
  logoWidth?: number;
  logoHeight?: number;
}

export default function PartnerCard(props: PartnerCardProps) {
  const {
    description,
    logoUrl,
    name,
    twitterUrl,
    websiteUrl,
    logoHeight,
    logoWidth,
  } = props;
  //   bgColor="#0c011f"
  return (
    <Box
      bgImage="/assets/team/background.png"
      rounded="xl"
      px="6"
      pb="6"
      h="full"
      bgSize="cover"
      bgPos="center"
    >
      <HStack spacing="4" minH="80px" alignItems="center">
        <Image
          src={logoUrl}
          alt={name + " logo"}
          width={logoWidth ? logoWidth : 40}
          height={logoHeight ? logoHeight : 40}
        />
        <Text fontSize="lg" fontWeight={500} flexGrow={1}>
          {name}
        </Text>

        <Popover placement="top" trigger="hover">
          <PopoverTrigger>
            <Button variant="link" color="#fff">
              <CiMenuKebab />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            border="none"
            bgColor="#000001"
            maxW="120px"
            rounded="xl"
            py="2"
            boxShadow="xl"
          >
            {/* <PopoverArrow /> */}

            <PopoverBody>
              <VStack align="start">
                {websiteUrl ? (
                  <HStack
                    as="a"
                    href={websiteUrl}
                    _hover={{
                      color: "rgba(255,255,255,0.8)",
                    }}
                    target="_blank"
                    spacing="0"
                  >
                    <GoArrowUpRight />
                    <Text fontSize="sm" ml="2">
                      Website
                    </Text>
                  </HStack>
                ) : null}
                <HStack
                  as="a"
                  href="#"
                  _hover={{
                    color: "rgba(255,255,255,0.8)",
                  }}
                  target="_blank"
                  spacing="2px"
                >
                  <FaXTwitter fontSize="14px" />
                  <Text fontSize="sm" ml="2">
                    Twitter
                  </Text>
                </HStack>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>

      <Text fontSize="sm" color="rgba(255,255,255,0.9)">
        {description}
      </Text>
    </Box>
  );
}
