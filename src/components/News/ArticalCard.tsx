import React from "react";
import Image from "next/image";
import { Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

interface EcoSystemCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref: string;
}

export default function ArticalCard(props: EcoSystemCardProps) {
  const {
    imageUrl,
    title,
    description,
    buttonText = "View Artical",
    buttonHref,
  } = props;
  return (
    <VStack
      maxW={{ base: "full", md: "346px" }}
      w="full"
      backgroundImage="linear-gradient(148deg, rgba(41,20,82,1) 0%, rgba(0,0,0,1) 94%);"
      rounded="27px"
      border="3px solid #261250"
      p="20px"
      pb="25px"
      className="infinit-move-hover"
      h="full"
      spacing="6"
      align="start"
    >
      <Link href={buttonHref} style={{ width: "100%" }}>
        <Image
          src={imageUrl}
          width={394}
          height={253}
          alt="artical image"
          style={{
            borderRadius: "20px",
            width: "100%",
          }}
        />
      </Link>
      <Link href={buttonHref}>
        <Text fontSize="lg">{title}</Text>
      </Link>
      <Text color="#c1c1c1" fontSize="sm">
        {description}
      </Text>
      <Button
        as={Link}
        href={buttonHref}
        variant="primary-outline"
        size="sm"
        rounded="full"
        fontSize="sm"
        fontWeight={400}
        px="4"
      >
        {buttonText}
      </Button>
    </VStack>
  );
}
