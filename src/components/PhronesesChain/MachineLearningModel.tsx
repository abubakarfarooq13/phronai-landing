import { Box, HStack, VStack, Text, Container, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const features = [
  {
    id: 1,
    label: "Latency",
    icon: "/assets/chain/features-images/latency.svg",
  },
  {
    id: 2,
    label: "Power Ratio",
    icon: "/assets/chain/features-images/power-ratio.svg",
  },
  {
    id: 3,
    label: "Throughput",
    icon: "/assets/chain/features-images/throughput.svg",
  },
  {
    id: 4,
    label: "Liveliness",
    icon: "/assets/chain/features-images/liveliness.svg",
  },
  {
    id: 5,
    label: "Stake Amount",
    icon: "/assets/chain/features-images/staked-amount.svg",
  },
  {
    id: 6,
    label: "Availability",
    icon: "/assets/chain/features-images/availability.svg",
  },
  {
    id: 7,
    label: "Validation Performance",
    icon: "/assets/chain/features-images/validate.svg",
  },
  {
    id: 8,
    label: "Incident Response",
    icon: "/assets/chain/features-images/incident-response.svg",
  },
  {
    id: 9,
    label: "Incident Response",
    icon: "/assets/chain/features-images/transaction-volume.svg",
  },
];

const nodes = [
  {
    id: 1,
    label: "Node 1",
  },
  {
    id: 2,
    label: "Node 2",
  },
  {
    id: 3,
    label: "Node 3",
  },
  {
    id: 4,
    label: "Node 4",
  },
];

const Fade = require("react-reveal/Fade");

export default function MachineLearningModel() {
  return (
    <Container className="sophia-section" maxW="1390px" mb="20">
      {/* <Image
        src="/assets/chain/machine-learning-graph.png"
        alt="machine-learning-graph"
        width={1390}
        height={1000}
      /> */}
      <Stack
        alignItems="center"
        direction={{ base: "column", lg: "row" }}
        justifyContent="center"
      >
        <VStack className="sophia-features" align="flex-start">
          {features.map((feature) => (
            <Fade key={feature.id} bottom>
              <Box
                rounded="full"
                maxWidth="260px"
                w="full"
                p="2px"
                bgImage="linear-gradient(90deg, rgba(146, 120, 190, 0.2) 20%, rgba(146, 120, 190, .6) 77%)"
              >
                <Stack
                  bgColor="#040414"
                  // border="2px solid"
                  // borderColor="#9278be"
                  width="100%"
                  w="full"
                  padding="10px 15px 10px 20px"
                  fontSize="14px"
                  rounded="full"
                  direction="row"
                >
                  <Image
                    src={feature.icon}
                    alt={feature.label + " feature icon"}
                    width={20}
                    height={20}
                  />
                  <Text>{feature.label}</Text>
                </Stack>
              </Box>
            </Fade>
          ))}
        </VStack>
        <Box
          display="grid"
          placeContent="center"
          maxW={{ base: "80%", lg: "23%" }}
          transform={{ base: "rotate(90deg)", lg: "none" }}
          position="relative"
        >
          <Fade>
            <Image
              src="/assets/chain/left-lines.png"
              alt="left side lines"
              width={400}
              height={400}
            />
          </Fade>
          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={40}
            height={40}
            className="machine-learning-logo-right-1"
          />
          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={40}
            height={40}
            className="machine-learning-logo-right-2"
          />
          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={40}
            height={40}
            className="machine-learning-logo-right-3"
          />
        </Box>
        <Box maxW={{ base: "360px", lg: "200px", xl: "360px" }}>
          <Fade bottom>
            <Box
              w="full"
              p="2px"
              bgImage="linear-gradient(90deg, rgba(146, 120, 190, 0.2) 20%, rgba(146, 120, 190, .6) 77%)"
              borderRadius={{ base: "20px", xl: "22%" }}
            >
              <Stack
                bgColor="#040414"
                borderRadius={{ base: "18px", xl: "22%" }}
                overflow="hidden"
                px="8"
                pb="0"
                pt="5"
                alignItems={{ base: "center", xl: "flex-start" }}
                spacing="5"
                direction={{ base: "column-reverse", xl: "row" }}
              >
                <Image
                  src="/assets/chain/sophia-image.png"
                  alt="sophia image"
                  width={140}
                  height={140}
                />
                <Text
                  textAlign={{ base: "center", xl: "left" }}
                  fontSize="28px"
                  pt="2"
                  lineHeight="110%"
                >
                  Machine
                  <br /> Learning
                  <br /> Model
                </Text>
              </Stack>
            </Box>
          </Fade>
        </Box>
        <Box
          display="grid"
          placeContent="center"
          maxW={{ base: "80%", lg: "20%" }}
          transform={{ base: "rotate(90deg)", lg: "none" }}
          m={{ base: "70px 10px", sm: "90px 10px", lg: "inherit" }}
          position="relative"
        >
          <Fade>
            <Image
              src="/assets/chain/right-lines.png"
              alt="right side lines"
              width={400}
              height={400}
            />
          </Fade>
          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={40}
            height={40}
            className="machine-learning-logo-1"
          />
          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={40}
            height={40}
            className="machine-learning-logo-2"
          />
          <Image
            src="/assets/logo-icon.png"
            alt="logo icon"
            width={40}
            height={40}
            className="machine-learning-logo-3"
          />
        </Box>

        <VStack className="nodes" ml="-12px">
          {nodes.map((node, i) => (
            <Fade key={node.id} bottom>
              <Box
                rounded="full"
                maxWidth="260px"
                w="full"
                p="2px"
                bgImage="linear-gradient(90deg, rgba(146, 120, 190, 0.2) 20%, rgba(146, 120, 190, .6) 77%)"
                position="relative"
              >
                <Stack
                  bgColor="#040414"
                  // border="2px solid"
                  // borderColor="#9278be"
                  width="100%"
                  w="full"
                  padding="10px 15px 10px 20px"
                  fontSize="14px"
                  rounded="full"
                  direction={{ base: "column", md: "row" }}
                >
                  <Text>{node.label}</Text>
                </Stack>
                {i === 3 ? null : (
                  <Box
                    position="absolute"
                    right="-35px"
                    top={`${(i + 1) * 5 + 10}px`}
                  >
                    <Image
                      src="/assets/chain/node-connecting-arrow.png"
                      alt="node connecting arrow"
                      width={26}
                      height={26}
                    />
                  </Box>
                )}
              </Box>
            </Fade>
          ))}
          <Image
            src="/assets/chain/nodes-connecting-dots.png"
            alt="node connecting nodes image"
            width={50}
            height={50}
          />
          <Box
            rounded="full"
            maxWidth="260px"
            w="full"
            p="2px"
            bgImage="linear-gradient(90deg, rgba(255,255,255, 0.2) 20%, rgba(255,255,255,.6) 77%)"
            position="relative"
          >
            <HStack
              bgColor="#000"
              // border="2px solid"
              // borderColor="#9278be"
              width="100%"
              w="full"
              padding="10px 15px 10px 20px"
              fontSize="14px"
              rounded="full"
            >
              <Text>Node N</Text>
            </HStack>
            <Box position="absolute" right="-48px" top="-52px">
              <Image
                src="/assets/chain/node-connecting-arrow.png"
                alt="node connecting arrow"
                width={40}
                height={40}
              />
            </Box>
          </Box>
        </VStack>
      </Stack>
    </Container>
  );
}
