import React from "react";
import Image from "next/image";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

interface EcoSystemCardProps {
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imgWidth: number;
  imgHeight: number;
  index: number;
  shadowPosition?: string;
}

export default function EcoSystemCard(props: EcoSystemCardProps) {
  const {
    buttonHref,
    buttonText,
    description,
    imgSrc,
    title,
    imgHeight,
    imgWidth,
    index,
    shadowPosition = "left",
  } = props;
  return (
    <VStack
      backgroundImage="linear-gradient(148deg, #33186a 0%, rgba(0,0,0,1) 94%);"
      rounded="27px"
      border="1px solid #261250"
      px="10"
      pb="10"
      textAlign="center"
      justifyContent="space-between"
      className="infinit-move-hover"
      maxW="360px"
      w="full"
      spacing="5"
      h="350px"
    >
      <Box mt="-80px" pos="relative" className={`infinit-move-${index}`}>
        <Box
          w={{ base: "300px", sm: "350px" }}
          h={{ base: "300px", sm: "350px" }}
          background="radial-gradient(circle, rgba(83,24,156,0.5) 20%, rgba(0,0,0,0) 50%)"
          pos="absolute"
          zIndex={-1}
          rounded="full"
          top={{ base: "-80px", sm: "-120px" }}
          left={
            shadowPosition === "left" ? { base: "-80px", sm: "-120px" } : ""
          }
          right={
            shadowPosition === "right" ? { base: "-80px", sm: "-120px" } : ""
          }
        />
        <Image src={imgSrc} alt="chain" width={imgWidth} height={imgHeight} />
      </Box>
      <Text pt="5" color="#c1c1c1" mb="3" fontSize="lg">
        {description}
      </Text>
      <Text as="h3" fontSize="4xl" lineHeight="40px" fontWeight={500}>
        {title}
      </Text>
    </VStack>
  );
}
