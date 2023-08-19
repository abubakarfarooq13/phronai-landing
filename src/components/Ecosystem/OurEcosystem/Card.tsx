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
  } = props;
  return (
    <VStack
      backgroundImage="linear-gradient(148deg, rgba(41,20,82,1) 0%, rgba(0,0,0,1) 94%);"
      rounded="27px"
      border="3px solid #261250"
      px="5"
      pb="10"
      textAlign="center"
      className="infinit-move-hover"
      h="full"
      minH="310px"
    >
      <Box mt="-80px" className={`infinit-move-${index}`}>
        <Image src={imgSrc} alt="chain" width={imgWidth} height={imgHeight} />
      </Box>
      <Text as="h3" fontSize="2xl" fontWeight={500}>
        {title}
      </Text>
      <Text color="#c1c1c1" mb="3">
        {description}
      </Text>
      {/* <Button
        as={Link}
        variant="primary-outline"
        rounded="full"
        fontWeight={400}
        px="8"
        py="5"
        href={buttonHref}
      >
        {buttonText}
      </Button> */}
    </VStack>
  );
}
