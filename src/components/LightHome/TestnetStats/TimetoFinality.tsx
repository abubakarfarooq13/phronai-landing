"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const finalityData = [
  { name: "Phron.ai", time: 0.8, color: "#6366F1" },
  { name: "Kyte AI", time: 6, color: "#8B5CF6" },
  { name: "Avalanche", time: 2, color: "#F472B6" },
  { name: "Polygon", time: 2, color: "#8B5CF6" },
  { name: "Solana", time: 1, color: "#EC4899" },
];

export default function TimeToFinalityChart() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("purple.800", "purple.200");
  const headingColor = useColorModeValue("purple.700", "purple.300");

  // Sort by time (lowest to highest)
  const sortedData = [...finalityData].sort((a, b) => a.time - b.time);

  return (
    <Box bg={cardBg} borderRadius="xl" boxShadow="lg" p={4}>
      <VStack align="stretch" spacing={2}>
        <Heading size="sm" color={headingColor}>
          Time to Finality
        </Heading>
        <Text fontSize="xs" color="gray.500">
          (Lowest to Highest)
        </Text>

        <HStack justify="space-between" mt={4} spacing={2}>
          {sortedData.map((item, index) => (
            <VStack key={item.name} spacing={1} flex="1">
              <Box
                h={`${item.time * 10}px`}
                minH="10px"
                w="full"
                position="relative"
              >
                <MotionBox
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  bg={item.color}
                  borderRadius="md"
                  initial={{ height: 0 }}
                  animate={{ height: `${item.time * 10}px` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </Box>
              <Text fontSize="xs" fontWeight="bold" color={textColor}>
                {item.time}
              </Text>
              <Text fontSize="2xs" color={textColor} textAlign="center">
                {item.name.split(" ")[0]}
              </Text>
            </VStack>
          ))}
        </HStack>

        <Text fontSize="xs" mt={2} color={textColor}>
          Time to Finality (Seconds)
        </Text>
      </VStack>
    </Box>
  );
}
