import {
  Box,
  Button,
  Divider,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import PartnerCard from "./PartnerCard";

interface CategoryPartnersProps {
  category: string;
  partners: any[];
}

export default function CategoryPartners(props: CategoryPartnersProps) {
  const { category, partners } = props;
  return (
    <Box
      // style={{
      //   background: "rgba(255, 255, 255, 0.2)",
      //   borderRadius: "16px",
      //   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
      //   backdropFilter: "blur(5px)",
      //   border: "1px solid rgba(255, 255, 255, 0.3)",
      // }}
      border="1px solid rgba(0,0,0,0.08)"
      px="5"
      pb="3"
      pt="5"
      roundedTop="2xl"
      borderBottomWidth="0px"
    >
      <Box
        mb="5"
        // variant="primary-purple"
        // size="sm"
        fontSize="14px"
        px="4"
        py="2"
        pointerEvents="none"
        as="button"
        className="btn-grad"
        margin={{ base: "0px auto 20px auto", md: "0px 0px 20px 0px" }}
      >
        {category}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap="4"
      >
        {partners.map((p) => (
          // <VStack
          //   _hover={{
          //     transform: "translateY(-7px)",
          //     transition: "all .3s",
          //   }}
          //   transition="all .3s"
          //   key={p.id}
          //   as={"a"}
          //   href={p.twitterUrl}
          //   target="_blank"
          // >
          //   <Box
          //     minH="57px"
          //     bgColor={p.name === "Volu Mint" ? "#000" : "transparent"}
          //     display="grid"
          //     placeContent="center"
          //     rounded="full"
          //     width={p.name === "Volu Mint" ? "60px" : "auto"}
          //     height={p.name === "Volu Mint" ? "60px" : "auto"}
          //   >
          //     <Image
          //       src={p.imageSrc}
          //       alt={p.name + " logo"}
          //       width={p.logoWidth ? p.logoWidth : 50}
          //       height={p.logoHeight ? p.logoHeight : 50}
          //       style={p.style}
          //     />
          //   </Box>
          //   <Text fontSize="14px" textAlign="center" fontWeight={600}>
          //     {p.name}
          //   </Text>
          //   <Text maxW="300px">{p.description}</Text>
          // </VStack>
          <Box key={p.id} maxW="380px">
            <PartnerCard
              description={p.description}
              logoUrl={p.imageSrc}
              name={p.name}
              twitterUrl={p.twitterUrl}
              websiteUrl={p.websiteUrl}
              style={p.style}
            />
          </Box>
        ))}
      </Box>
      {/* <Divider mt="10" mx="auto" borderColor="rgba(0,0,0,.4)" /> */}
    </Box>
  );
}
