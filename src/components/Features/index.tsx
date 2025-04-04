import React from "react";
import { Box, Container, Stack, Button } from "@chakra-ui/react";
import Card from "./Card";
import Image from "next/image";

const Fade = require("react-reveal/Fade");

export default function PhronPadDashboard() {
  return (
    <Box pos="relative" mt={{ base: "-50px", "3000px": "-100px" }} zIndex="10">
      <Container maxW="1160px">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ base: "32", md: "10" }}
          transform="translateY(-100px)"
        >
          <Fade left>
            <Card
              imgSrc="/assets/phrone-pad/audit-pad-with-pen.png"
              title="Smart contracts"
              description="The first gaming platform in the world with automated contract auditing."
              buttonHref="/"
              buttonText="Learn more"
              imgHeight={280}
              imgWidth={200}
              index={1}
            />
          </Fade>
          <Fade right>
            <Card
              imgSrc="/assets/phrone-pad/ring.png"
              title="ZERO commission"
              description="Deploy your games without any commission costs!"
              buttonHref="/"
              buttonText="Learn more"
              imgHeight={140}
              imgWidth={160}
              index={1}
              shadowPosition="right"
            />
          </Fade>
        </Stack>
      </Container>
    </Box>
  );
}
