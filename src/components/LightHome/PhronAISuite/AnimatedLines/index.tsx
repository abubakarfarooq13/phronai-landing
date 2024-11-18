import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

interface AnimatedLinesProps extends BoxProps {}

export default function AnimatedLines(props: AnimatedLinesProps) {
  return (
    <Box
      position="relative"
      w="4px"
      rounded="full"
      h="full"
      bgColor="gray.200"
      overflow="hidden"
      {...props}
    >
      <Box
        bgGradient="linear(to-b, #baa2e530, #baa2e5)"
        rounded="full"
        w="full"
        h="20%"
        position="absolute"
        top="-100%"
        animation="fill 3s linear infinite"
      />

      <style jsx global>{`
        @keyframes fill {
          0% {
            top: -100%;
          }
          100% {
            top: 100%;
          }
        }
      `}</style>
    </Box>
  );
}
