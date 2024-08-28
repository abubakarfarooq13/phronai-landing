import { Box, Stack, Tag, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface CategoryPartnersProps {
  category: string;
  partners: any[];
}

export default function CategoryPartners(props: CategoryPartnersProps) {
  const { category, partners } = props;
  return (
    <Box
      style={{
        background: "rgba(255, 255, 255, 0.8)",
        borderRadius: "16px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
      }}
      px="10"
      py="5"
      rounded="2xl"
      width={{ base: "full", sm: "fit-content" }}
    >
      <Tag
        letterSpacing="1px"
        fontWeight={600}
        textTransform="uppercase"
        fontSize="12px"
        mb="5"
      >
        {category}
      </Tag>
      <Box
        display={{ base: "grid", md: "flex" }}
        gridTemplateColumns={
          partners.length > 1 ? "repeat(2, 1fr)" : "repeat(1,1fr)"
        }
        gap={{ base: "5", md: "10" }}
        flexWrap="wrap"
        justifyContent={{ base: "center" }}
      >
        {partners.map((p) => (
          <VStack
            _hover={{
              transform: "translateY(-7px)",
              transition: "all .3s",
            }}
            transition="all .3s"
            key={p.id}
            as={"a"}
            href={p.twitterUrl}
            target="_blank"
          >
            <Box
              minH="57px"
              bgColor={p.name === "Volu Mint" ? "#000" : "transparent"}
              display="grid"
              placeContent="center"
              rounded="full"
              width={p.name === "Volu Mint" ? "60px" : "auto"}
              height={p.name === "Volu Mint" ? "60px" : "auto"}
            >
              <Image
                src={p.imageSrc}
                alt={p.name + " logo"}
                width={p.logoWidth ? p.logoWidth : 50}
                height={p.logoHeight ? p.logoHeight : 50}
                style={p.style}
              />
            </Box>
            <Text fontSize="14px" textAlign="center" fontWeight={600}>
              {p.name}
            </Text>
          </VStack>
        ))}
      </Box>
    </Box>
  );
}
