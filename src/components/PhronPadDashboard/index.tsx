import React from "react";
import { Box, Container, Stack, Button } from "@chakra-ui/react";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function PhronPadDashboard() {
  return (
    <Box pt="300px" pb="300px" pos="relative">
      <Container maxW="1160px">
        <Fade bottom>
          <Box pos="relative">
            <Box
              pos="absolute"
              w="full"
              h={{ base: "200px", md: "500px" }}
              boxShadow="0 0 100px 20px #382253"
              // bgColor="#382253"
              rounded="3xl"
            />
            <Box mt={{ "2340px": "300px" }}>
              <Image
                src="/assets/phrone-pad/gamepad-dashboard.png"
                width={1160}
                height={1000}
                alt="gamepad-dashboard"
                style={{
                  zIndex: 1,
                  position: "relative",
                }}
              />
            </Box>
          </Box>
        </Fade>

        {/* <Stack
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="center"
          mt={{ base: "0px", md: "-200px" }}
          zIndex="1"
          pos="relative"
        >
          <Fade bottom>
            <Button variant="primary" px="10" py="5" rounded="full">
              Contact Us
            </Button>
          </Fade>
          <Fade bottom>
            <Button variant="primary-outline" px="10" py="5" rounded="full">
              Contact Us
            </Button>
          </Fade>
        </Stack> */}
      </Container>
    </Box>
  );
}
