"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Flex } from "@chakra-ui/react";

export default function LoadingAnimation() {
  const [key, setKey] = useState(0);

  // Reset the animation every 3 seconds (animation + pause)
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      h={{ md: "7", lg: "5" }}
      w="full"
    >
      <Flex gap="2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={`${key}-${index}`}
            className="loadingfee"
            initial={{ y: 0 }}
            animate={{
              y: [0, -16, 0],
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeatDelay: 1,
              repeat: 0,
            }}
          />
        ))}
      </Flex>
    </Flex>
  );
}
