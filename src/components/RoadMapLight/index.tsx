import React from "react";
import {
  Box,
  Container,
  Text,
  Image as CImage,
  SimpleGrid,
  position,
} from "@chakra-ui/react";
import RoadMapCard from "./RoadMapCardLight";

const Fade = require("react-reveal/Fade");

export default function RoadMap() {
  return (
    <Box
      // bgImage="/assets/roadmap/background.jpg"
      // bgSize={{ base: "cover", md: "100% 100%" }}
      // bgPos="center"
      // bgRepeat="no-repeat"
      color={"#000"}
      // bg={"gray.300"}
      pt={{ base: "40px", md: "160px" }}
      // pb={{ base: "50px", md: "100px" }}
    >
      <Container mt={"20"} maxW="88%" pb={{ base: "60px", md: "0px" }}>
        <Fade bottom>
          <Text
            as="h1"
            textAlign={{ base: "center", md: "left" }}
            color={"#000"}
            fontSize="5xl"
            fontWeight={500}
          >
            RoadMap
          </Text>
        </Fade>
      </Container>
      <Container
        justifyContent={"center"}
        maxW="90%"
        pb="70px"
        pos="relative"
        height={"full"}
        gap={"500px"}
        display={"flex"}
        flexDir={"column"}
      >
        <Fade bottom>
          <Box
            display={{ base: "block", md: "block", lg: "flex" }}
            justifyContent={"center"}
            height={"full"}
            pos={"relative"}
          >
            {/* <SimpleGrid
            columns={{ base: 1, md: 2, lg: 5 }}
            spacing={{ base: "70px", md: "0", lg: "0" }}
          > */}
            <Box mt={{ md: "150px" }}>
              <Text px={"10px"} pb={"20px"} fontSize={"20px"} fontWeight={600}>
                Q4 2023 / Q1 2024
              </Text>
              <RoadMapCard
                bgImageUrl="/assets/roadmaplight/1.png"
                // title="Q4 2023 / Q1 2024"
                // minH={"650px"}
                // mb={"300px"}
                maxH={"750px"}
              >
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Theoretical Process
                  </Text>

                  <Text fontSize="13px" opacity=".7" mb="4">
                    Initiation of the theoretical analysis of applying multiple
                    types of nodes in a single blockchain.
                  </Text>
                  <Text fontSize="13px" opacity=".7">
                    Applying multiple types of nodes required implementing an
                    additional Artificial Intelligence tool. This tool would
                    connect directly to the consensus algorithm to analyze and
                    categorize the behavior of the nodes and their communication
                    with each other.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Brand Identity
                  </Text>

                  <Text fontSize="13px" opacity=".7">
                    Alongside the product decided to tackle, the corporate image
                    and legal entities were constituted in order to provide a
                    professional image for the public.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Development Process: <br /> Phron AI - Layer 1
                  </Text>

                  <Text fontSize="13px" opacity=".7">
                    The first case study for a blockchain consensus algorithm
                    integrated with the initial state of the AI Composition
                    (Machine Learning) is integrated to begin checking the
                    practical behavior of the Machine Learning system throughout
                    the Node testing for the different types in current
                    existence.
                  </Text>
                </Box>
              </RoadMapCard>
            </Box>
            <Box
              pos={"relative"}
              display={{ base: "none", md: "none", lg: "flex" }}
              top={"290px"}
            >
              <CImage
                height={"390px"}
                width={"90px"}
                src="/assets/roadmaplight/curvedline.svg"
                alt=".."
              />
            </Box>
            <Box mt={{ base: "50px", md: "350px" }}>
              <Text px={"10px"} pb={"20px"} fontSize={"20px"} fontWeight={600}>
                Q2 2024
              </Text>
              <RoadMapCard
                // float={{ md: "right" }}
                bgImageUrl="/assets/roadmaplight/2.png"
                // title="Q2 2024"

                // minH={"750px"}
                maxH={"950px"}
              >
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Practical Process: Testnet V1.0
                  </Text>

                  <Text fontSize="13px" opacity=".7" mb="4">
                    The first version of the Testnet for Phron AI Layer 1 is
                    implemented. This will provide real data from transactions
                    and usage from the public to check the system&apos;s
                    efficiency through Telemetry.
                  </Text>
                  <Text fontSize="13px" opacity=".7" mb="4">
                    This process helps gather data from the inputs and outputs
                    of the Machine Learning system to evolve into an
                    Encoder-Decoder Convolutional Neural Network (CNN) with
                    fine-tuned parameters.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Ecosystem Development
                  </Text>

                  <Text fontSize="13px" opacity=".7" mb="4">
                    Appliances for the chain are deployed into Testnet V1.0. The
                    current ones integrated into the ecosystem are Decentralized
                    Wallet, Decentralized Exchange, Cross-Chain Bridge, NFT
                    Marketplace, and Chain Explorer.
                  </Text>
                  <Text fontSize="13px" opacity=".7">
                    This conglomerate helps with the transactional study process
                    of the three types of nodes, alongside providing more
                    testing subjects regarding smart contracts deployment, NFT
                    behavior, and Cross-Chain Security.
                  </Text>
                </Box>
              </RoadMapCard>
            </Box>
            <Box
              pos={"relative"}
              display={{ base: "none", md: "none", lg: "flex" }}
              top={"690px"}
            >
              <CImage
                height={"390px"}
                width={"90px"}
                src="/assets/roadmaplight/curvedline.svg"
                alt=".."
              />
            </Box>
            <Box mt={{ base: "50px", md: "550px" }}>
              <Text px={"10px"} pb={"20px"} fontSize={"20px"} fontWeight={600}>
                Q2 2024
              </Text>
              <RoadMapCard
                // float={{ md: "right" }}
                bgImageUrl="/assets/roadmaplight/3.png"
                // title="Q2 2024"

                minH={"730px"}
                // maxH={"950px"}
              >
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Practical Process: Testnet V1.0
                  </Text>

                  <Text fontSize="13px" opacity=".7" mb="4">
                    The first version of the Testnet for Phron AI Layer 1 is
                    implemented. This will provide real data from transactions
                    and usage from the public to check the system&apos;s
                    efficiency through Telemetry.
                  </Text>
                  <Text fontSize="13px" opacity=".7" mb="4">
                    This process helps gather data from the inputs and outputs
                    of the Machine Learning system to evolve into an
                    Encoder-Decoder Convolutional Neural Network (CNN) with
                    fine-tuned parameters.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Ecosystem Development
                  </Text>

                  <Text fontSize="13px" opacity=".7" mb="4">
                    Appliances for the chain are deployed into Testnet V1.0. The
                    current ones integrated into the ecosystem are Decentralized
                    Wallet, Decentralized Exchange, Cross-Chain Bridge, NFT
                    Marketplace, and Chain Explorer.
                  </Text>
                  <Text fontSize="13px" opacity=".7">
                    This conglomerate helps with the transactional study process
                    of the three types of nodes, alongside providing more
                    testing subjects regarding smart contracts deployment, NFT
                    behavior, and Cross-Chain Security.
                  </Text>
                </Box>
              </RoadMapCard>
              {/* </SimpleGrid> */}
            </Box>
          </Box>
        </Fade>
        <Fade bottom>
          <Box
            display={{ base: "block", md: "block", lg: "flex" }}
            mt={"20"}
            // gap={20}
            height={"0px"}
            justifyContent={"center"}
            pos={"relative"}
          >
            {/* <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={"650px"}
            mt={{ base: "270px" }}
          > */}
            <Box mt={{ base: "-550px", lg: "-800px" }}>
              <Text px={"10px"} pb={"20px"} fontSize={"20px"} fontWeight={600}>
                Q3 2024
              </Text>
              <RoadMapCard
                bgImageUrl="/assets/roadmaplight/4.png"
                // title="Q3 2024"
                minH={"750px"}
              >
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Data implementation to CNN
                  </Text>

                  <Text fontSize="13px" opacity=".7">
                    Using the data gathered across the different types of
                    transactions and deployments that trained the Machine
                    Learning initial code, parameters are tuned into the
                    Encoder-Decoder CNN while implementing new inputs and
                    outputs.
                  </Text>
                </Box>

                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Practical Process: Testnet V2.0
                  </Text>

                  <Text fontSize="13px" opacity=".7" mb="4">
                    After training of the CNN is completed, Testnet V2.0 is
                    launched. This process proves the completion of the
                    technology applied through the Sophia Protocol in terms of
                    the Consensus Mechanism.
                  </Text>
                  <Text fontSize="13px" opacity=".7">
                    This version of Testnet is the pre-release to the Mainnet
                    Version.
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Audit Process for Testnet V2.0
                  </Text>

                  <Text fontSize="13px" opacity=".7">
                    After our team and community do Testnet V2.0 Training and
                    Testing, we begin an auditing process with a very reputable
                    crypto cybersecurity company to check compliance for
                    penetration tests, flooding attacks, malicious nodes, and
                    other technical points that could potentially threaten the
                    network in the future.
                  </Text>
                </Box>
              </RoadMapCard>
            </Box>
            <Box
              pos={"relative"}
              display={{ base: "none", md: "none", lg: "flex" }}
              top={"-690px"}
            >
              <CImage
                height={"390px"}
                width={"90px"}
                src="/assets/roadmaplight/curvedline.svg"
                alt=".."
              />
            </Box>
            <Box mt={{ base: "50px", md: "", lg: "-600px" }}>
              <Text px={"10px"} pb={"20px"} fontSize={"20px"} fontWeight={600}>
                Q4 2024
              </Text>
              <RoadMapCard
                float={{ md: "right" }}
                // mt={{ md: "-360px", lg: "-250px" }}

                bgImageUrl="/assets/roadmaplight/5.png"
                // title="Q4 2024"
                minH={"500px"}
              >
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    Phron AI: Layer 1 Mainnet Launch
                  </Text>

                  <Text fontSize="13px" opacity=".7">
                    After receiving the approval of the Auditing Company
                    regarding the threat levels and the solution of possible
                    vulnerabilities of the chain, Mainnet will be launched.
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    $PHRON Launch
                  </Text>

                  <Text fontSize="13px" opacity=".7">
                    By having available Mainnet, the official version of the
                    PHRON token in Phron AI: Layer 1 is publicly launched and
                    made available to the public to work transactions, smart
                    contract development, and NFT Mints, among others.
                  </Text>
                </Box>
              </RoadMapCard>
            </Box>
            <Box
              pos={"relative"}
              display={{ base: "none", md: "none", lg: "flex" }}
              top={"-320px"}
            >
              <CImage
                height={"390px"}
                width={"90px"}
                src="/assets/roadmaplight/curvedline.svg"
                alt=".."
              />
            </Box>
            <Box mt={{ base: "50px", md: "", lg: "-400px" }}>
              <Text px={"10px"} pb={"20px"} fontSize={"20px"} fontWeight={600}>
                Q1 2025
              </Text>
              <RoadMapCard
                // mt={{ md: "50px", lg: "200px" }}

                // bgImageUrl="/assets/roadmaplight/5.png"
                // title="Q1 2025"
                bg="white"
                noBottomMargin
              >
                <Box>
                  <Text
                    fontSize={{ base: "xl", md: "lg", lg: "xl" }}
                    as="h3"
                    fontWeight={500}
                    mb="4"
                    opacity=".9"
                  >
                    PhronZero: The beginnings
                  </Text>

                  <Text fontSize="13px" opacity=".7" mb="4">
                    Having the reliability and efficiency provided in our
                    Proof-of-Concept, the technology created will be migrated to
                    create a second layer of nodes, IntraNodes, that will manage
                    the communication between the different Zerochains that will
                    be on top of PhronZero.
                  </Text>
                  <Text fontSize="13px" opacity=".7">
                    This concept integrates a second layer of complexity, having
                    2+ layers of CNN connections that will constitute the
                    IntraNodes and the ZeroNodes of each subsequent Zerochain.
                  </Text>
                </Box>
              </RoadMapCard>
              {/* </SimpleGrid> */}
            </Box>
          </Box>{" "}
        </Fade>
      </Container>

      {/* <Text textAlign="center" fontSize="2xl" color="#350175" fontWeight={500}>
        soon
      </Text> */}
    </Box>
  );
}
