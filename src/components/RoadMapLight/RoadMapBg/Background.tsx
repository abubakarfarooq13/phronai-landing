"use client";

import { Box, VStack, Text, Image, HStack } from "@chakra-ui/react";

const Background = () => {
  return (
    <Box
      position="absolute"
      top={"0px"}
      width="full"
      height="full"
      style={{ zIndex: "-10" }}
      bgGradient={[
        // "linear(to-tr, teal.300, yellow.400)",
        // "linear(to-t, blue.200, teal.500)",
        "linear(to-b, #ebeff5, #fafafa)",
      ]}
      // bg={"#ebeff5"}
      // bgImage={"/assets/roadmaplight/background.png"}
      // bgRepeat={"none"}
      // bgSize={"cover"}
      // bgPosition={"center"}
      // overflow={"hidden"}
    >
      <Box position={"relative"} width={"full"}>
        <Box width={"full"}>
          <Box>
            <Image
              position={"relative"}
              src="/assets/roadmaplight/Vrstva590.png"
              alt="bg"
              top={"140px"}
            />
            <Box
              position={"absolute"}
              style={{
                top: "10px",
                width: "100%",
                // left: "15%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image
                position={"relative"}
                top={{ base: "150px", md: "50px", lg: "-20px" }}
                ml={{ md: "250px" }}
                left={{ lg: "11%" }}
                width={{ base: "350px", md: "650px", lg: "950px" }}
                style={{
                  // top: "-20px",
                  // width: "850px",
                  // right: "15%",
                  zIndex: "1",
                }}
                src="/assets/roadmaplight/roadmap.png"
                alt=".."
              />
            </Box>
            <Box display={"flex"}>
              <Image
                src="/assets/roadmaplight/Vrstva3315.png"
                alt="bg"
                width={"100%"}
                position="absolute"
                style={{ top: "-600px", left: "0", opacity: "0.5" }}
              />
              <Image
                src="/assets/roadmaplight/Vrstva3315.png"
                alt="bg"
                width={"50%"}
                position="relative"
                style={{ top: "400px", left: "0" }}
              />
              <Image
                src="/assets/roadmaplight/Vrstva3315right.png"
                alt="bg"
                display={"flex"}
                justifyContent={"end"}
                width={"50%"}
                position="relative"
                // top={{ lg: "-00px" }}
                style={{
                  right: "0",
                  opacity: "0.7",
                  top: "400px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Background;
