import React from "react";
import { Box, Text, VStack, Image as CImage } from "@chakra-ui/react";

export default function RoadMapCard(props: any) {
  const {
    children,
    title,
    maxH,
    Height,
    minH,
    bgImageUrl,
    noBottomMargin,
    ...otherProps
  } = props;

  return (
    <VStack
      // bgImage="/assets/roadmap/1.png"
      bgImage={bgImageUrl}
      //   maxW={{ base: "full", md: "300px", lg: "400px" }}
      width={"350px"}
      bgSize="100% 100%"
      bgPos="center"
      rounded="lg"
      //   minH={minH}
      //   maxH={maxH}
      //   height={Height}
      height={"fit-content"}
      py="10"
      pl={{ base: "5", lg: "10" }}
      pr="3"
      pb={"200px"}
      spacing="6"
      align="start"
      pos="relative"
      //   mb={{ base: noBottomMargin ? "50px" : "105px", md: "0px" }}
      {...otherProps}
    >
      {/* <CImage
        src="/assets/roadmap/point.png"
        alt="point"
        w="50px"
        display={{ base: "block", md: "none" }}
        pos="absolute"
        left="50%"
        transform="translateX(-50%)"
        top="-20px"
      /> */}
      {/* <Text
        backgroundImage="linear-gradient( -64deg, rgb(27,13,55) 0%, rgb(3,2,11) 59%, rgb(34,24,49) 100%)"
        py="2"
        px="7"
        display="inline-block"
        rounded="full"
        fontSize={title.includes("/") ? "lg" : "3xl"}
        fontWeight={500}
      >
        {title}
      </Text> */}

      {children}

      {/* <CImage
        src="/assets/roadmap/_arrow-small.png"
        alt="_arrow-small"
        w="50px"
        display={{ base: "block", md: "none" }}
        pos="absolute"
        left="50%"
        transform="translateX(-50%)"
        bottom="-85px"
      /> */}
    </VStack>
  );
}
