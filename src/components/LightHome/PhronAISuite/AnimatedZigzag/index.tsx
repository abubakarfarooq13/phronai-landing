'use client'

import { Box, keyframes } from "@chakra-ui/react"

const moveAlongPath = (width: number, height: number) => keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  33.33% { transform: translate(0, ${height * 4/9}px) rotate(0deg); }
  33.34% { transform: translate(0, ${height * 4/9}px) rotate(78deg); }
  66.66% { transform: translate(-${width - 4}px, ${height * 5/9}px) rotate(78deg); }
  66.67% { transform: translate(-${width - 4}px, ${height * 5/9}px) rotate(0deg); }
  100% { transform: translate(-${width - 4}px, ${height}px) rotate(0deg); }
`

export default function SharpZigzagAnimation({ width = 60, height = 180 }: { width?: number; height?: number }) {
  const animationKeyframes = moveAlongPath(width, height)

  return (
    <Box position="relative" w={`${width}px`} h={`${height}px`} overflow="hidden">
      {/* Zigzag Path */}
      <Box position="absolute" top="0" right="0" w="4px" h={`${height * 4/9}px`} bg="gray.200" />
      <Box 
        position="absolute" 
        top={`${height * 4/9 - 2}px`} 
        right="-2px" 
        w={`${width}px`} 
        h="4px" 
        bg="gray.200" 
        transform={`rotate(${Math.atan2(height / 9, width - 4) * (-180 / Math.PI)}deg)`}
        transformOrigin="top right"
      />
      <Box position="absolute" top={`${height * 5/9 - 1}px`} left="0" w="4px" h={`${height * 4/9 + 2}px`} bg="gray.200" />

      {/* Moving Gradient Line */}
      <Box
        position="absolute"
        top="-8px"
        right="0px"
        w="4px"
        h="16px"
        bgGradient="linear(to-b, #baa2e530, #baa2e5)"
        rounded="full"
        animation={`${animationKeyframes} 3s linear infinite`}
      />
    </Box>
  )
}