"use client";

import {
  Box,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionText = motion(Text);

export default function TransactionFees() {
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("purple.800", "purple.200");
  const headingColor = useColorModeValue("purple.700", "purple.300");
  const feeColor = useColorModeValue("purple.600", "purple.300");

  return (
    <Box
      bg={cardBg}
      borderRadius="xl"
      boxShadow="lg"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Heading size="sm" color={headingColor} mb={4}>
        Transaction Fees
      </Heading>

      <VStack spacing={1} align="center" justify="center" flex="1">
        <MotionText
          fontSize="3xl"
          fontWeight="bold"
          color={feeColor}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          $0.00036
        </MotionText>
      </VStack>

      <Text fontSize="xs" mt={4} color={textColor} textAlign="center">
        Time to Finality (Seconds)
      </Text>
    </Box>
  );
}
