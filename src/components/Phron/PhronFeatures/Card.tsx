import React from "react";
import Image from "next/image";
import { Box, Text, Button, VStack, Image as CImage } from "@chakra-ui/react";
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
  mt?: string;
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
    mt,
  } = props;
  return (
    <VStack
      backgroundImage="linear-gradient(148deg, rgba(41,20,82,1) 0%, rgba(0,0,0,1) 94%);"
      rounded="27px"
      border="3px solid #261250"
      px="5"
      pb="10"
      textAlign="center"
      // className="infinit-move-hover"
      h="full"
      minH="310px"
    >
      <Box h="160px" pos="relative" className={`infinit-move-${index}`}>
        <Image
          src={imgSrc}
          alt="chain"
          width={imgWidth}
          height={imgHeight}
          style={{
            marginTop: index === 1 ? "-80px" : "",
          }}
        />
        <Box />
        {index === 1 ? (
          <CImage
            display={{ base: "none", sm: "block" }}
            src="/assets/phron/cart-shadow.png"
            pos="absolute"
            top="-100px"
            left="-50px"
            zIndex={-1}
          />
        ) : index === 2 ? (
          <>
            <CImage
              display={{ base: "none", sm: "block" }}
              src="/assets/phron/cart-shadow.png"
              pos="absolute"
              top="-80px"
              left="-40px"
              zIndex={-1}
            />
            <CImage
              display={{ base: "none", sm: "block" }}
              src="/assets/phron/game-assets-shadow-bottom.png"
              pos="absolute"
              bottom="-20px"
              left="0px"
              zIndex={-1}
            />
          </>
        ) : (
          <>
            <CImage
              display={{ base: "none", sm: "block" }}
              src="/assets/phron/arm-shadow.png"
              pos="absolute"
              top="-20px"
              left="-60px"
              zIndex={-1}
            />
            <CImage
              display={{ base: "none", sm: "block" }}
              src="/assets/phron/arm-shadow.png"
              pos="absolute"
              top="-20px"
              right="-60px"
              zIndex={-1}
            />
          </>
        )}
      </Box>
      <Text as="h3" fontSize="2xl" fontWeight={500}>
        {title}
      </Text>
      <Text color="#c1c1c1" mb="6">
        {description}
      </Text>
      <Button
        as={Link}
        variant="primary-outline"
        rounded="full"
        fontWeight={400}
        px="8"
        py="5"
        href={buttonHref}
      >
        {buttonText}
      </Button>
    </VStack>
  );
}
