'use client'

import { Box, keyframes } from "@chakra-ui/react"

const moveAlongPath = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33.33% { transform: translate(0, 80px) rotate(0deg); }
  33.34% { transform: translate(0, 80px) rotate(77deg); }
  66.66% { transform: translate(-86px, 100px) rotate(77deg); }
  66.67% { transform: translate(-86px, 100px) rotate(0deg); }
  100% { transform: translate(-86px, 180px) rotate(0deg); }
`

export default function SharpZigzagAnimation() {
  return (
    <Box position="relative" w="90px" h="180px" overflow="hidden">
      {/* Zigzag Path */}
      <Box position="absolute" top="0" right="0" w="4px" h="80px" bg="gray.200" />
      <Box 
        position="absolute" 
        top="78px" 
        right="-2px" 
        w="92px" 
        h="4px" 
        bg="gray.200" 
        transform="rotate(347deg)"
        transformOrigin="top right"
      />
      <Box position="absolute" top="99px" left="0" w="4px" h="82px" bg="gray.200" />

      {/* Moving Gradient Line */}
      <Box
        position="absolute"
        top="-10px"
        right="0px"
        w="4px"
        h="20px"
        bgGradient="linear(to-b, red.100, red.400)"
        rounded="full"
        animation={`${moveAlongPath} 3s linear infinite`}
      />
    </Box>
  )
}