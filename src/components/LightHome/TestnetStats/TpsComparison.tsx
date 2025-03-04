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

const tpsData = [
  { name: "Phron.ai", tps: 50000, color: "#6366F1" },
  { name: "Kyte AI", tps: 30000, color: "#8B5CF6" },
  { name: "Solana", tps: 65000, color: "#EC4899" },
  { name: "Polygon", tps: 7000, color: "#8B5CF6" },
  { name: "Avalanche", tps: 4500, color: "#F472B6" },
  { name: "Metis", tps: 2000, color: "#C4B5FD" },
];

export default function TpsComparison() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("purple.800", "purple.200");
  const headingColor = useColorModeValue("purple.700", "purple.300");

  // Sort by TPS (highest to lowest)
  const sortedData = [...tpsData].sort((a, b) => b.tps - a.tps);
  const maxTps = Math.max(...sortedData.map((item) => item.tps));

  return (
    <Box bg={cardBg} borderRadius="xl" boxShadow="lg" p={6}>
      <VStack align="stretch" spacing={4}>
        <Heading size="md" color={headingColor}>
          TPS Comparison
        </Heading>
        <Text fontSize="xs" textAlign="right" color="gray.500">
          (Highest to Lowest)
        </Text>

        <VStack align="stretch" spacing={3} mt={2}>
          {sortedData.map((item, index) => (
            <HStack key={item.name} spacing={3}>
              <Text fontSize="sm" width="80px" color={textColor}>
                {item.name}
              </Text>
              <Box position="relative" h="24px" flex="1">
                <MotionBox
                  h="full"
                  bg={item.color}
                  borderRadius="full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.tps / maxTps) * 100}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </Box>
              <Text
                fontSize="sm"
                width="60px"
                textAlign="right"
                color={textColor}
              >
                {item.tps.toLocaleString()}
              </Text>
            </HStack>
          ))}
        </VStack>

        <Text fontSize="sm" mt={2} color={textColor}>
          Transaction Per Second (Theoretical)
        </Text>
      </VStack>
    </Box>
  );
}
