import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const whitepapers = [
  {
    id: 1,
    label: "Whitepapers Pure",
    href: "#",
    bgSrc: "/assets/light-theme-home/whitepapers/whitepaper-pure-bg.png",
  },
  {
    id: 2,
    label: "Whitepapers Royal",
    href: "#",
    bgSrc: "/assets/light-theme-home/whitepapers/whitepaper-royal-bg.png",
  },
  {
    id: 3,
    label: "Tokenomics",
    href: "#",
    bgSrc: "/assets/light-theme-home/whitepapers/tokenomics-bg.png",
  },
];

export default function WhitePapers() {
  return (
    <Box>
      <Container maxW="1240px" pb="100px">
        <VStack mb="2">
          <Image
            src="/assets/light-theme-home/phron-ai-text.png"
            alt="phron ai text"
            width={150}
            height={100}
          />
        </VStack>

        <Text textAlign="center">Download our whitepapers</Text>

        <Wrap justify="center" mt="10">
          {whitepapers.map((whitepaper) => (
            <WrapItem key={whitepaper.id} w="full" maxW="300px">
              <HStack
                bgImage={whitepaper.bgSrc}
                bgSize="100% 100%"
                minH="80px"
                px="6"
                w="full"
                as="a"
                href={whitepaper.href}
                target="_blank"
                className="arrow-btn"
              >
                <Text fontSize="17px">{whitepaper.label}</Text>
                <IoArrowForwardCircleOutline fontSize="22px" />
              </HStack>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
}
